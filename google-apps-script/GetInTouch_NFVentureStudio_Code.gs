/**
 * ============================================================================
 * SCRIPT 1: NF VENTURE STUDIO — GET IN TOUCH & INCUBATION APPLICATION PROCESSOR
 * ============================================================================
 * Target Account: ncfventurestudio@gmail.com
 *
 * Primary Functions:
 * 1. Receives form submissions from the "Get in Touch" / Incubation Application form.
 * 2. Stores application data in the connected Google Sheet (tab: "Incubation_Applications").
 * 3. Sends an automated executive email notification to ncfventurestudio@gmail.com.
 * 4. Generates a unique tracking Reference ID (e.g., NFVS-20261103-4921).
 * 5. Returns a structured JSON response back to the website.
 */

// ============================================================================
// CONFIGURATION
// ============================================================================
const CONFIG = {
  // Destination email for new applicant alerts
  NOTIFICATION_EMAIL: "ncfventurestudio@gmail.com",

  // Organization branding
  STUDIO_NAME: "NF Venture Studio",
  HELPLINE_PHONE: "+91 92091 12577",
  PRIMARY_COLOR: "#1746A2",  // Sapphire Royal Blue
  ACCENT_COLOR: "#D4AF37",   // Executive Gold
  DARK_BG_COLOR: "#071A38",  // Midnight Navy

  // Sheet tab name
  SHEET_NAME: "Incubation_Applications",

  // Timezone
  TIMEZONE: "Asia/Kolkata",

  // Optional: Set if creating a Standalone Apps Script instead of Container-Bound
  // Leave empty ("") if you opened this via Google Sheet > Extensions > Apps Script
  SPREADSHEET_ID: "",
};

// ============================================================================
// POST HANDLER (Receives submission from website)
// ============================================================================
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({
        success: false,
        message: "No post data received. Expected JSON application payload."
      });
    }

    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      return createJsonResponse({
        success: false,
        message: "Malformed JSON payload: " + parseErr.message
      });
    }

    // Extract fields
    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const phone = (data.phone || "").trim();
    const organization = (data.organization || "").trim();
    const track = (data.track || "Student Startup Track").trim();
    const domain = (data.technology || data.domain || "").trim();
    const stage = (data.stage || "").trim();
    const idea = (data.idea || data.description || "").trim();
    const dpdpConsent = data.dpdpConsent ? "Granted (DPDP Act, 2023)" : (data.consentNotice || "Granted");

    if (!name || !email || !phone) {
      return createJsonResponse({
        success: false,
        message: "Missing required fields: Full Name, Email, and Phone are mandatory."
      });
    }

    // Generate Timestamp & Reference ID
    const now = new Date();
    const formattedTimestamp = Utilities.formatDate(now, CONFIG.TIMEZONE, "yyyy-MM-dd HH:mm:ss");
    const dateCode = Utilities.formatDate(now, CONFIG.TIMEZONE, "yyyyMMdd");
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceId = "NFVS-" + dateCode + "-" + randomSuffix;

    // Connect to Google Sheet
    const { ss, sheet } = getSpreadsheetAndSheet(data.spreadsheetId);
    const spreadsheetUrl = ss ? ss.getUrl() : "";

    // 1. Record application to sheet
    let rowNumber = null;
    let sheetSaved = false;

    try {
      rowNumber = saveApplicationToSheet(sheet, {
        timestamp: formattedTimestamp,
        referenceId: referenceId,
        track: track,
        name: name,
        email: email,
        phone: phone,
        organization: organization,
        domain: domain,
        stage: stage,
        idea: idea,
        dpdpConsent: dpdpConsent,
      });
      sheetSaved = true;
    } catch (sheetErr) {
      console.error("Error saving application to Google Sheet:", sheetErr);
      return createJsonResponse({
        success: false,
        message: "Failed to write to Google Sheet: " + sheetErr.message
      });
    }

    // 2. Dispatch Email to ncfventurestudio@gmail.com
    let emailSent = false;
    let emailErrorMsg = null;

    try {
      sendApplicationEmail({
        referenceId: referenceId,
        timestamp: formattedTimestamp,
        track: track,
        name: name,
        email: email,
        phone: phone,
        organization: organization,
        domain: domain,
        stage: stage,
        idea: idea,
        dpdpConsent: dpdpConsent,
        spreadsheetUrl: spreadsheetUrl,
        rowNumber: rowNumber
      });
      emailSent = true;
      updateNotificationStatus(sheet, rowNumber, "Email Sent (" + formattedTimestamp + ")");
    } catch (emailErr) {
      console.error("Email notification failed for " + referenceId + ":", emailErr);
      emailErrorMsg = emailErr.message || String(emailErr);
      updateNotificationStatus(sheet, rowNumber, "Email Failed: " + emailErrorMsg);
    }

    // Return structured confirmation
    return createJsonResponse({
      success: true,
      message: "Application submitted successfully",
      referenceId: referenceId,
      rowNumber: rowNumber,
      sheetSaved: sheetSaved,
      emailSent: emailSent,
      emailError: emailErrorMsg || undefined
    });

  } catch (err) {
    console.error("Server error in doPost:", err);
    return createJsonResponse({
      success: false,
      message: "Internal server error: " + err.message
    });
  }
}

// ============================================================================
// GET HANDLER (Health-Check)
// ============================================================================
function doGet(e) {
  try {
    const { ss, sheet } = getSpreadsheetAndSheet();
    return createJsonResponse({
      status: "online",
      service: "NF Venture Studio — Get in Touch / Application Processor",
      targetNotificationEmail: CONFIG.NOTIFICATION_EMAIL,
      spreadsheetName: ss ? ss.getName() : "N/A",
      sheetTab: sheet ? sheet.getName() : "N/A",
      totalApplications: sheet ? Math.max(0, sheet.getLastRow() - 1) : 0,
      timestamp: Utilities.formatDate(new Date(), CONFIG.TIMEZONE, "yyyy-MM-dd HH:mm:ss 'IST'"),
      version: "2.1.0"
    });
  } catch (err) {
    return createJsonResponse({
      status: "online_with_notice",
      service: "NF Venture Studio — Application Processor",
      notice: err.message,
      timestamp: new Date().toISOString()
    });
  }
}

// ============================================================================
// SPREADSHEET HELPERS
// ============================================================================
function getSpreadsheetAndSheet(overrideId) {
  let ss = null;

  // 1. Check override
  if (overrideId && String(overrideId).trim() !== "") {
    try {
      ss = SpreadsheetApp.openById(String(overrideId).trim());
    } catch (e) {
      ss = null;
    }
  }

  // 2. Check CONFIG
  if (!ss && CONFIG.SPREADSHEET_ID && CONFIG.SPREADSHEET_ID.trim() !== "") {
    try {
      ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID.trim());
    } catch (e) {
      ss = null;
    }
  }

  // 3. Container-bound active spreadsheet (Extensions > Apps Script)
  if (!ss) {
    try {
      ss = SpreadsheetApp.getActiveSpreadsheet();
    } catch (e) {
      ss = null;
    }
  }

  if (!ss) {
    throw new Error("Target Google Sheet not found. Please provide SPREADSHEET_ID in CONFIG or open this script from your Google Sheet.");
  }

  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
  }

  return { ss, sheet };
}

function saveApplicationToSheet(sheet, data) {
  // Initialize headers if sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Reference ID",
      "Track",
      "Full Name",
      "Email Address",
      "Phone / WhatsApp",
      "Organization / College",
      "Domain",
      "Current Stage",
      "Project Overview / Idea",
      "DPDP Consent",
      "Notification Status"
    ]);

    const headerRange = sheet.getRange(1, 1, 1, 12);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#1746A2");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontSize(10);
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    data.timestamp,
    data.referenceId,
    data.track,
    data.name,
    data.email,
    data.phone,
    data.organization || "Independent Innovator",
    data.domain || "General Tech",
    data.stage || "Ideation",
    data.idea,
    data.dpdpConsent,
    "Processing"
  ]);

  return sheet.getLastRow();
}

function updateNotificationStatus(sheet, rowNumber, status) {
  try {
    if (sheet && rowNumber && rowNumber > 1) {
      sheet.getRange(rowNumber, 12).setValue(status);
    }
  } catch (e) {
    console.warn("Could not update notification status cell:", e);
  }
}

// ============================================================================
// EMAIL DISPATCH TO ncfventurestudio@gmail.com
// ============================================================================
function sendApplicationEmail(app) {
  const subject = "🚀 New Incubation Application: " + app.name + " (" + app.referenceId + ") - " + app.track;

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #0f172a; }
    .card { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .header { background: linear-gradient(135deg, #071A38 0%, #1746A2 100%); padding: 30px 28px; color: #ffffff; text-align: left; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 800; color: #ffffff; letter-spacing: -0.3px; }
    .header .tag { display: inline-block; background: rgba(212,175,55,0.2); color: #E8C85A; border: 1px solid rgba(212,175,55,0.4); padding: 3px 10px; border-radius: 99px; font-size: 11px; font-weight: 700; margin-bottom: 10px; text-transform: uppercase; }
    .ref-badge { background: #0b1f3d; padding: 8px 14px; border-radius: 8px; margin-top: 14px; display: inline-block; font-size: 13px; font-family: monospace; color: #E8C85A; font-weight: bold; }
    .body-content { padding: 28px; }
    .section-title { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; color: #1746A2; margin-bottom: 12px; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 22px; }
    .info-table td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-size: 13px; }
    .info-table td.label { font-weight: 600; color: #64748b; width: 34%; }
    .info-table td.value { font-weight: 600; color: #0f172a; }
    .idea-box { background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #1746A2; border-radius: 8px; padding: 14px 16px; margin-bottom: 22px; font-size: 13px; line-height: 1.6; color: #334155; }
    .cta-row { text-align: center; padding: 18px 0; }
    .cta-btn { display: inline-block; background: #1746A2; color: #ffffff !important; text-decoration: none; padding: 11px 22px; border-radius: 8px; font-weight: 700; font-size: 13px; margin: 4px; }
    .footer { background: #f8fafc; padding: 20px 28px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="tag">Incubation Application Intake</div>
      <h1>NF Venture Studio</h1>
      <div class="ref-badge">Reference ID: ${escapeHtml(app.referenceId)}</div>
    </div>
    
    <div class="body-content">
      <div class="section-title">Applicant Profile</div>
      <table class="info-table">
        <tr>
          <td class="label">Full Name:</td>
          <td class="value"><strong>${escapeHtml(app.name)}</strong></td>
        </tr>
        <tr>
          <td class="label">Email Address:</td>
          <td class="value"><a href="mailto:${escapeHtml(app.email)}" style="color: #1746A2;">${escapeHtml(app.email)}</a></td>
        </tr>
        <tr>
          <td class="label">Phone / WhatsApp:</td>
          <td class="value"><a href="tel:${escapeHtml(app.phone)}" style="color: #1746A2;">${escapeHtml(app.phone)}</a></td>
        </tr>
        <tr>
          <td class="label">Institution / Org:</td>
          <td class="value">${escapeHtml(app.organization || "Independent")}</td>
        </tr>
        <tr>
          <td class="label">Incubation Track:</td>
          <td class="value"><span style="color: #1746A2; font-weight: bold;">${escapeHtml(app.track)}</span></td>
        </tr>
        <tr>
          <td class="label">Domain:</td>
          <td class="value"><strong>${escapeHtml(app.domain || "N/A")}</strong></td>
        </tr>
        <tr>
          <td class="label">Current Stage:</td>
          <td class="value">${escapeHtml(app.stage || "N/A")}</td>
        </tr>
        <tr>
          <td class="label">Submission Time:</td>
          <td class="value">${escapeHtml(app.timestamp)} (IST)</td>
        </tr>
      </table>

      <div class="section-title">Idea / Project Overview</div>
      <div class="idea-box">
        ${escapeHtml(app.idea || "No project overview provided.")}
      </div>

      <div class="cta-row">
        <a href="mailto:${escapeHtml(app.email)}?subject=Re:%20NF%20Venture%20Studio%20Application%20(${encodeURIComponent(app.referenceId)})" class="cta-btn">Reply to Applicant</a>
        ${app.spreadsheetUrl ? `<a href="${app.spreadsheetUrl}" class="cta-btn" style="background:#071A38;">Open Google Sheet</a>` : ""}
      </div>
    </div>

    <div class="footer">
      This is an automated operational notification generated by the NF Venture Studio web portal.<br>
      Recipient: <strong>${CONFIG.NOTIFICATION_EMAIL}</strong> &bull; Helpline: ${CONFIG.HELPLINE_PHONE}
    </div>
  </div>
</body>
</html>
  `;

  MailApp.sendEmail({
    to: CONFIG.NOTIFICATION_EMAIL,
    replyTo: app.email,
    subject: subject,
    htmlBody: htmlBody
  });
}

// ============================================================================
// UTILITIES
// ============================================================================
function escapeHtml(text) {
  if (text === null || text === undefined) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br>");
}

function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ============================================================================
// TEST FUNCTION (Run from Apps Script editor to authorize & test email)
// ============================================================================
function testSendNotification() {
  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        name: "Test Applicant",
        email: "ncfventurestudio@gmail.com",
        phone: "+91 92091 12577",
        organization: "Venture Test Academy",
        track: "Student Startup Track",
        technology: "AI/ML",
        stage: "Prototype",
        idea: "Testing the automated notification pipeline for NF Venture Studio.",
        dpdpConsent: true
      })
    }
  };
  const res = doPost(fakeEvent);
  Logger.log(res.getContent());
}
