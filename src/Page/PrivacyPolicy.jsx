import { Link } from "react-router-dom";

const sections = [
  {
    id: "information-collected",
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "Personal Identification Information",
        text: "We may collect personal information such as your full name, date of birth, gender, address, phone number, and email address when you register as a patient, book an appointment, or contact us through our website or in person.",
      },
      {
        subtitle: "Medical & Health Information",
        text: "In the course of providing medical services, we collect health-related information including medical history, diagnoses, treatment records, prescriptions, lab results, imaging reports, and any other clinical data necessary for your care.",
      },
      {
        subtitle: "Technical & Usage Data",
        text: "When you visit our website, we may automatically collect information such as your IP address, browser type, pages visited, time spent on pages, and referring URLs for the purpose of improving our online services.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: [
      {
        subtitle: "Providing Medical Care",
        text: "Your personal and medical information is primarily used to deliver healthcare services, coordinate treatment, manage appointments, issue prescriptions, and communicate test results or follow-up instructions.",
      },
      {
        subtitle: "Administrative Purposes",
        text: "We use your information for billing, insurance processing, appointment scheduling, and maintaining accurate medical records as required under applicable Indian healthcare regulations.",
      },
      {
        subtitle: "Communication",
        text: "We may contact you via phone, SMS, or email to confirm appointments, share health advisories, or provide important updates related to your care at JP Neuro-Spine Hospital.",
      },
      {
        subtitle: "Legal & Regulatory Compliance",
        text: "We retain and process data as required by the Clinical Establishments Act (CEA), the Information Technology Act, 2000, and any applicable guidelines issued by the Indian Medical Council or relevant state authorities.",
      },
    ],
  },
  {
    id: "sharing",
    title: "3. Sharing of Information",
    content: [
      {
        subtitle: "Within the Hospital",
        text: "Your information is accessible only to authorised medical and administrative staff directly involved in your care. Access is role-based and strictly limited to what is necessary.",
      },
      {
        subtitle: "Referrals & External Providers",
        text: "With your consent, we may share relevant medical records with referred specialists, diagnostic laboratories, or other healthcare facilities to ensure continuity of care.",
      },
      {
        subtitle: "Legal Obligations",
        text: "We may disclose your information when required by law, court order, or regulatory authority, or when necessary to protect the safety of patients, staff, or the public.",
      },
      {
        subtitle: "No Sale of Data",
        text: "We do not sell, rent, or trade your personal or medical information to any third party for commercial or marketing purposes.",
      },
    ],
  },
  {
    id: "data-security",
    title: "4. Data Security",
    content: [
      {
        subtitle: "Safeguards in Place",
        text: "JP Neuro-Spine Hospital employs reasonable physical, electronic, and administrative safeguards to protect your personal and health information from unauthorised access, disclosure, alteration, or destruction.",
      },
      {
        subtitle: "Limitations",
        text: "While we take reasonable steps to secure your data, no method of electronic storage or internet transmission is completely secure. We encourage patients to contact us promptly if they suspect any unauthorised use of their information.",
      },
    ],
  },
  {
    id: "retention",
    title: "5. Retention of Records",
    content: [
      {
        subtitle: "Medical Records",
        text: "Patient medical records are retained for a minimum period as prescribed by applicable Indian law and medical regulations. After this period, records may be securely disposed of or archived in accordance with regulatory guidelines.",
      },
      {
        subtitle: "Website Data",
        text: "Technical data collected through our website is retained only for as long as necessary to fulfil the purposes for which it was collected.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    content: [
      {
        subtitle: "Access & Correction",
        text: "You have the right to access your medical records and request corrections to any inaccurate or incomplete information. Requests can be made at our administrative office or via the contact details below.",
      },
      {
        subtitle: "Consent Withdrawal",
        text: "Where processing is based on your consent, you may withdraw that consent at any time. Please note this will not affect the legality of any processing carried out prior to withdrawal.",
      },
      {
        subtitle: "Complaints",
        text: "If you believe your privacy rights have been violated, you may raise a concern with our Patient Relations Officer or the relevant regulatory authority in Tamil Nadu.",
      },
    ],
  },
  {
    id: "cookies",
    title: "7. Cookies & Analytics",
    content: [
      {
        subtitle: "Use of Cookies",
        text: "Our website may use cookies to enhance your browsing experience. These are small text files stored on your device. You may configure your browser to decline cookies, although this may affect certain website functionality.",
      },
      {
        subtitle: "Analytics",
        text: "We may use anonymised analytics tools to understand how visitors interact with our website. No personally identifiable information is collected through these tools without your explicit consent.",
      },
    ],
  },
  {
    id: "policy-changes",
    title: "8. Changes to This Policy",
    content: [
      {
        subtitle: "Policy Updates",
        text: "JP Neuro-Spine Hospital reserves the right to update this Privacy Policy at any time to reflect changes in law, regulation, or our practices. The revised policy will be published on this page with an updated effective date. We encourage you to review this page periodically.",
      },
    ],
  },
  {
    id: "contact",
    title: "9. Contact Us",
    content: [
      {
        subtitle: "Privacy & Data Queries",
        text: "For any questions, concerns, or requests relating to this Privacy Policy or the handling of your personal information, please contact us:",
      },
    ],
    contact: true,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen font-inter pt-16 sm:pt-20">

      {/* Hero — full width */}
      <div className="bg-[#0d1d6e] w-full px-10 xl:px-20 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ff9800] mb-3">
              Legal · Compliance
            </p>
            <h1 className="text-3xl sm:text-5xl font-manrope font-bold text-white leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/50 text-sm leading-relaxed max-w-2xl">
              JP Neuro-Spine Hospital & Pain Management Centre is committed to protecting the privacy and confidentiality of all patients, visitors, and website users.
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Effective Date</p>
            <p className="text-white/60 text-sm font-medium">1 January 2026</p>
            <p className="text-[10px] text-white/30 uppercase tracking-widest mt-2 mb-1">Last Updated</p>
            <p className="text-white/60 text-sm font-medium">1 April 2026</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 w-full px-10 xl:px-20 py-3">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-[#0d1d6e] transition-colors">Home</Link>
          <span className="material-symbols-outlined text-gray-300" style={{ fontSize: "14px" }}>chevron_right</span>
          <span className="text-gray-600">Privacy Policy</span>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="w-full px-10 xl:px-20 py-12 flex gap-12 items-start">

        {/* Sidebar — sticky TOC */}
        <aside className="hidden lg:flex flex-col gap-6 w-64 shrink-0 sticky top-24">
          {/* Notice card */}
          <div className="bg-[#0d1d6e]/[0.04] border border-[#0d1d6e]/10 rounded-xl p-5 flex gap-3 items-start">
            <span className="material-symbols-outlined text-[#0d1d6e] shrink-0 mt-0.5" style={{ fontSize: "18px" }}>info</span>
            <p className="text-[0.75rem] text-[#0d1d6e]/70 leading-relaxed">
              By using our services you agree to the practices described in this policy.
            </p>
          </div>

          {/* TOC */}
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400 mb-2 px-1">
              Contents
            </p>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-[0.78rem] text-gray-400 hover:text-[#0d1d6e] py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors leading-snug"
              >
                {s.title}
              </a>
            ))}
          </div>

          {/* Quick contact */}
          <div className="border border-gray-100 rounded-xl p-5 flex flex-col gap-3 mt-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
              Quick Contact
            </p>
            <a href="tel:04343239923" className="flex items-center gap-2.5 text-[0.78rem] text-gray-500 hover:text-[#0d1d6e] transition-colors">
              <span className="material-symbols-outlined text-[#ff9800]" style={{ fontSize: "16px" }}>call</span>
              04343-239923
            </a>
            <a href="mailto:contact@jpneuro.com" className="flex items-center gap-2.5 text-[0.78rem] text-gray-500 hover:text-[#0d1d6e] transition-colors">
              <span className="material-symbols-outlined text-[#ff9800]" style={{ fontSize: "16px" }}>mail</span>
              contact@jpneuro.com
            </a>
            <Link
              to="/contact-us"
              className="mt-1 text-center text-[0.72rem] font-semibold text-white bg-[#0d1d6e] hover:bg-[#142588] rounded-lg py-2 px-3 transition-colors"
            >
              Contact Us →
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 flex flex-col gap-10">

          {/* Mobile notice */}
          <div className="lg:hidden bg-[#0d1d6e]/[0.04] border border-[#0d1d6e]/10 rounded-xl p-4 flex gap-3 items-start">
            <span className="material-symbols-outlined text-[#0d1d6e] shrink-0 mt-0.5" style={{ fontSize: "18px" }}>info</span>
            <p className="text-sm text-[#0d1d6e]/70 leading-relaxed">
              By using our services you agree to the practices described in this policy.
            </p>
          </div>

          {/* Policy sections */}
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="flex flex-col gap-5 scroll-mt-6">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-manrope font-bold text-[#0d1d6e] whitespace-nowrap">
                  {section.title}
                </h2>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.content.map((item) => (
                  <div
                    key={item.subtitle}
                    className="bg-gray-50 rounded-xl p-5 flex flex-col gap-2"
                  >
                    <h3 className="text-sm font-semibold text-gray-800">
                      {item.subtitle}
                    </h3>
                    <p className="text-[0.82rem] text-gray-500 leading-[1.85]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact block */}
              {section.contact && (
                <div className="bg-[#0d1d6e] rounded-xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-5 mt-2">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#ff9800] shrink-0 mt-0.5" style={{ fontSize: "18px" }}>location_on</span>
                    <p className="text-[0.8rem] text-white/70 leading-relaxed">
                      9/1 Colony, West Link Road (35A),<br />
                      Co-operative Colony,<br />
                      Krishnagiri – 635 001, TN
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#ff9800] shrink-0" style={{ fontSize: "18px" }}>call</span>
                    <a href="tel:04343239923" className="text-[0.8rem] text-white/70 hover:text-white transition-colors">
                      04343-239923
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#ff9800] shrink-0" style={{ fontSize: "18px" }}>mail</span>
                    <a href="mailto:contact@jpneuro.com" className="text-[0.8rem] text-white/70 hover:text-white transition-colors">
                      contact@jpneuro.com
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Back link */}
          <div className="pt-4 border-t border-gray-100">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0d1d6e] hover:text-[#ff9800] transition-colors"
            >
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_back</span>
              Back to Home
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
