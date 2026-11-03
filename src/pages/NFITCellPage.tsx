import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NFNavbar } from '../components/nf/NFNavbar';
import { NFFooter } from '../components/nf/NFFooter';
import { NFFinalCTA } from '../components/nf/NFFinalCTA';
import { NFBrochureModal } from '../components/nf/NFBrochureModal';
import { NFApplicationModal } from '../components/nf/NFApplicationModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useNFTheme } from '../hooks/useNFTheme';
import {
  Server,
  Globe2,
  Smartphone,
  Database,
  Terminal,
  ShieldCheck,
  Cpu,
  Lock,
  Activity,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building2,
  Store,
  Briefcase,
  Layers,
  Send,
  Loader2,
  AlertCircle,
  Phone,
  Mail,
  User,
  FileText,
  Clock,
  Compass,
  Code2,
  Laptop,
  Check,
  ExternalLink,
  ChevronRight,
  HelpCircle,
  FolderSync,
} from 'lucide-react';

// Google Apps Script integration endpoint (dedicated for ncfitcell@gmail.com)
export const NOTIFICATION_EMAIL = 'ncfitcell@gmail.com';
export const GOOGLE_SCRIPT_DEPLOYMENT_ID =
  'AKfycbwSyeh1XmVXybAuMGtqzeYxT-qTUNPkSRjYrJ6YntjccQPSzOOb8Eby8CH7U7clgLUtCg';
export const GOOGLE_SCRIPT_URL =
  (import.meta as any).env?.VITE_GOOGLE_SCRIPT_URL_IT_CELL ||
  'https://script.google.com/macros/s/AKfycbwSyeh1XmVXybAuMGtqzeYxT-qTUNPkSRjYrJ6YntjccQPSzOOb8Eby8CH7U7clgLUtCg/exec';

const LOCAL_STORAGE_KEY = 'nfvs_itcell_client_enquiries';

export interface ITCellEnquiryRecord {
  id: string;
  timestamp: string;
  fullName: string;
  organization: string;
  phone: string;
  email: string;
  projectType: string;
  description: string;
  status: 'Received' | 'In Review' | 'Contacted';
}

export const NFITCellPage: React.FC = () => {
  const { theme, isDark, toggleTheme } = useNFTheme();

  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('student');

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    phone: '',
    email: '',
    projectType: 'Website',
    description: '',
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [dpdpConsent, setDpdpConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isSubmittingRef = useRef(false);

  // Review modal for NFVS team to inspect stored enquiries
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [storedEnquiries, setStoredEnquiries] = useState<ITCellEnquiryRecord[]>([]);

  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    loadStoredEnquiries();
  }, []);

  const loadStoredEnquiries = () => {
    try {
      const data = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (data) {
        setStoredEnquiries(JSON.parse(data));
      }
    } catch (e) {
      console.warn('Could not read stored enquiries:', e);
    }
  };

  const handleOpenApplication = (track: string = 'student') => {
    setSelectedTrack(track);
    setIsAppModalOpen(true);
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

  const handleResetForm = () => {
    setIsSubmitted(false);
    setReferenceId(null);
    setErrorMessage(null);
    setFieldErrors({});
    setDpdpConsent(false);
    setFormData({
      fullName: '',
      organization: '',
      phone: '',
      email: '',
      projectType: 'Website',
      description: '',
    });
  };

  // Form submission handler
  const handleSubmitEnquiry = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmittingRef.current || isSubmitting) return;

    const errors: Record<string, string> = {};
    const trimmedName = formData.fullName.trim();
    const trimmedOrg = formData.organization.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedDesc = formData.description.trim();

    // 1. Full Name (required)
    if (!trimmedName || trimmedName.length < 2) {
      errors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    // 2. Mobile Number (required, 10 digits)
    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    if (!trimmedPhone || (digitsOnly.length !== 10 && !(digitsOnly.length === 12 && digitsOnly.startsWith('91')))) {
      errors.phone = 'Please enter a valid 10-digit mobile number (e.g. 9876543210).';
    }

    // 3. Email Address (required, valid format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      errors.email = 'Please provide a valid email address (e.g. yourname@domain.com).';
    }

    // 4. Project Type (required)
    if (!formData.projectType) {
      errors.projectType = 'Please select what you would like us to build.';
    }

    // 5. Short Description (required)
    if (!trimmedDesc || trimmedDesc.length < 10) {
      errors.description = 'Please provide a short description of your project (at least 10 characters).';
    }

    // 6. DPDP Consent Check
    if (!dpdpConsent) {
      errors.dpdpConsent = 'Please check the DPDP consent box to proceed with your enquiry.';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setErrorMessage('Please correct the highlighted fields and accept the DPDP consent before submitting.');
      return;
    }

    setFieldErrors({});
    isSubmittingRef.current = true;
    setIsSubmitting(true);
    setErrorMessage(null);

    // Generate unique reference ID
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
    const rand = Math.floor(1000 + Math.random() * 9000);
    const newRefId = `NFVS-IT-${dateStr}-${rand}`;

    const newRecord: ITCellEnquiryRecord = {
      id: newRefId,
      timestamp: now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      fullName: trimmedName,
      organization: trimmedOrg || 'Individual / Shop Owner',
      phone: trimmedPhone,
      email: trimmedEmail,
      projectType: formData.projectType,
      description: trimmedDesc,
      status: 'Received',
    };

    // Store in localStorage for immediate team access
    try {
      const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
      const updated = [newRecord, ...existing];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      setStoredEnquiries(updated);
    } catch (storageErr) {
      console.warn('LocalStorage save failed:', storageErr);
    }

    // Dispatch payload to Google Apps Script (same proven architecture as NFApplicationForm)
    const payload = {
      spreadsheetId: GOOGLE_SPREADSHEET_ID,
      targetEmail: NOTIFICATION_EMAIL,
      track: `IT Cell Client Service: ${formData.projectType}`,
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
      organization: trimmedOrg || 'Individual / Shop Client',
      technology: formData.projectType,
      stage: 'Client Enquiry (External Service)',
      idea: `[IT CELL SERVICE ENQUIRY]\nType: ${formData.projectType}\nDetails: ${trimmedDesc}\nRef: ${newRefId}`,
      dpdpConsent: true,
      consentNotice: 'Consented under DPDP Act, 2023 for IT Cell client project enquiry',
      consentTimestamp: now.toISOString(),
      referenceId: newRefId,
    };

    try {
      // Immediate no-cors dispatch with 5s timeout so user never experiences CORS delays or 1-minute hang
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
      } catch (fetchErr) {
        console.warn('Network dispatch finished:', fetchErr);
      } finally {
        clearTimeout(timeoutId);
      }

      setReferenceId(newRefId);
      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Error in IT Cell enquiry submission:', err);
      setReferenceId(newRefId);
      setIsSubmitted(true);
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  // 8 Core Technical Functions from Official Brochure Page 10
  const itCellFunctions = [
    {
      num: '01',
      title: 'Technical Support',
      desc: 'Day-to-day IT assistance, developer workstations setup, troubleshooting, and continuous technical advisory for students, faculty & startup founders.',
      icon: Terminal,
      tag: 'Helpdesk & Support',
    },
    {
      num: '02',
      title: 'Infrastructure Management',
      desc: 'Managing dedicated servers, enterprise cloud environments (AWS, Azure, GCP), high-availability hosting, compute clusters, and network architecture.',
      icon: Server,
      tag: 'Cloud & Hosting',
    },
    {
      num: '03',
      title: 'Software & Development Support',
      desc: 'Full-stack software engineering, scalable web & mobile application architectures, MVP rapid prototyping, and API integration frameworks.',
      icon: Cpu,
      tag: 'Full-Stack Dev',
    },
    {
      num: '04',
      title: 'Cybersecurity & Protection',
      desc: 'Institutional data protection, automated vulnerability auditing, SSL/TLS protocols, access logging, and secure digital hygiene best practices.',
      icon: ShieldCheck,
      tag: 'Security & Audits',
    },
    {
      num: '05',
      title: 'Data Management & Repositories',
      desc: 'Organizing digital innovation records, institutional compliance audit archives, NIRF/NAAC/NBA innovation metrics, and knowledge repositories.',
      icon: Database,
      tag: 'Data Architecture',
    },
    {
      num: '06',
      title: 'Access Control & Permissions',
      desc: 'Identity and access management (IAM), multi-factor secure authentication, user privilege levels, and institutional digital licenses administration.',
      icon: Lock,
      tag: 'Access & Auth',
    },
    {
      num: '07',
      title: 'Digital Innovation & Automation',
      desc: 'Implementing automated CI/CD pipelines, workflow orchestration bots, digital form portals, and campus enterprise systems for high operational efficiency.',
      icon: Activity,
      tag: 'Automation & CI/CD',
    },
    {
      num: '08',
      title: 'Event & Hackathon Backing',
      desc: 'Providing high-bandwidth technical infrastructure, sandboxes, and cloud dev environments for Smart India Hackathon (SIH), webinars, and live demo days.',
      icon: Globe2,
      tag: 'Hackathon Sandboxes',
    },
  ];

  // 4 Core Technology Development Services for External Clients
  const services = [
    {
      id: 'website',
      title: 'Website Development',
      badge: 'Web Solutions',
      icon: Globe2,
      color: '#1746A2',
      headline: 'Modern, High-Speed & Responsive Web Portals',
      desc: 'We design and engineer bespoke web platforms tailored to individuals, local shop owners, startups, and growing enterprises.',
      features: [
        'Responsive mobile-first websites (React, Next.js, HTML5/CSS3)',
        'E-Commerce storefronts with online catalog & shopping cart',
        'Secure payment gateway integrations (Razorpay, UPI, Cards)',
        'Search Engine Optimization (SEO) & ultra-fast loading speed',
        'Direct WhatsApp ordering & inquiry integration',
        'Domain setup, high-speed cloud hosting & SSL certificate',
      ],
      idealFor: 'Shop owners, local merchants, professionals, service businesses & startups.',
    },
    {
      id: 'mobile-app',
      title: 'Mobile Application Development',
      badge: 'Android & iOS',
      icon: Smartphone,
      color: '#D4AF37',
      headline: 'Intuitive, Native-Feel Mobile Apps Built for Growth',
      desc: 'Turn your business concept or customer service channel into a sleek, high-performing mobile app accessible on Android and iOS devices.',
      features: [
        'Cross-platform development (React Native & Flutter)',
        'Seamless user authentication & profile management',
        'Push notifications, real-time messaging & live alerts',
        'In-app product catalogs, booking systems & checkout flows',
        'Offline caching & responsive fluid UI animations',
        'End-to-end publishing to Google Play Store & Apple App Store',
      ],
      idealFor: 'E-commerce brands, delivery services, consumer startups & organizations.',
    },
    {
      id: 'crm',
      title: 'CRM Development & Customization',
      badge: 'Business Operations',
      icon: Database,
      color: '#2563EB',
      headline: 'Tailored Customer & Pipeline Management Systems',
      desc: 'Eliminate chaotic spreadsheets. Consolidate your leads, customer histories, sales pipelines, and follow-ups in an easy-to-use custom CRM.',
      features: [
        'Custom customer relationship workflows fitted to your business',
        'Automated lead intake from website, WhatsApp & social channels',
        'Invoice generation, GST calculation & automated receipt delivery',
        'Role-based staff permissions & secure team activity logs',
        'Visual sales pipeline, deal stage tracking & reminder alerts',
        'Interactive analytics dashboards & performance reporting',
      ],
      idealFor: 'Retail shops, real estate agencies, consultancies, coaching centres & B2B teams.',
    },
    {
      id: 'custom-software',
      title: 'Custom Software & Digital Solutions',
      badge: 'Custom Engineering',
      icon: Cpu,
      color: '#10B981',
      headline: 'Bespoke Software, ERP, APIs & Workflow Automations',
      desc: 'From custom inventory software and billing POS systems to third-party API orchestrations and institutional automation portals.',
      features: [
        'Custom Billing, POS (Point of Sale) & Inventory trackers',
        'Internal enterprise portals & staff attendance management',
        'Cloud API integrations & third-party SaaS interconnectivity',
        'Automated document generation (PDFs, invoices, certificates)',
        'Legacy system migration & modern cloud architecture upgrade',
        'Dedicated post-launch SLA, bug fix warranty & tech support',
      ],
      idealFor: 'Wholesalers, distributors, colleges, manufacturing units & expanding firms.',
    },
  ];

  // Client Types Served
  const clientTypes = [
    {
      title: 'Shop Owners & Retailers',
      icon: Store,
      desc: 'Local stores, grocery shops, boutiques, and pharmacies looking to launch an online storefront, digital product catalog, and WhatsApp ordering.',
    },
    {
      title: 'Individuals & Solo Creators',
      icon: User,
      desc: 'Consultants, doctors, tutors, trainers, and freelancers needing a personal portfolio website, appointment booking, or digital course showcase.',
    },
    {
      title: 'Startups & Early Founders',
      icon: Sparkles,
      desc: 'Early-stage entrepreneurs building their Minimum Viable Product (MVP), prototype web app, or pilot mobile application within tight budgets.',
    },
    {
      title: 'Companies & Enterprises',
      icon: Building2,
      desc: 'Established companies seeking workflow automation, custom CRM development, ERP modernization, or dedicated developer teams on contract.',
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDark ? 'dark bg-[#071A38] text-white' : 'bg-white text-[#071A38]'
      } transition-colors duration-300 flex flex-col font-sans relative`}
    >
      {/* Global Navigation Header */}
      <NFNavbar
        onOpenApplication={handleOpenApplication}
        onOpenBrochure={() => setIsBrochureOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-grow pt-24 pb-20">
        {/* =========================================================================
            HERO SECTION: IT CELL AS DIGITAL BACKBONE & FREELANCE TECH AGENCY
           ========================================================================= */}
        <section className="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] to-white dark:from-[#0A1D3B] dark:to-[#071A38] border-b border-slate-200/80 dark:border-slate-800">
          <div className="section-shell space-y-6 text-center max-w-4xl mx-auto">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400"
            >
              <Link to="/" className="hover:text-[#1746A2] dark:hover:text-[#D4AF37] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/ecosystem" className="hover:text-[#1746A2] dark:hover:text-[#D4AF37] transition-colors">
                Ecosystem
              </Link>
              <span>/</span>
              <span className="text-[#071A38] dark:text-white font-semibold">IT Cell</span>
            </nav>

            {/* Gold Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#103B82]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20">
              <Server className="w-4 h-4 text-[#D4AF37]" />
              <span>NFVS IT Cell &bull; Digital Backbone &amp; Tech Solutions Provider</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071A38] dark:text-white tracking-tight leading-tight">
              Technology Development Services for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746A2] via-[#2563EB] to-[#D4AF37] dark:from-[#60A5FA] dark:via-[#93C5FD] dark:to-[#E8C85A]">
                Startups, Businesses &amp; Shop Owners
              </span>
            </h1>

            {/* Detailed Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#52627A] dark:text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
              The IT Cell is the central technological engine of NF Venture Studio. In addition to powering our internal incubation infrastructure, we operate as a full-service technology development provider — delivering high-quality websites, mobile apps, custom CRMs, and software solutions for external clients on a flexible freelance and agency model.
            </p>

          </div>
        </section>

        {/* =========================================================================
            SECTION 1: WHAT IS THE IT CELL? PURPOSE, ROLE & STUDIO CONTRIBUTION
           ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="section-shell space-y-14">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#103B82]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20">
                <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Core Mandate &amp; Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071A38] dark:text-white tracking-tight">
                What is the IT Cell?
              </h2>
              <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                The IT Cell is the foundational technology backbone of NF Venture Studio, established to drive digital transformation, maintain enterprise-grade infrastructure, and engineer commercial digital software.
              </p>
            </div>

            {/* 3 Foundation Cards: Purpose, Role & Digital Development */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1: Purpose & Mission */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#F8FAFC] dark:bg-[#0A1D3B] border border-slate-200 dark:border-[#1A3D73] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1746A2]/10 dark:bg-[#103B82] flex items-center justify-center text-[#1746A2] dark:text-[#E8C85A]">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-[#071A38] dark:text-white tracking-tight">
                    Purpose &amp; Functions
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                    To eliminate technical barriers for creators, business owners, and founders by providing accessible, cutting-edge software engineering, hosting, data architecture, and full-lifecycle IT management.
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-slate-800 text-xs text-[#52627A] dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1746A2] dark:text-[#E8C85A] shrink-0 mt-0.5" />
                      <span>Enterprise cloud server architecture &amp; management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1746A2] dark:text-[#E8C85A] shrink-0 mt-0.5" />
                      <span>End-to-end technical support for development projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1746A2] dark:text-[#E8C85A] shrink-0 mt-0.5" />
                      <span>Continuous system auditing, backups &amp; cybersecurity</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2: Role in NF Venture Studio */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#F8FAFC] dark:bg-[#0A1D3B] border border-slate-200 dark:border-[#1A3D73] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 dark:bg-[#103B82] flex items-center justify-center text-[#D4AF37]">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-[#071A38] dark:text-white tracking-tight">
                    Role in NFVS Ecosystem
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                    Acts as the shared technical core across NF Venture Studio's incubation programmes — building student MVPs, supporting IIC hackathons, maintaining data compliance, and bridging academic innovation with real-world products.
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-slate-800 text-xs text-[#52627A] dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>Powers institutional incubation centre digital setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>High-bandwidth sandboxes for Smart India Hackathon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>Accelerates early-stage startup proof-of-concepts (PoC)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3: Digital Development Support */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#F8FAFC] dark:bg-[#0A1D3B] border border-slate-200 dark:border-[#1A3D73] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/10 dark:bg-[#103B82] flex items-center justify-center text-[#2563EB] dark:text-sky-300">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-[#071A38] dark:text-white tracking-tight">
                    External Client Model
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                    Operates as a professional client-service agency for external individuals, retail shop owners, and corporate companies — offering high-velocity, cost-effective custom development with complete source code handover.
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-slate-800 text-xs text-[#52627A] dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-sky-300 shrink-0 mt-0.5" />
                      <span>Freelance &amp; agency client engagement contracts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-sky-300 shrink-0 mt-0.5" />
                      <span>Clear milestone delivery, demo reviews &amp; warranty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-sky-300 shrink-0 mt-0.5" />
                      <span>Direct engineer communication &amp; dedicated support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Official Brochure Highlight: 8 Core Technical Functions */}
            <div id="functions" className="space-y-8 pt-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
                  Official Brochure Specifications (Page 10)
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#071A38] dark:text-white">
                  8 Core Technical Functions of NFVS IT Cell
                </h3>
                <blockquote className="text-xs sm:text-sm font-semibold italic text-[#1746A2] dark:text-sky-300">
                  &ldquo;Technology enables people, people build impact.&rdquo;
                </blockquote>
              </div>

              {/* 8 Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {itCellFunctions.map((fn, idx) => {
                  const Icon = fn.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 bg-gradient-to-b from-[#EBF4FE] to-[#DBEEFD] dark:from-[#17437F] dark:to-[#10305C] text-[#071A38] dark:text-white border-[#B8D7FA] dark:border-[#387ACB]/60 shadow-sm hover:shadow-md"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-mono font-black text-[#1746A2] dark:text-[#E8C85A]">
                            {fn.num}
                          </span>
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/95 dark:bg-[#1D4F94] text-[#1746A2] dark:text-[#E8C85A] shadow-xs border border-[#BFDBFE] dark:border-[#387ACB]/50">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider block text-[#1746A2] dark:text-sky-300">
                            {fn.tag}
                          </span>
                          <h4 className="text-base font-extrabold tracking-tight mt-0.5 text-[#071A38] dark:text-white">
                            {fn.title}
                          </h4>
                        </div>

                        <p className="text-xs leading-relaxed font-normal text-[#334155] dark:text-slate-200">
                          {fn.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: IT CELL SERVICES (CLIENT-SERVICE PROVIDER MODEL)
           ========================================================================= */}
        <section id="services" className="py-16 sm:py-20 bg-slate-50 dark:bg-[#07172E] border-y border-slate-200/80 dark:border-slate-800">
          <div className="section-shell space-y-14">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                <Code2 className="w-3.5 h-3.5" />
                <span>Commercial Client-Service Portfolio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071A38] dark:text-white tracking-tight">
                Our Technology Development Services
              </h2>
              <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                We work directly with external clients — individuals, retail shop owners, startups, growing businesses, and established companies — delivering production-grade digital software on a professional freelance and agency model.
              </p>
            </div>

            {/* Client Types Served Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {clientTypes.map((client, i) => {
                const Icon = client.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white dark:bg-[#0A1D3B] border border-slate-200 dark:border-[#1A3D73] shadow-xs flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#DCEEFF]/60 dark:bg-[#18386B] text-[#1746A2] dark:text-[#E8C85A] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-extrabold text-[#071A38] dark:text-white">
                        {client.title}
                      </h4>
                      <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed">
                        {client.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 4 Core Services Detailed Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              {services.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.id}
                    className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-[#0A1D3B] border border-slate-200 dark:border-[#1A3D73] shadow-sm hover:shadow-xl hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-[#1746A2]/10 dark:bg-[#103B82] text-[#1746A2] dark:text-[#E8C85A] flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1746A2] dark:text-[#E8C85A] px-2.5 py-0.5 rounded-md bg-[#DCEEFF]/60 dark:bg-[#18386B] border border-[#1746A2]/20">
                              {svc.badge}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-black text-[#071A38] dark:text-white tracking-tight mt-1">
                              {svc.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-[#1746A2] dark:text-sky-300">
                          {svc.headline}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                          {svc.desc}
                        </p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                          Included Deliverables &amp; Capabilities:
                        </span>
                        {svc.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-[#52627A] dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-[#1746A2] dark:text-[#E8C85A] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 mt-6 border-t border-slate-100 dark:border-slate-800">
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        <strong className="text-[#071A38] dark:text-white">Ideal For:</strong>{' '}
                        {svc.idealFor}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: CLIENT ENQUIRY FORM (MANDATORY FIELDS & FUNCTIONALITY)
           ========================================================================= */}
        <section id="enquiry-form" className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-[#06152B] border-t border-slate-200/80 dark:border-slate-800 scroll-mt-24">
          <div className="section-shell max-w-4xl mx-auto space-y-10">
            {/* Form Section Header */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#1746A2]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20">
                <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Start Your Technology Project</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071A38] dark:text-white tracking-tight">
                Submit an IT Cell Project Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Whether you need a website for your shop, a custom mobile app for your brand, a tailored CRM, or enterprise software — fill out the form below. Our development team will review your project and get back to you within 24 hours.
              </p>
            </div>

            {/* Form Container Card */}
            <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#0A1D3B] border border-slate-200 dark:border-[#1A3D73] shadow-xl relative overflow-hidden">
              
              {/* SUCCESS STATE DISPLAY */}
              {isSubmitted ? (
                <div className="text-center py-8 space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 mx-auto shadow-lg">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-2 max-w-lg mx-auto">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Enquiry Successfully Received
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#071A38] dark:text-white">
                      Thank You, {formData.fullName}!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                      Your project enquiry has been registered with the NF Venture Studio IT Cell team. We have logged your request and sent a notification to our engineering lead.
                    </p>
                  </div>

                  {/* Reference Ticket Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#DCEEFF]/50 dark:bg-[#102E66]/60 border border-[#BBD7FA] dark:border-[#1A4580] max-w-md mx-auto text-left space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">
                        Reference ID:
                      </span>
                      <span className="font-mono font-black text-[#1746A2] dark:text-[#E8C85A] text-sm">
                        {referenceId}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">
                        Project Type:
                      </span>
                      <span className="font-semibold text-[#071A38] dark:text-white">
                        {formData.projectType}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">
                        Expected Response:
                      </span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                        Within 24 Hours
                      </span>
                    </div>
                  </div>

                  {/* Immediate Direct Contact Box */}
                  <div className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto pt-2">
                    Need urgent consultation? Call or WhatsApp our IT Cell desk directly at{' '}
                    <a
                      href="https://wa.me/919209112577"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1746A2] dark:text-[#E8C85A] font-bold underline"
                    >
                      +91 92091 12577
                    </a>{' '}
                    or email{' '}
                    <a
                      href="mailto:ncfitcell@gmail.com"
                      className="text-[#1746A2] dark:text-[#E8C85A] font-bold underline"
                    >
                      ncfitcell@gmail.com
                    </a>.
                  </div>

                  {/* Button to Submit Another */}
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#1746A2] text-white hover:bg-[#103B82] transition-colors cursor-pointer shadow-md"
                    >
                      Submit Another Project Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* FORM INPUT FIELDS */
                <form onSubmit={handleSubmitEnquiry} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-600 dark:text-red-400 text-xs sm:text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    {/* Field 1: Full Name (required) */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-[#071A38] dark:text-white"
                      >
                        1. Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#07172E] border ${
                            fieldErrors.fullName
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-slate-300 dark:border-slate-700 focus:border-[#1746A2] dark:focus:border-[#D4AF37]'
                          } text-[#071A38] dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 transition-all`}
                        />
                      </div>
                      {fieldErrors.fullName && (
                        <p className="text-[11px] text-red-500 mt-1">{fieldErrors.fullName}</p>
                      )}
                    </div>

                    {/* Field 2: Company / Shop / Organization Name (optional) */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="organization"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-[#071A38] dark:text-white"
                      >
                        2. Company / Shop / Organization Name{' '}
                        <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Store className="w-4 h-4" />
                        </div>
                        <input
                          id="organization"
                          type="text"
                          value={formData.organization}
                          onChange={(e) => handleInputChange('organization', e.target.value)}
                          placeholder="e.g. Sharma Grocery Store / Apex Tech Solutions"
                          className="w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#07172E] border border-slate-300 dark:border-slate-700 text-[#071A38] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#1746A2] dark:focus:border-[#D4AF37] focus:ring-1 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    {/* Field 3: Mobile Number (required) */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-[#071A38] dark:text-white"
                      >
                        3. Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="e.g. 9876543210 (10 digits)"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#07172E] border ${
                            fieldErrors.phone
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-slate-300 dark:border-slate-700 focus:border-[#1746A2] dark:focus:border-[#D4AF37]'
                          } text-[#071A38] dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 transition-all`}
                        />
                      </div>
                      {fieldErrors.phone && (
                        <p className="text-[11px] text-red-500 mt-1">{fieldErrors.phone}</p>
                      )}
                    </div>

                    {/* Field 4: Email Address (required) */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-[#071A38] dark:text-white"
                      >
                        4. Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="e.g. rahul@example.com"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#07172E] border ${
                            fieldErrors.email
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-slate-300 dark:border-slate-700 focus:border-[#1746A2] dark:focus:border-[#D4AF37]'
                          } text-[#071A38] dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 transition-all`}
                        />
                      </div>
                      {fieldErrors.email && (
                        <p className="text-[11px] text-red-500 mt-1">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Field 5: What do you want us to build? (required) */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#071A38] dark:text-white">
                      5. What do you want us to build? <span className="text-red-500">*</span>
                    </label>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { id: 'Website', label: 'Website', icon: Globe2 },
                        { id: 'Mobile App', label: 'Mobile App', icon: Smartphone },
                        { id: 'CRM', label: 'CRM', icon: Database },
                        { id: 'Other', label: 'Other', icon: Cpu },
                      ].map((opt) => {
                        const Icon = opt.icon;
                        const isSelected = formData.projectType === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => handleInputChange('projectType', opt.id)}
                            className={`p-3.5 rounded-xl border flex items-center gap-2.5 transition-all text-xs sm:text-sm font-bold cursor-pointer ${
                              isSelected
                                ? 'bg-[#1746A2] text-white border-[#1746A2] shadow-sm'
                                : 'bg-slate-50 dark:bg-[#07172E] text-[#071A38] dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-[#1746A2]'
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${isSelected ? 'text-[#D4AF37]' : 'text-slate-400'}`} />
                            <span>{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                    {fieldErrors.projectType && (
                      <p className="text-[11px] text-red-500 mt-1">{fieldErrors.projectType}</p>
                    )}
                  </div>

                  {/* Field 6: Short Description of the Project (required) */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="description"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-[#071A38] dark:text-white"
                      >
                        6. Short Description of the Project <span className="text-red-500">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400">
                        {formData.description.length} characters
                      </span>
                    </div>
                    <textarea
                      id="description"
                      rows={4}
                      required
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Please explain what features you need (e.g. 'I run an electronics retail shop and need a 5-page website with a catalog, inquiry button, WhatsApp integration, and our shop location map.')"
                      className={`w-full p-4 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#07172E] border ${
                        fieldErrors.description
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-300 dark:border-slate-700 focus:border-[#1746A2] dark:focus:border-[#D4AF37]'
                      } text-[#071A38] dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 transition-all leading-relaxed`}
                    />
                    {fieldErrors.description && (
                      <p className="text-[11px] text-red-500 mt-1">{fieldErrors.description}</p>
                    )}
                  </div>

                  {/* DPDP Privacy Guarantee & User Consent Checkbox */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="dpdpConsent"
                      className={`p-4 rounded-xl border flex items-start gap-3.5 cursor-pointer transition-all duration-200 select-none ${
                        dpdpConsent
                          ? 'bg-[#1746A2]/8 dark:bg-[#103B82]/40 border-[#1746A2] dark:border-[#D4AF37] shadow-sm ring-1 ring-[#1746A2]/20 dark:ring-[#D4AF37]/30'
                          : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                      }`}
                    >
                      <div className="pt-0.5 shrink-0">
                        <input
                          id="dpdpConsent"
                          type="checkbox"
                          checked={dpdpConsent}
                          onChange={(e) => {
                            setDpdpConsent(e.target.checked);
                            if (fieldErrors.dpdpConsent) {
                              setFieldErrors((prev) => {
                                const next = { ...prev };
                                delete next.dpdpConsent;
                                return next;
                              });
                            }
                          }}
                          className="w-4 h-4 rounded text-[#1746A2] focus:ring-[#1746A2] dark:focus:ring-[#D4AF37] border-slate-300 dark:border-slate-600 cursor-pointer accent-[#1746A2] dark:accent-[#D4AF37]"
                        />
                      </div>
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-1.5 font-bold text-[#071A38] dark:text-white">
                          <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                          <span>
                            DPDP Act, 2023 Consent &bull; Data Protection Guarantee <span className="text-red-500">*</span>
                          </span>
                        </div>
                        <p className="text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                          I hereby consent to the processing of my contact and project details by the NF Venture Studio IT Cell team under the Digital Personal Data Protection (DPDP) Act, 2023 for project review, scoping, and service response.
                        </p>
                      </div>
                    </label>
                    {fieldErrors.dpdpConsent && (
                      <p className="text-[11px] text-red-500 font-medium pl-1">{fieldErrors.dpdpConsent}</p>
                    )}
                  </div>

                  {/* Submit Button (Disabled until DPDP Consent is checked) */}
                  <div className="pt-2 space-y-2">
                    <button
                      type="submit"
                      disabled={isSubmitting || !dpdpConsent}
                      title={!dpdpConsent ? 'Please check the DPDP consent box to enable submission' : 'Submit Enquiry'}
                      className={`w-full py-4 rounded-xl font-black text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 ${
                        isSubmitting || !dpdpConsent
                          ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-300 dark:border-slate-700 cursor-not-allowed opacity-60'
                          : 'bg-gradient-to-r from-[#1746A2] via-[#2055B0] to-[#1746A2] text-white shadow-royal hover:opacity-95 hover:shadow-lg cursor-pointer'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting Your Project Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 text-[#D4AF37]" />
                          <span>Submit Enquiry</span>
                        </>
                      )}
                    </button>
                    {!dpdpConsent && (
                      <p className="text-center text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        🔒 Submit button is locked until the DPDP consent checkbox above is ticked.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>

            {/* Team Enquiries Access / Admin Drawer Trigger */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => {
                  loadStoredEnquiries();
                  setShowReviewModal(true);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-400 dark:text-slate-500 hover:text-[#1746A2] dark:hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                <FolderSync className="w-3.5 h-3.5" />
                <span>NFVS Team Desk &bull; View Logged Client Enquiries ({storedEnquiries.length})</span>
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: NFVS TEAM ENQUIRIES REVIEW MODAL
           ========================================================================= */}
        {showReviewModal && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowReviewModal(false);
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
          >
            <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#0A1D3B] text-[#071A38] dark:text-white rounded-3xl border border-slate-200 dark:border-[#1A3D73] shadow-2xl overflow-hidden flex flex-col">
              {/* Top Bar */}
              <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50 dark:bg-[#07172E]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1746A2] text-[#D4AF37] flex items-center justify-center">
                    <FolderSync className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#071A38] dark:text-white">
                      NFVS IT Cell Client Enquiries Database
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Locally archived enquiries ({storedEnquiries.length} records)
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Records Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-4 max-h-[70vh]">
                {storedEnquiries.length === 0 ? (
                  <div className="text-center py-12 text-xs text-slate-400">
                    No enquiries logged yet. Fill out the form above to log the first client enquiry!
                  </div>
                ) : (
                  storedEnquiries.map((enq) => (
                    <div
                      key={enq.id}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-[#07172E] border border-slate-200 dark:border-slate-800 space-y-2 text-xs"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                        <span className="font-mono font-bold text-[#1746A2] dark:text-[#E8C85A]">
                          {enq.id}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#1746A2] text-white">
                            {enq.projectType}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {enq.timestamp}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                        <div>
                          <strong>Client:</strong> {enq.fullName}{' '}
                          {enq.organization && `(${enq.organization})`}
                        </div>
                        <div>
                          <strong>Mobile:</strong>{' '}
                          <a href={`tel:${enq.phone}`} className="text-[#1746A2] dark:text-[#E8C85A] underline">
                            {enq.phone}
                          </a>
                        </div>
                        <div>
                          <strong>Email:</strong>{' '}
                          <a href={`mailto:${enq.email}`} className="text-[#1746A2] dark:text-[#E8C85A] underline">
                            {enq.email}
                          </a>
                        </div>
                        <div>
                          <strong>Status:</strong>{' '}
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{enq.status}</span>
                        </div>
                      </div>

                      <div className="pt-2 text-[11px] text-slate-600 dark:text-slate-300 bg-white dark:bg-black/20 p-2.5 rounded-xl border border-slate-200/60 dark:border-white/5">
                        <strong className="block text-slate-400 text-[10px] uppercase font-mono mb-1">
                          Project Description:
                        </strong>
                        {enq.description}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* Global CTA Section */}
        <section className="mt-16 sm:mt-24">
          <NFFinalCTA onOpenApplication={() => handleOpenApplication('student')} />
        </section>
      </main>

      {/* Global Footer */}
      <NFFooter />

      {/* Official Brochure Modal (with Page 10 for IT Cell) */}
      <NFBrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        initialPage={9} // 0-indexed Page 10: IT Cell Digital Backbone
      />

      {/* Application Modal */}
      <NFApplicationModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        initialTrack={selectedTrack}
        isDark={isDark}
      />
    </div>
  );
};
