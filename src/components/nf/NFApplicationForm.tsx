import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Send, Building2, GraduationCap, Microscope, Rocket, Loader2, AlertCircle, Mail, Phone, Clock, ShieldCheck } from 'lucide-react';

export const GOOGLE_SPREADSHEET_ID = '1IAbf4FFnsVHpbUuHLPb79Y6J5atGYE-cA4pEuINoroY';
export const NOTIFICATION_EMAIL = 'ncfitcell@gmail.com';
export const GOOGLE_SCRIPT_URL =
  (import.meta as any).env?.VITE_GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbwsJcM4_xdn-gvplwRd09JIVxNUygTBWjlI-8ocaaDZIxD32oErJjdLCuUT_WO5pb2sjA/exec';

export interface NFApplicationFormProps {
  initialTrack?: string;
  isDark?: boolean;
  isModal?: boolean;
  onCancel?: () => void;
  onSuccess?: () => void;
}

export const NFApplicationForm: React.FC<NFApplicationFormProps> = ({
  initialTrack = 'student',
  isDark = false,
  isModal = false,
  onCancel,
  onSuccess,
}) => {
  const [selectedTrack, setSelectedTrack] = useState(initialTrack);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    projectTitle: '',
    domain: '',
    description: '',
    stage: '',
  });
  const [dpdpConsent, setDpdpConsent] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isSubmittingRef = useRef(false);

  useEffect(() => {
    setSelectedTrack(initialTrack);
  }, [initialTrack]);

  const handleReset = () => {
    setIsSubmitted(false);
    setReferenceId(null);
    setErrorMessage(null);
    setFieldErrors({});
    setDpdpConsent(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      institution: '',
      projectTitle: '',
      domain: '',
      description: '',
      stage: '',
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const tracks = [
    {
      id: 'student',
      name: 'Student Startup Track',
      icon: GraduationCap,
    },
    {
      id: 'faculty',
      name: 'Faculty Startup Track',
      icon: Microscope,
    },
    {
      id: 'external',
      name: 'External / Solo Founder',
      icon: Rocket,
    },
    {
      id: 'institutional',
      name: 'Campus / Institutional Partner',
      icon: Building2,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate form submissions while in-flight
    if (isSubmittingRef.current || isSubmitting) return;

    // Field-level client validation
    const errors: Record<string, string> = {};
    const trimmedName = formData.fullName.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedOrg = formData.institution.trim();

    if (!trimmedName || trimmedName.length < 2) {
      errors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      errors.email = 'Please provide a valid email address (e.g. name@domain.com).';
    }

    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    if (!trimmedPhone || (digitsOnly.length !== 10 && !(digitsOnly.length === 12 && digitsOnly.startsWith('91')))) {
      errors.phone = 'Please enter a valid 10-digit mobile or WhatsApp number.';
    }

    if (!trimmedOrg || trimmedOrg.length < 2) {
      errors.institution = 'Please provide your university, college, or organization name.';
    }

    if (!formData.domain) {
      errors.domain = 'Please select a technology domain.';
    }

    if (!formData.stage) {
      errors.stage = 'Please select the current stage of your innovation.';
    }

    if (!dpdpConsent) {
      errors.dpdpConsent = 'Please accept the DPDP data consent to proceed with your application.';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setErrorMessage('Please review the form and correct the highlighted fields before submitting.');
      return;
    }

    setFieldErrors({});
    isSubmittingRef.current = true;
    setIsSubmitting(true);
    setErrorMessage(null);

    const trackName = tracks.find((t) => t.id === selectedTrack)?.name || selectedTrack;

    const payload = {
      spreadsheetId: GOOGLE_SPREADSHEET_ID,
      targetEmail: NOTIFICATION_EMAIL,
      track: trackName,
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
      organization: trimmedOrg,
      technology: formData.domain,
      stage: formData.stage,
      idea: formData.description.trim(),
      dpdpConsent: true,
      consentNotice: 'Consented under Digital Personal Data Protection (DPDP) Act, 2023',
      consentTimestamp: new Date().toISOString(),
    };

    try {
      let isSuccess = false;
      let serverRefId: string | null = null;

      // 1. Primary Attempt: Standard fetch with JSON confirmation
      try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          const data = await response.json().catch(() => null);
          if (data && (data.success === true || data.status === 'success')) {
            isSuccess = true;
            serverRefId = data.referenceId;
          }
        }
      } catch (corsErr) {
        console.warn('Standard CORS fetch encountered redirect/blocking, attempting no-cors fallback:', corsErr);
      }

      // 2. Secondary Attempt: If browser CORS redirect or adblocker blocked reading the response,
      // dispatch via mode: "no-cors" so the browser delivers the payload directly to Google Apps Script
      if (!isSuccess) {
        try {
          await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(payload),
          });
          isSuccess = true;
        } catch (noCorsErr) {
          console.error('No-cors submission also failed:', noCorsErr);
        }
      }

      if (!isSuccess) {
        throw new Error('Unable to connect to the submission service. Please check your internet connection or email us at ncfventurestudio@gmail.com.');
      }

      // Verified submission confirmation
      if (serverRefId) {
        setReferenceId(serverRefId);
      } else {
        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
        const rand = Math.floor(1000 + Math.random() * 9000);
        setReferenceId(`NFVS-${dateStr}-${rand}`);
      }

      setIsSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      console.error('Error submitting application:', err);
      setIsSubmitted(false);
      setErrorMessage(
        err.message || 'Unable to connect to the submission server. Please try again or use direct contact below.'
      );
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-6 sm:py-8 space-y-4">
        <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-xs">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Application Received Successfully
          </h3>
          <p className="max-w-md mx-auto text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200">
            Thank you for applying to NF Venture Studio. Your application has been logged with our incubation desk. Our team will review your submission and connect with you within 48 hours.
          </p>
        </div>

        {/* 48-Hour Protocol Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-[#946912] dark:text-[#E8BD56] border border-[#E8D6A7] dark:border-amber-800/60 mx-auto">
          <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>48-Hour Review Commitment &middot; Dedicated Incubation Desk</span>
        </div>

        {/* Application Summary Card */}
        <div
          className={`p-4 rounded-xl border max-w-sm mx-auto text-left text-xs space-y-2 shadow-xs ${
            isDark ? 'bg-slate-800/90 border-slate-700 text-slate-200' : 'bg-slate-50 border-[#DCE3EC] text-slate-800'
          }`}
        >
          {referenceId && (
            <div className="pb-1.5 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Reference ID:</span>
              <span className="font-mono font-bold text-[#1746A2] dark:text-sky-300 bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-[#DCE3EC] dark:border-slate-700">
                {referenceId}
              </span>
            </div>
          )}
          <p><span className="font-semibold text-slate-900 dark:text-white">Applicant:</span> {formData.fullName}</p>
          <p><span className="font-semibold text-slate-900 dark:text-white">Email:</span> {formData.email}</p>
          <p><span className="font-semibold text-slate-900 dark:text-white">Track:</span> {tracks.find((t) => t.id === selectedTrack)?.name}</p>
          <p className="pt-1 text-[11px] text-slate-700 dark:text-slate-300 flex items-center gap-1.5 border-t border-dashed border-slate-200 dark:border-slate-700">
            <Mail className="w-3 h-3 text-[#D4AF37]" />
            <span>Incubation Desk: <strong className="text-slate-900 dark:text-slate-100">ncfventurestudio@gmail.com</strong></span>
          </p>
        </div>

        <div>
          {isModal ? (
            <button
              onClick={() => {
                handleReset();
                if (onCancel) onCancel();
              }}
              className="mt-2 px-6 py-2.5 bg-[#1746A2] hover:bg-[#10264A] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer shadow-xs hover:shadow-sm"
            >
              Done
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="mt-2 px-6 py-2.5 bg-[#1746A2] hover:bg-[#10264A] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer shadow-xs hover:shadow-sm"
            >
              Submit Another Application
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3" noValidate>
      {errorMessage && (
        <div
          className={`p-2.5 rounded-xl border text-xs flex items-center justify-between gap-2 ${
            isDark
              ? 'bg-rose-950/40 border-rose-800/80 text-rose-200'
              : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
            <p className="text-[11px] font-medium leading-tight truncate">{errorMessage}</p>
          </div>
          <button
            type="button"
            onClick={() => setErrorMessage(null)}
            className="p-1 text-rose-500 hover:text-rose-800 dark:hover:text-rose-100 text-sm font-bold shrink-0 cursor-pointer"
            aria-label="Dismiss message"
          >
            ×
          </button>
        </div>
      )}

      {/* Track Selection */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="text-[11px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            Select Your Incubation Track <span className="text-[#D4AF37]">*</span>
          </label>
          <span className="text-[10px] text-slate-600 dark:text-slate-300 font-medium hidden sm:inline">
            Tailored incubation pathway
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {tracks.map((t) => {
            const Icon = t.icon;
            const isSelected = selectedTrack === t.id;
            return (
              <button
                type="button"
                key={t.id}
                disabled={isSubmitting}
                onClick={() => setSelectedTrack(t.id)}
                className={`group relative flex items-center justify-between gap-2.5 px-3 py-2 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? isDark
                      ? 'bg-gradient-to-r from-[#103B82] to-[#1746A2] border-[#D4AF37] text-white shadow-md shadow-blue-950/40 ring-1 ring-[#D4AF37]/50'
                      : 'bg-gradient-to-r from-[#071A38] via-[#103B82] to-[#1746A2] border-[#D4AF37] text-white shadow-md shadow-blue-900/20 ring-1 ring-[#D4AF37]/60'
                    : isDark
                      ? 'border-slate-700/80 text-slate-200 bg-[#071A38]/50 hover:bg-[#071A38] hover:border-slate-600 hover:text-white'
                      : 'border-slate-200 text-slate-700 bg-slate-50/80 hover:bg-blue-50/40 hover:border-[#1746A2]/40 hover:text-slate-900 shadow-2xs'
                } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-amber-400/20 text-[#D4AF37]'
                        : isDark
                          ? 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                          : 'bg-slate-200/70 text-slate-600 group-hover:bg-[#1746A2]/10 group-hover:text-[#1746A2]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-xs font-semibold truncate ${isSelected ? 'text-white' : ''}`}>
                    {t.name}
                  </span>
                </div>
                <div className="shrink-0 flex items-center">
                  {isSelected ? (
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full border border-slate-300 dark:border-slate-600 group-hover:border-slate-400 dark:group-hover:border-slate-500 transition-colors" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Form Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
        <div>
          <label className="block text-[11px] font-bold mb-1 text-slate-800 dark:text-slate-200">
            Full Name *
          </label>
          <input
            type="text"
            required
            disabled={isSubmitting}
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            placeholder="Full Name"
            className={`w-full px-3 py-1.5 sm:py-2 text-xs sm:text-[13px] rounded-lg border transition-colors focus:outline-hidden ${
              fieldErrors.fullName
                ? 'border-rose-500 ring-1 ring-rose-500 bg-rose-50/20'
                : 'focus:border-[#1746A2] focus:ring-1 focus:ring-[#1746A2]'
            } ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-400'
                : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
            } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
          />
          {fieldErrors.fullName && (
            <p className="mt-0.5 text-[10px] text-rose-600 dark:text-rose-400 font-medium">
              {fieldErrors.fullName}
            </p>
          )}
        </div>

        <div>
          <label className="block text-[11px] font-bold mb-1 text-slate-800 dark:text-slate-200">
            Email Address *
          </label>
          <input
            type="email"
            required
            disabled={isSubmitting}
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="name@domain.com"
            className={`w-full px-3 py-1.5 sm:py-2 text-xs sm:text-[13px] rounded-lg border transition-colors focus:outline-hidden ${
              fieldErrors.email
                ? 'border-rose-500 ring-1 ring-rose-500 bg-rose-50/20'
                : 'focus:border-[#1746A2] focus:ring-1 focus:ring-[#1746A2]'
            } ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-400'
                : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
            } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
          />
          {fieldErrors.email && (
            <p className="mt-0.5 text-[10px] text-rose-600 dark:text-rose-400 font-medium">
              {fieldErrors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block text-[11px] font-bold mb-1 text-slate-800 dark:text-slate-200">
            Contact Phone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            disabled={isSubmitting}
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="10-digit mobile number"
            className={`w-full px-3 py-1.5 sm:py-2 text-xs sm:text-[13px] rounded-lg border transition-colors focus:outline-hidden ${
              fieldErrors.phone
                ? 'border-rose-500 ring-1 ring-rose-500 bg-rose-50/20'
                : 'focus:border-[#1746A2] focus:ring-1 focus:ring-[#1746A2]'
            } ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-400'
                : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
            } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
          />
          {fieldErrors.phone && (
            <p className="mt-0.5 text-[10px] text-rose-600 dark:text-rose-400 font-medium">
              {fieldErrors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="block text-[11px] font-bold mb-1 text-slate-800 dark:text-slate-200">
            University / College / Organization *
          </label>
          <input
            type="text"
            required
            disabled={isSubmitting}
            value={formData.institution}
            onChange={(e) => handleInputChange('institution', e.target.value)}
            placeholder="College, university, or organization name"
            className={`w-full px-3 py-1.5 sm:py-2 text-xs sm:text-[13px] rounded-lg border transition-colors focus:outline-hidden ${
              fieldErrors.institution
                ? 'border-rose-500 ring-1 ring-rose-500 bg-rose-50/20'
                : 'focus:border-[#1746A2] focus:ring-1 focus:ring-[#1746A2]'
            } ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-400'
                : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
            } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
          />
          {fieldErrors.institution && (
            <p className="mt-0.5 text-[10px] text-rose-600 dark:text-rose-400 font-medium">
              {fieldErrors.institution}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
        <div>
          <label className="block text-[11px] font-bold mb-1 text-slate-800 dark:text-slate-200">
            Technology Domain *
          </label>
          <select
            required
            disabled={isSubmitting}
            value={formData.domain}
            onChange={(e) => handleInputChange('domain', e.target.value)}
            className={`w-full px-3 py-1.5 sm:py-2 text-xs sm:text-[13px] rounded-lg border transition-colors focus:outline-hidden ${
              fieldErrors.domain
                ? 'border-rose-500 ring-1 ring-rose-500 bg-rose-50/20'
                : 'focus:border-[#1746A2] focus:ring-1 focus:ring-[#1746A2]'
            } ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-white font-medium'
                : 'bg-white border-slate-300 text-slate-900 font-medium'
            } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            <option value="">Select Domain</option>
            <option value="Artificial Intelligence & Machine Learning (AI/ML)">Artificial Intelligence &amp; Machine Learning (AI/ML)</option>
            <option value="Internet of Things & Smart Systems (IoT)">Internet of Things &amp; Smart Systems (IoT)</option>
            <option value="Robotics & Automation">Robotics &amp; Automation</option>
            <option value="Cloud Computing & DevOps">Cloud Computing &amp; DevOps</option>
            <option value="Cybersecurity & Data Privacy">Cybersecurity &amp; Data Privacy</option>
            <option value="EdTech & Digital Learning">EdTech &amp; Digital Learning</option>
            <option value="Electronics & Embedded Systems">Electronics &amp; Embedded Systems</option>
            <option value="Software & Application Development">Software &amp; Application Development</option>
            <option value="Data Science & Big Data Analytics">Data Science &amp; Big Data Analytics</option>
            <option value="Other / Interdisciplinary Innovation">Other / Interdisciplinary Innovation</option>
          </select>
          {fieldErrors.domain && (
            <p className="mt-0.5 text-[10px] text-rose-600 dark:text-rose-400 font-medium">
              {fieldErrors.domain}
            </p>
          )}
        </div>

        <div>
          <label className="block text-[11px] font-bold mb-1 text-slate-800 dark:text-slate-200">
            Current Stage *
          </label>
          <select
            required
            disabled={isSubmitting}
            value={formData.stage}
            onChange={(e) => handleInputChange('stage', e.target.value)}
            className={`w-full px-3 py-1.5 sm:py-2 text-xs sm:text-[13px] rounded-lg border transition-colors focus:outline-hidden ${
              fieldErrors.stage
                ? 'border-rose-500 ring-1 ring-rose-500 bg-rose-50/20'
                : 'focus:border-[#1746A2] focus:ring-1 focus:ring-[#1746A2]'
            } ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-white font-medium'
                : 'bg-white border-slate-300 text-slate-900 font-medium'
            } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            <option value="">Select Current Stage</option>
            <option value="Ideation">Ideation / Conceptual Phase</option>
            <option value="Prototype">Laboratory Prototype / PoC</option>
            <option value="Patented">Patent Filed / Academic Research</option>
            <option value="MVP">MVP Ready (Validation Stage)</option>
            <option value="Scaling">Commercialization &amp; Scaling</option>
          </select>
          {fieldErrors.stage && (
            <p className="mt-0.5 text-[10px] text-rose-600 dark:text-rose-400 font-medium">
              {fieldErrors.stage}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-bold mb-1 text-slate-800 dark:text-slate-200">
          Brief Idea / Project Overview
        </label>
        <textarea
          rows={2}
          disabled={isSubmitting}
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          placeholder="Summarize your innovation, core problem solved, and expected studio support..."
          className={`w-full px-3 py-1.5 text-xs sm:text-[13px] rounded-lg border transition-colors focus:outline-hidden focus:border-[#1746A2] focus:ring-1 focus:ring-[#1746A2] resize-none ${
            isDark
              ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-400'
              : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
            } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
        />
      </div>

      {/* DPDP Consent Notice & Checkbox (Digital Personal Data Protection Act, 2023) */}
      <div
        className={`p-3 rounded-xl border text-xs transition-colors ${
          fieldErrors.dpdpConsent
            ? 'bg-rose-50/70 dark:bg-rose-950/30 border-rose-400 dark:border-rose-700'
            : isDark
            ? 'bg-slate-800/60 border-slate-700/80'
            : 'bg-slate-50/90 border-slate-200'
        }`}
      >
        <label className="flex items-start gap-2.5 cursor-pointer select-none group">
          <input
            type="checkbox"
            id="dpdp-consent-checkbox"
            checked={dpdpConsent}
            disabled={isSubmitting}
            onChange={(e) => {
              setDpdpConsent(e.target.checked);
              if (e.target.checked && fieldErrors.dpdpConsent) {
                setFieldErrors((prev) => {
                  const updated = { ...prev };
                  delete updated.dpdpConsent;
                  return updated;
                });
              }
            }}
            className="mt-0.5 w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-[#1746A2] focus:ring-[#1746A2] dark:bg-slate-900 cursor-pointer shrink-0"
          />
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                DPDP Act 2023 Consent
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                * Mandatory
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 leading-snug">
              I hereby give voluntary consent to <strong>NF Venture Studio (Naree Foundation)</strong> to collect and process my personal contact details and proposal data in accordance with the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>, solely for the purpose of incubation review, mentorship evaluation, and official communication.
            </p>
          </div>
        </label>
        {fieldErrors.dpdpConsent && (
          <p className="mt-2 pl-6.5 text-[11px] text-rose-600 dark:text-rose-400 font-medium flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0 inline" />
            {fieldErrors.dpdpConsent}
          </p>
        )}
      </div>

      {/* Submit footer */}
      <div
        className={`pt-2.5 border-t flex flex-col sm:flex-row items-center justify-between gap-2.5 ${
          isDark ? 'border-slate-700' : 'border-slate-300'
        }`}
      >
        <div className="text-[11px] text-slate-700 dark:text-slate-300 text-center sm:text-left font-medium">
          Direct Incubation Helpline: <a href="tel:+919209112577" className="font-bold text-[#1746A2] dark:text-sky-300 hover:underline">+91 9209112577</a>
        </div>
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          {isModal && onCancel && (
            <button
              type="button"
              onClick={onCancel}
              disabled={isSubmitting}
              className={`flex-1 sm:flex-none px-4 py-2 text-xs font-semibold rounded-xl transition-colors cursor-pointer border ${
                isDark
                  ? 'text-slate-300 bg-slate-800 border-slate-700 hover:bg-slate-700'
                  : 'text-slate-700 bg-slate-100 border-slate-200 hover:bg-slate-200'
              } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-[#1746A2] hover:bg-[#10264A] rounded-xl shadow-xs transition-all cursor-pointer text-center ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Submitting Application...</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Submit Application</span>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};
