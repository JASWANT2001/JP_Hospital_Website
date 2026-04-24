import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en'); // 'en' | 'ta'
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

// ─── Navbar translations ──────────────────────────────────────────────────────
export const navTranslations = {
  en: {
    hospitalLine1: 'JP Neuro Spine Hospital and',
    hospitalLine2: 'Pain Management Centre',
    links: [
      { to: '/', label: 'Home' },
      { to: '/about-us', label: 'About Us' },
      { to: '/departments/neurosurgery', label: 'Neurosurgery' },
      { to: '/departments/pain-medicine', label: 'Pain Medicine' },
      { to: '/departments/critical-care', label: 'Critical Care' },
      { to: '/departments/physiotherapy', label: 'Physiotherapy' },
      { to: '/patient-services', label: 'Patient Services' },
      { to: '/doctors', label: 'Doctors' },
      // { to: '/blog', label: 'Blog' },
      { to: '/contact-us', label: 'Contact' },
    ],
    emergency: 'Emergency',
    bookAppointment: 'Book Appointment',
  },
  ta: {
    hospitalLine1: 'JP நரம்பியல் மற்றும் முதுகெலும்பு மருத்துவமனை',
    hospitalLine2: 'மற்றும் வலி நிவாரண மையம்',
    links: [
      { to: '/', label: 'முகப்பு' },
      { to: '/about-us', label: 'எங்களை பற்றி' },
      { to: '/departments/neurosurgery', label: 'நரம்பியல் அறுவை' },
      { to: '/departments/pain-medicine', label: 'வலி மருத்துவம்' },
      { to: '/departments/critical-care', label: 'தீவிர சிகிச்சை' },
      { to: '/departments/physiotherapy', label: 'இயற்பியல் சிகிச்சை' },
      { to: '/patient-services', label: 'நோயாளர் சேவை' },
      { to: '/doctors', label: 'மருத்துவர்கள்' },
      // { to: '/blog', label: 'கட்டுரைகள்' },
      { to: '/contact-us', label: 'தொடர்பு' },
    ],
    emergency: '24/7 அவசர சேவைகள்',
    bookAppointment: 'சந்திப்பு பதிவு செய்க',
  },
};

// ─── Footer translations ──────────────────────────────────────────────────────
export const footerTranslations = {
  en: {
    hospitalLine1: 'JP Neuro Spine Hospital and',
    hospitalLine2: 'Pain Management Centre',
    tagline: 'Providing clinical excellence with empathy and precision — a trusted centre for advanced neurological and spinal care in Tamil Nadu.',
    followUs: 'Follow Us',
    quickLinks: {
      heading: 'Quick Links',
      links: [
        { label: 'Home', to: '/' },
        { label: 'About Us', to: '/about-us' },
        { label: 'Departments', to: '/department-services' },
        { label: 'Our Doctors', to: '/doctors' },
        { label: 'Patient Services', to: '/patient-services' },
        // { label: 'Patient Education', to: '/patient-education' },
        { label: 'Contact Us', to: '/contact-us' },
      ],
    },
    services: {
      heading: 'Our Services',
      links: [
        { label: 'Neurology', to: '/department-services' },
        { label: 'Spine Surgery', to: '/department-services' },
        { label: 'Pain Management', to: '/department-services' },
        { label: 'Neuro Rehabilitation', to: '/department-services' },
        { label: 'Emergency Care', to: '/emergency' },
      ],
    },
    contact: {
      heading: 'Contact Info',
      // hours: 'Mon – Sat: 9 AM – 6 PM',
      addressLine1: '9/1, West Link Road,',
      addressLine2: 'Co-operative Colony, via K Theatre Road,',
      addressLine3: 'Near ICICI Bank, Krishnagiri – 635001, Tamil Nadu',
      emergency: 'Emergency: 24 / 7',
      viewMap: 'View on Google Maps',
    },
    bottom: {
      copyright: '© 2026 JP Neuro Spine Hospital & Pain Management Centre. All rights reserved.',
      cea: 'CEA Licensed',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
  },
  ta: {
    hospitalLine1: 'JP நரம்பியல் மற்றும் முதுகெலும்பு மருத்துவமனை',
    hospitalLine2: 'மற்றும் வலி நிவாரண மையம்',
    tagline: 'பரிவு மற்றும் துல்லியத்துடன் உயர்தர மருத்துவச் சேவையை வழங்கும் — தமிழ்நாட்டின் மேம்பட்ட நரம்பியல் மற்றும் முதுகெலும்பு சிகிச்சைகளுக்கான ஒரு நம்பிக்கைக்குரிய மையம்.',
    followUs: 'எங்களை பின்தொடரவும்',
    quickLinks: {
      heading: 'விரைவு இணைப்புகள்',
      links: [
        { label: 'முகப்பு', to: '/' },
        { label: 'எங்களைப் பற்றி', to: '/about-us' },
        { label: 'துறைகள்', to: '/department-services' },
        { label: 'எங்கள் மருத்துவர்கள்', to: '/doctors' },
        { label: 'நோயாளி சேவைகள்', to: '/patient-services' },
        // { label: 'நோயாளி கல்வி', to: '/patient-education' },
        { label: 'தொடர்புக்கு', to: '/contact-us' },
      ],
    },
    services: {
      heading: 'எங்கள் சேவைகள்',
      links: [
        { label: 'நரம்பியல்', to: '/department-services' },
        { label: 'முதுகெலும்பு அறுவை சிகிச்சை', to: '/department-services' },
        { label: 'வலி மேலாண்மை', to: '/department-services' },
        { label: 'நரம்பியல் மறுவாழ்வு சிகிச்சை', to: '/department-services' },
        { label: 'அவசர சிகிச்சை', to: '/emergency' },
      ],
    },
    contact: {
      heading: 'தொடர்பு விவரங்கள்',
      addressLine1: '9/1 காலனி, வெஸ்ட் லிங்க் சாலை (35A),',
      addressLine2: 'கூட்டுறவு காலனி,',
      addressLine3: 'கிருஷ்ணகிரி – 635 001, TN',
      emergency: 'அவசர சிகிச்சை: 24 / 7',
      viewMap: 'Google Maps-இல் காண்க',
    },
    bottom: {
      copyright: '© 2026 JP Neuro Spine Hospital and Pain Management Centre. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      cea: 'CEA உரிமம் பெற்றது',
      privacy: 'தனியுரிமைக் கொள்கை',
      terms: 'பயன்பாட்டு விதிமுறைகள்',
    },
  },
};

// ─── Critical Care page translations ─────────────────────────────────────────
export const criticalCareTranslations = {
  en: {
    hero: {
      eyebrow: 'Department 03',
      heading: 'Critical Care',
      body: 'Round-the-clock intensive monitoring and emergency care for the most complex neurological and surgical cases — where every second matters.',
      call: 'Call Now',
    },
    services: [
      { icon: 'emergency',      iconBg: 'bg-error/10',     iconColor: 'text-error',     title: '24h Emergency Trauma Care & ICU',    desc: 'Immediate round-the-clock care ensures rapid stabilization of head and spine injuries, reducing critical delays.' },
      { icon: 'monitor_heart',  iconBg: 'bg-primary/10',   iconColor: 'text-primary',   title: 'Acute Stroke Care',                  desc: 'Time-sensitive stroke management helps restore blood flow to the brain and limit permanent damage.' },
      { icon: 'analytics',      iconBg: 'bg-secondary/10', iconColor: 'text-secondary', title: 'Intraoperative Neuro-Monitoring',    desc: 'Real-time monitoring of neural pathways during surgery helps prevent damage to critical brain and spinal structures.' },
      { icon: 'vital_signs',    iconBg: 'bg-primary/10',   iconColor: 'text-primary',   title: 'Invasive Hemodynamic Monitoring',   desc: 'Continuous monitoring of vital cardiovascular parameters ensures optimal cerebral perfusion during surgery.' },
      { icon: 'ventilator',     iconBg: 'bg-primary/10',   iconColor: 'text-primary',   title: 'Advanced Ventilators',              desc: 'Provide precise respiratory support for critically ill neurosurgical patients, especially those with impaired consciousness.' },
    ],
    sidebar: {
      glanceTitle: 'Unit at a Glance',
      stats: [
        { icon: 'schedule',        label: 'Availability',        value: '24 / 7 / 365' },
        { icon: 'bed',             label: 'ICU Beds',            value: '3 Beds' },
        { icon: 'group',           label: 'Specialists On-Call', value: 'Always Present' },
        { icon: 'local_hospital',  label: 'Response Time',       value: '< 5 Minutes' },
      ],
      emergencyTitle: 'Emergency Line',
      emergencyBody: 'For life-threatening neurological emergencies, call our dedicated ICU hotline immediately.',
      whyTitle: 'Why Our ICU',
      whyPoints: [
        'Continous monitoring.',
        'Care focussed on early recovery.',
        'State-of-the-art ventilator support.',
        'Family counselling & support',
      ],
    },
  },
  ta: {
    hero: {
      eyebrow: 'துறை 03',
      heading: 'தீவிர சிகிச்சை',
      body: 'நரம்பியல் மற்றும் அறுவை சிகிச்சை நோயாளிகளுக்கான 24 மணி நேரத் தீவிரக் கண்காணிப்பு மற்றும் அவசர சிகிச்சை — இங்கு ஒவ்வொரு நொடியும் முக்கியமானது.',
      call: 'இப்போதே அழையுங்கள்',
    },
    services: [
      { icon: 'emergency',     iconBg: 'bg-error/10',     iconColor: 'text-error',     title: '24 மணி நேர அவசர சிகிச்சை & ICU', desc: 'மூளை மற்றும் முதுகெலும்பு காயங்களுக்கு உடனடி சிகிச்சை அளிக்கிறது.' },
      { icon: 'monitor_heart', iconBg: 'bg-primary/10',   iconColor: 'text-primary',   title: 'ஸ்ட்ரோக் சிகிச்சை',                   desc: 'மூளைக்கு இரத்த ஓட்டத்தை மீட்டெடுத்து நிரந்தர சேதத்தை குறைக்கிறது.' },
      { icon: 'analytics',     iconBg: 'bg-secondary/10', iconColor: 'text-secondary', title: 'அறுவை சிகிச்சை நேர கண்காணிப்பு',      desc: 'நரம்பு சேதத்தைத் தடுக்கும்.' },
      { icon: 'vital_signs',   iconBg: 'bg-primary/10',   iconColor: 'text-primary',   title: 'ஹீமோடைனமிக் கண்காணிப்பு',            desc: 'மூளைக்கு தேவையான இரத்த ஓட்டத்தை பராமரிக்க உதவுகிறது.' },
      { icon: 'ventilator',    iconBg: 'bg-primary/10',   iconColor: 'text-primary',   title: 'மேம்பட்ட வென்டிலேட்டர்கள்',           desc: 'கடுமையான உடல்நலக்குறைவு நோயாளிகளுக்கு சுவாச உதவி வழங்குகிறது.' },
    ],
    sidebar: {
      glanceTitle: 'பிரிவின் கண்ணோட்டம்',
      stats: [
        { icon: 'schedule',       label: 'கிடைக்கும் நேரம்',   value: '24 / 7 / 365' },
        { icon: 'bed',            label: 'ICU படுக்கைகள்',     value: '3 படுக்கைகள்' },
        { icon: 'group',          label: 'நிபுணர்கள்',          value: 'எப்போதும் இருப்பார்கள்' },
        { icon: 'local_hospital', label: 'பதிலளிக்கும் நேரம்',  value: '< 5 நிமிடங்கள்' },
      ],
      emergencyTitle: 'அவசர உதவி எண்',
      emergencyBody: 'உயிருக்கு ஆபத்தான நரம்பியல் சார்ந்த அவசர நிலைகளுக்கு, எங்களின் பிரத்யேக தீவிர சிகிச்சைப் பிரிவு (ICU) அவசர உதவி எண்ணை உடனடியாக அழைக்கவும்.',
      whyTitle: 'எங்கள் தீவிர சிகிச்சைப் பிரிவை (ICU) ஏன் தேர்ந்தெடுக்க வேண்டும்?',
      whyPoints: [
        'தொடர் கண்காணிப்பு.',
        'விரைவான குணமடைதலை மையமாகக் கொண்ட சிகிச்சை.',
        'அதிநவீன சுவாசக் கருவிகள் (Ventilator) சார்ந்த ஆதரவு.',
        'குடும்பத்தினருக்கான ஆலோசனை மற்றும் ஆதரவு',
      ],
    },
  },
};

// ─── Physiotherapy page translations ─────────────────────────────────────────
export const physiotherapyTranslations = {
  en: {
    hero: {
      eyebrow: 'Department 04',
      heading: 'Physiotherapy',
      body: 'Personalised rehabilitation programmes to restore movement, strength, and function — helping patients recover faster and live better.',
      call: 'Call Now',
    },
    services: [
      { icon: 'accessible',      title: 'Stroke Rehabilitation',          desc: 'Focused therapy programs help patients regain movement, speech, and independence after stroke.' },
      { icon: 'electric_bolt',   title: 'IFT (Interferential Therapy)',   desc: 'Uses medium-frequency electrical currents to reduce pain and improve blood circulation.' },
      { icon: 'directions_run',  title: 'MST (Muscle Stimulation Therapy)', desc: 'Applies electrical impulses to stimulate weak or paralyzed muscles and prevent atrophy.' },
      { icon: 'straighten',      title: 'Auto Traction',                  desc: 'Provides controlled spinal stretching to relieve pressure on discs and nerves.' },
      { icon: 'sports_soccer',   title: 'Sports Rehabilitation',          desc: 'Specialized therapy aimed at recovery from sports injuries and prevention of re-injury.' },
      { icon: 'flash_on',        title: 'TENS',                           desc: 'Delivers low-voltage electrical currents to block pain signals and stimulate endorphin release.' },
    ],
  },
  ta: {
    hero: {
      eyebrow: 'துறை 04',
      heading: 'இயற்பியல் சிகிச்சை',
      body: 'இயக்கம், வலிமை மற்றும் செயல்பாடு ஆகியவற்றை மீட்டெடுப்பதற்கான தனிப்பயனாக்கப்பட்ட மறுவாழ்வுத் திட்டங்கள் — நோயாளிகள் விரைவாக குணமடைய உதவுகின்றன.',
      call: 'இப்போதே அழையுங்கள்',
    },
    services: [
      { icon: 'accessible',     title: 'ஸ்ட்ரோக் ரீஹாபிலிட்டேஷன்',  desc: 'இயக்கம் மற்றும் பேச்சுத் திறனை மீட்டெடுக்க உதவுகிறது.' },
      { icon: 'electric_bolt',  title: 'IFT சிகிச்சை',               desc: 'மின்சார அலைகள் மூலம் வலி குறைப்பு.' },
      { icon: 'directions_run', title: 'MST சிகிச்சை',               desc: 'தசை பலம் அதிகரிப்பு.' },
      { icon: 'straighten',     title: 'Auto Traction',               desc: 'முதுகெலும்பு அழுத்தத்தை குறைக்கும்.' },
      { icon: 'sports_soccer',  title: 'விளையாட்டு மீளுருவாக்கம்',  desc: 'காயங்களுக்குப் பின் மீட்பு.' },
      { icon: 'flash_on',       title: 'TENS சிகிச்சை',              desc: 'குறைந்த மின்சார அலைகள் மூலம் வலி சிக்னல்களை தடுத்து வலியை குறைக்கிறது.' },
    ],
  },
};

// ─── Pain Medicine page translations ─────────────────────────────────────────
export const painMedicineTranslations = {
  en: {
    hero: {
      eyebrow: 'Department 02',
      heading: 'Pain Medicine',
      body: 'Comprehensive, evidence-based chronic pain management — helping patients reclaim their quality of life through precise diagnosis and minimally invasive treatments.',
      call: 'Call Now',
    },
    conditionsSection: {
      heading: 'Chronic Conditions We Treat',
      items: [
        'Chronic Headache Disorders',
        'Slipped Disc & Sciatica',
        'Neuropathic Pain',
        'Post Joint Replacement Pain',
        'Fibromyalgia & Myofascial Pain',
        'Post Surgical Pain',
        'Cancer Pain',
        'Trigeminal Neuralgia',
        'Post Herpetic Neuralgia',
        'Chronic Shoulder Pain',
        'Chronic Knee Pain',
        'Heel & Foot Pain',
        'Spasticity Management',
      ],
    },
    techSection: {
      heading: 'Advanced Technology',
      items: [
        { title: 'Headache Assessment Tool',                  desc: 'A simple, structured clinical support system to accurately diagnose different headache disorders. Enables quick, practical, and evidence-based decisions for effective pain management.' },
        { title: 'Fluoroscopy & DSA Guided Procedures',       desc: 'Advanced imaging guidance ensures precise needle placement for pain interventions. Enhances safety, accuracy, and effectiveness of minimally invasive pain procedures.' },
        { title: 'Neuraxial & Musculoskeletal Ultrasound',    desc: 'Real-time imaging helps diagnose and guide treatment of pain-causing conditions like tendon and joint injuries. Improves precision of injections while reducing complications and discomfort.' },
        { title: 'Neuromodulation & Radiofrequency Ablation', desc: 'Targets specific nerves to interrupt pain signals and provide long-term relief. Highly effective for chronic pain conditions when conventional treatments fail.' },
        { title: 'Multibiologic Centrifuge (Orthobiologics)', desc: "Processes patient's own biological samples to create regenerative therapies for healing. Used in conditions like osteoarthritis and sports injuries to promote natural tissue repair." },
        { title: 'Acute Pain Services',                       desc: 'Comprehensive pain management protocols ensure comfortable recovery after surgery. Utilizes regional anesthesia and medications to minimize pain and speed up healing.' },
      ],
    },
  },
  ta: {
    hero: {
      eyebrow: 'துறை 02',
      heading: 'வலி மருத்துவம்',
      body: 'விரிவான, ஆதார அடிப்படையிலான நாள்பட்ட வலி நிவாரணம் — துல்லியமான நோயறிதல் மற்றும் குறைந்தபட்ச ஊடுருவல் சிகிச்சைகள் மூலம் மக்கள் தங்கள் வாழ்க்கைத் தரத்தை மீட்டெடுக்க உதவுகிறது.',
      call: 'இப்போதே அழையுங்கள்',
    },
    conditionsSection: {
      heading: 'நாம் சிகிச்சையளிக்கும் நாள்பட்ட நிலைமைகள்',
      items: [
        'நீண்டநாள் தலைவலி – மைக்ரேன், கிளஸ்டர் தலைவலி போன்றவை',
        'முகவலி நோய்கள் – ட்ரைஜெமினல் நியூரால்ஜியா',
        'கழுத்து & கை வலி – சர்வைக்கல் மற்றும் கை நரம்பு வலி',
        'முதுகு & மேல் முதுகு வலி',
        'கீழ் முதுகு & முதுகெலும்பு வலி',
        'டிஸ்க் சரிவு & சயாட்டிகா – நரம்பு அழுத்தம் காரணமான வலி',
        'எலும்புச்சிதைவு வலி (Osteoarthritis)',
        'நரம்பு சார்ந்த வலி (Neuropathic Pain)',
        'போஸ்ட் ஹெர்பெடிக் நியூரால்ஜியா – சிங்கிள்ஸ் பிறகு வரும் வலி',
        'பேல்டு பேக் சர்ஜரி சிண்ட்ரோம் – அறுவை சிகிச்சைக்கு பின் தொடரும் வலி',
        'சேர்க்கை அறுவை சிகிச்சைக்கு பின் வலி',
        'மத்திய நரம்பு வலி (Central Pain Syndrome)',
        'தசை வலி (Myofascial Pain)',
        'ஃபைப்ரோமையால்ஜியா',
        'நீண்டநாள் இடுப்புவலி',
        'புற்றுநோய் தொடர்பான வலி',
        'கை/கால் நீக்கம் பின் ஏற்படும் வலி (Phantom Pain)',
        'பிற நீண்டநாள் வலி நிலைகள்',
      ],
    },
    techSection: {
      heading: 'உபகரணங்கள் / தொழில்நுட்பம்',
      items: [
        { title: 'தலைவலி மதிப்பீட்டு கருவி',                          desc: 'தலைவலியை சரியாக கண்டறிய உதவும் எளிய கருவி.' },
        { title: 'Fluoroscopy & Angiography வழிகாட்டும் சிகிச்சைகள்',  desc: 'சிகிச்சை ஊசிகளை துல்லியமாக செலுத்த உதவுகிறது.' },
        { title: 'நரம்பு & தசை அல்ட்ராசவுண்ட்',                       desc: 'நேரடி படங்களின் மூலம் வலி காரணங்களை கண்டறிகிறது.' },
        { title: 'நரம்பு கட்டுப்பாடு & ரேடியோஃப்ரீக்வென்சி சிகிச்சை', desc: 'வலி சிக்னல்களை தடுக்க உதவுகிறது.' },
        { title: 'மல்டிபயாலஜிக் சென்ட்ரிஃப்யூஜ்',                     desc: 'உடலின் இயற்கை குணமடையும் செயல்முறையை மேம்படுத்துகிறது.' },
        { title: 'கடுமையான வலி சிகிச்சைச் சேவை',                      desc: 'அறுவை சிகிச்சைக்கு பின் வலியை குறைத்து விரைவான குணமடைவிற்கு உதவுகிறது.' },
      ],
    },
  },
};

// ─── Appointment Banner translations (shared across all department pages) ────
export const appointmentBannerTranslations = {
  en: {
    eyebrow: 'Ready to get started?',
    heading: 'Experience Specialized Clinical Care',
    body: 'Our specialists are ready to guide you through your recovery journey with compassion and cutting-edge technology.',
    call: 'Call Now',
  },
  ta: {
    eyebrow: 'தொடங்கத் தயாரா?',
    heading: 'சிறப்பு மருத்துவச் சிகிச்சையை அனுபவியுங்கள்',
    body: 'அதிநவீனத் தொழில்நுட்பத்தின் துணையுடன், உங்கள் குணமடையும் பயணத்தில் உங்களுக்கு வழிகாட்ட எங்கள் நிபுணர்கள் தயாராக உள்ளனர்.',
    call: 'இப்போதே அழையுங்கள்',
  },
};

// ─── Neurosurgery page translations ──────────────────────────────────────────
export const neurosurgeryTranslations = {
  en: {
    hero: {
      eyebrow: 'Department 01',
      heading: 'Neurosurgery',
      body: 'Advanced surgical care for brain, spine, and nervous system conditions — delivered with precision, compassion, and cutting-edge technology.',
      call: 'Call Now',
    },
techSection: {
  heading: "Advanced Technology",
  items: [
    {
      title: "Electrodiagnostic Tests",
      desc: "Includes Electroencephalogram (EEG), Electromyogram (EMG), Nerve Conduction Studies (NCS), Somatosensory Evoked Potential (SSEP), Visual Evoked Potential (VEP), Auditory Evoked Potential (AEP), and Autonomic Function Tests for comprehensive neurological evaluation.",
    },
    {
      title: "Neurosurgical Microscope",
      desc: "High-magnification visualization for precise brain and spine surgery, enabling safe dissection and preservation of critical structures.",
    },
    {
      title: "Neuro Electrical Drill System",
      desc: "High-speed drill for accurate bone cutting in neurosurgical procedures with minimal tissue trauma.",
    },
    {
      title: "Fluoroscopy",
      desc: "Real-time imaging guidance for minimally invasive procedures and accurate implant placement.",
    },
    {
      title: "Advanced Anaesthesia Workstation",
      desc: "Delivers controlled anaesthesia with continuous monitoring for complex neurosurgical procedures.",
    },
    {
      title: "Invasive Hemodynamic Monitoring",
      desc: "Continuous monitoring of cardiovascular parameters to maintain optimal blood flow during surgery.",
    },
    {
      title: "Patient Warming Device",
      desc: "Maintains body temperature during surgery to prevent hypothermia and improve recovery outcomes.",
    },
  ],
},
    services: [
      { icon: 'psychology',             title: 'Endoscopic Brain Surgery',   desc: 'Uses small openings and advanced endoscopes to access deep brain areas with minimal tissue disruption. Leads to faster recovery, less pain, and reduced hospital stay.' },
      { icon: 'vertical_align_center',  title: 'Endoscopic Spine Surgery',   desc: 'A keyhole approach to treat spine problems like disc herniation with minimal muscle damage. Offers quicker recovery, less postoperative pain, and early return to normal activities.' },
      { icon: 'biotech',                title: 'Microneurosurgery',          desc: 'High-precision surgery performed under an operating microscope for delicate brain and spinal structures. Ensures maximum tumor removal or repair while preserving vital neurological function.' },
      { icon: 'neurology',              title: 'Brain Tumor Surgery',        desc: 'Advanced surgical techniques aim for safe and effective removal of tumors affecting the brain and spine. Focuses on preserving neurological function while improving survival and quality of life.' },
      { icon: 'cell_tower',             title: 'Epilepsy Surgery',           desc: 'Surgical treatment for patients with seizures not controlled by medications. Helps reduce or eliminate seizures, significantly improving daily functioning and independence.' },
      { icon: 'child_care',             title: 'Pediatric Neurosurgery',     desc: 'Specialized care for neurological conditions in infants and children, including congenital and developmental disorders. Focuses on gentle, precise treatment to support normal growth and long-term neurological health.' },
    ],
  },
  ta: {
    hero: {
      eyebrow: 'துறை 01',
      heading: 'நரம்பியல் அறுவை சிகிச்சை',
      body: 'மூளை, தண்டுவடம் மற்றும் நரம்பு மண்டலப் பிரச்சனைகளுக்கான மேம்பட்ட அறுவை சிகிச்சை — துல்லியம், கருணை மற்றும் அதிநவீன தொழில்நுட்பத்துடன் வழங்கப்படுகிறது.',
      call: 'இப்போதே அழையுங்கள்',
    },
   techSection: {
  heading: "உபகரணங்கள் / தொழில்நுட்பம்",
  items: [
    {
      title: "மின் கண்டறிதல் பரிசோதனைகள்",
      desc: "விரிவான நரம்பியல் மதிப்பீட்டிற்காக, மின்மூளை வரைபடம் (EEG), மின் தசை வரைபடம் (EMG), நரம்பு செயல்பாட்டு ஆய்வுகள் (NCS), உடல் உணர்வுத் தூண்டல் திறன் (SSEP), காட்சித் தூண்டல் திறன் (VEP), செவிப்புலத் தூண்டல் திறன் (AEP) மற்றும் தன்னாட்சி நரம்பு மண்டல செயல்பாட்டுப் பரிசோதனைகள் ஆகியவற்றை இவை உள்ளடக்கியுள்ளன.",
    },
    {
      title: "நரம்பியல் மைக்ரோஸ்கோப் (Neurosurgical Microscope)",
      desc: "மிக உயர்ந்த பெரிதாக்கம் மற்றும் வெளிச்சத்தை வழங்கி, மூளை மற்றும் முதுகெலும்பு போன்ற நுணுக்கமான பகுதிகளில் துல்லியமான அறுவை சிகிச்சைக்கு உதவுகிறது. முக்கிய திசுக்களை பாதுகாத்து, அறுவை சிகிச்சை பாதுகாப்பை அதிகரிக்கிறது.",
    },
    {
      title: "நரம்பியல் மின்சார ட்ரில் அமைப்பு (Neuro Electrical Drill System)",
      desc: "எலும்புகளை துல்லியமாக வெட்ட அதிக வேகத்தில் செயல்படும் கருவி. சுற்றியுள்ள திசுக்களுக்கு சேதம் குறையச் செய்து பாதுகாப்பை உறுதி செய்கிறது.",
    },
    {
      title: "ஃப்ளூரோஸ்கோபி (Fluoroscopy)",
      desc: "நேரடி (real-time) படங்களின் மூலம் குறைந்த காயம் ஏற்படும் சிகிச்சைகளுக்கு வழிகாட்டுகிறது. சிகிச்சை துல்லியத்தை உயர்த்தி, சிக்கல்களை குறைக்கிறது.",
    },
    {
      title: "மேம்பட்ட மயக்க மருந்து அமைப்பு (Advanced Anaesthesia Workstation)",
      desc: "சிக்கலான அறுவை சிகிச்சைகளுக்கு பாதுகாப்பான மற்றும் கட்டுப்படுத்தப்பட்ட மயக்க மருந்து வழங்குகிறது. நோயாளியின் நிலையை தொடர்ந்து கண்காணிக்க உதவுகிறது.",
    },
    {
      title: "இன்வேசிவ் ஹீமோடைனமிக் கண்காணிப்பு (Invasive Hemodynamic Monitoring)",
      desc: "இதய மற்றும் இரத்த ஓட்ட நிலைகளை தொடர்ந்து அளவிடுகிறது. இரத்த ஓட்டத்தை சரியாக பராமரித்து சிக்கல்களைத் தவிர்க்க உதவுகிறது.",
    },
    {
      title: "உடல் வெப்பநிலை பராமரிப்பு கருவி (Patient Warming Device)",
      desc: "அறுவை சிகிச்சை நேரத்தில் உடல் வெப்பநிலையை நிலைநிறுத்துகிறது. சிக்கல்களை குறைத்து, விரைவான மீட்பை உதவுகிறது.",
    },
  ],
},
    services: [
      { icon: 'psychology',            title: 'குறைந்த காயம் & எண்டோஸ்கோபிக் மூளை அறுவை சிகிச்சை', desc: 'சிறிய திறப்புகள் மற்றும் நவீன கருவிகள் மூலம் ஆழமான பகுதிகளை சிகிச்சை செய்கிறது. விரைவான மீட்பு மற்றும் குறைந்த வலி.' },
      { icon: 'vertical_align_center', title: 'எண்டோஸ்கோபிக் முதுகெலும்பு அறுவை சிகிச்சை', desc: 'டிஸ்க் பிரச்சினைகளை குறைந்த தசை சேதத்துடன் சிகிச்சை செய்கிறது. விரைவான மீட்பு.' },
      { icon: 'biotech',               title: 'மைக்ரோ நரம்பியல் அறுவை சிகிச்சை', desc: 'மிக நுணுக்கமான சிகிச்சை, முக்கிய நரம்புகளை பாதுகாக்கிறது.' },
      { icon: 'neurology',             title: 'மூளை & முதுகெலும்பு கட்டி அறுவை சிகிச்சை', desc: 'கட்டிகளை பாதுகாப்பாக அகற்றி, வாழ்க்கை தரத்தை மேம்படுத்துகிறது.' },
      { icon: 'cell_tower',            title: 'எபிலப்ஸி அறுவை சிகிச்சை', desc: 'மருந்துகளால் கட்டுப்படுத்த முடியாத fits-க்கு சிகிச்சை.' },
      { icon: 'child_care',            title: 'குழந்தைகளுக்கான நரம்பியல் சிகிச்சை', desc: 'குழந்தைகளின் வளர்ச்சியை கருத்தில் கொண்டு சிகிச்சை வழங்குகிறது.' },
    ],
  },
};

// ─── About Us page translations ──────────────────────────────────────────────
export const aboutTranslations = {
  en: {
    hero: {
      eyebrow: 'OUR JOURNEY',
      heading: 'Bringing state-of-the-art care closer.',
      body1: 'JP Neuro Spine Hospital and Pain Management Centre was founded with a clear purpose to make advanced neurological and spine care accessible to every individual who needs it. We believe that expertise and innovation should not be limited by geography, and that every patient deserves access to world-class treatment.',
      body2: 'Our approach combines cutting-edge technology with a team of highly skilled specialists who are dedicated to precision, safety, and long-term recovery. From diagnosis to rehabilitation, every step is designed to ensure confidence, clarity, and comfort for our patients and their families.',
      quote: '"Precision in surgery, compassion in care."',
      quoteCaption: 'Guiding every patient interaction.',
    },
    visionMission: {
      statsLabel: 'Doctors with 10+ Years of Experience',
      visionTitle: 'Our Vision',
      visionBody: 'Restoring lives through excellence in Neuro Spine and Pain care.',
      missionTitle: 'Our Mission',
      missionItems: [
        { icon: 'clinical_notes',      title: 'Clinical Excellence',  desc: 'We uphold the highest standards of medical practice through evidence-based treatment, continuous learning, and outcome-driven care.' },
        { icon: 'favorite',            title: 'Compassion & Dignity', desc: 'We treat every patient with empathy, respect, and sensitivity, recognizing the physical and emotional impact of neuro and pain disorders.' },
        { icon: 'verified_user',       title: 'Integrity & Ethics',   desc: 'We are committed to transparent communication, ethical decision-making, and responsible medical practice at all times.' },
      ],
    },
    leadership: {
      heading: 'Our Leadership',
      sub: 'Expertise led by visionaries in Neurosurgery and Pain Management.',
      leaders: [
        {
          name: 'Dr. Jayakumar P',
          role: 'Chief Consultant Neurosurgeon',
          bio: 'With over two decades of experience in complex spine surgeries and neuro-trauma, Dr. Jayakumar leads our clinical excellence program with a focus on minimally invasive procedures.',
          image: 'https://ik.imagekit.io/glvwzrukg/JP%20Webiste/dr.%20jayakumar.jpeg',
        },
        {
          name: 'Dr. Prasanna Vani V',
          role: 'Head of Pain Management and Anesthesiology',
          bio: 'Dr. Prasanna Vani specializes in holistic pain relief and interventional pain medicine, ensuring our patients find lasting comfort through personalized rehabilitation pathways.',
          image: 'https://ik.imagekit.io/glvwzrukg/JP%20Webiste/dr.prasanna%20vani%20.jpeg',
        },
      ],
    },
    accreditation: {
      eyebrow: 'TRUST & COMPLIANCE',
      heading: 'Fully Licensed & Accredited',
      body: 'Evidence-based treatment, advanced equipment, and standard protocols—delivering safe, precise care.',
      // license: 'CEA License No: CEA-HOSP-2024-0012',
    },
    cta: {
      heading: 'Experience Care Without Compromise',
      body: "Whether you're seeking a consultation for persistent pain or specialized neuro-surgical advice, our team is here to support your journey to recovery.",
      emergency: 'Emergency: 04343 239923',
    },
  },

  ta: {
    hero: {
      eyebrow: 'எங்கள் பயணம்',
      heading: 'அதிநவீன சிகிச்சையை அருகாமையில் கொண்டு வருதல்.',
      body1: 'ஜேபி நியூரோ ஸ்பைன் மருத்துவமனை மற்றும் வலி மேலாண்மை மையம், தேவை உள்ள ஒவ்வொரு தனிநபருக்கும் மேம்பட்ட நரம்பியல் மற்றும் முதுகெலும்பு சிகிச்சையை அணுகக்கூடியதாக மாற்றும் தெளிவான நோக்கத்துடன் நிறுவப்பட்டது. நிபுணத்துவமும் புதுமையும் புவியியல் எல்லைகளால் கட்டுப்படுத்தப்படக்கூடாது என்றும், ஒவ்வொரு நோயாளியும் உலகத் தரம் வாய்ந்த சிகிச்சையைப் பெறுவதற்குத் தகுதியானவர் என்றும் நாங்கள் நம்புகிறோம்.',
      body2: 'எங்கள் அணுகுமுறையானது, அதிநவீன தொழில்நுட்பத்தை, துல்லியம், பாதுகாப்பு மற்றும் நீண்டகால மீட்புக்காக அர்ப்பணிப்புடன் செயல்படும் உயர் திறன்கொண்ட நிபுணர்கள் குழுவுடன் இணைக்கிறது. நோய் கண்டறிதல் முதல் மறுவாழ்வு வரை, ஒவ்வொரு கட்டமும் எங்கள் நோயாளிகளுக்கும் அவர்களது குடும்பத்தினருக்கும் நம்பிக்கை, தெளிவு மற்றும் ஆறுதலை உறுதி செய்யும் வகையில் வடிவமைக்கப்பட்டுள்ளது.',
      quote: '"அறுவை சிகிச்சையில் துல்லியம்; பராமரிப்பில் கருணை."',
      quoteCaption: 'இதுவே, ஒவ்வொரு நோயாளியுடனான எங்கள் அணுகுமுறைக்கு வழிகாட்டுகிறது.',
    },
    visionMission: {
      statsLabel: '10-க்கும் மேற்பட்ட ஆண்டுகளின் மருத்துவச் சிறப்பு',
      visionTitle: 'எங்கள் நோக்கு',
      visionBody: 'நரம்பு, முதுகுத்தண்டு மற்றும் வலி சிகிச்சையில் சிறப்பின் மூலம் வாழ்வை மீட்டெடுத்தல்.',
      missionTitle: 'எங்கள் குறிக்கோள்',
      missionItems: [
        { icon: 'clinical_notes',      title: 'மருத்துவச் சிறப்பு',      desc: 'சான்றுகளின் அடிப்படையில் அமைந்த சிகிச்சை, தொடர் புதுப்பித்தல் மற்றும் விளைவுகளை மையமாகக் கொண்ட பராமரிப்பு ஆகியவற்றின் மூலம், மருத்துவ நடைமுறையின் மிக உயர்ந்த தரநிலைகளை நாங்கள் நிலைநிறுத்துகிறோம்.' },
        { icon: 'favorite',            title: 'கருணையும் கண்ணியமும்',   desc: 'நரம்பியல் மற்றும் வலி சார்ந்த பாதிப்புகளின் உடல்ரீதியான மற்றும் உணர்வுரீதியான தாக்கங்களை உணர்ந்து, ஒவ்வொரு நோயாளியையும் நாங்கள் பரிவு, மரியாதை மற்றும் உணர்வுபூர்வமான அக்கறையுடன் நடத்துகிறோம்.' },
        { icon: 'verified_user',       title: 'நேர்மையும் அறநெறியும்',  desc: 'நாங்கள் எப்போதும் வெளிப்படையான தகவல் தொடர்பு, அறநெறி சார்ந்த முடிவெடுத்தல் மற்றும் பொறுப்புமிக்க மருத்துவ நடைமுறை ஆகியவற்றில் உறுதியுடன் உள்ளோம்.' },
      ],
    },
    leadership: {
      heading: 'எங்கள் தலைமைத்துவம்',
      sub: 'நரம்பியல் அறுவை சிகிச்சை மற்றும் வலி மேலாண்மைத் துறையில் தொலைநோக்குச் சிந்தனையாளர்களால் வழிநடத்தப்படும் நிபுணத்துவம்.',
      leaders: [
        {
          name: 'டாக்டர் ஜெயகுமார்.P',
          role: 'தலைமை நரம்பியல் அறுவை சிகிச்சை நிபுணர்.',
          bio: 'முதுகெலும்பு அறுவை சிகிச்சைகள் மற்றும் நரம்பியல் காயங்களில் இருபது ஆண்டுகளுக்கும் மேலான அனுபவமுள்ள டாக்டர் ஜெயகுமார், குறைந்தபட்ச ஊடுருவல் செயல்முறைகளில் கவனம் செலுத்தி இத்துறையை வழிநடத்துகிறார்.',
          image: 'https://ik.imagekit.io/glvwzrukg/JP%20Webiste/dr.%20jayakumar.jpeg',
        },
        {
          name: 'டாக்டர் பிரசன்னா வாணி V',
          role: 'வலி நிவாரணம் மற்றும் மயக்கவியல் துறைத் தலைவர்',
          bio: 'டாக்டர் பிரசன்ன வாணி, முழுமையான வலி நிவாரணம் மற்றும் செயல்முறை சார்ந்த வலி மருத்துவத்தில் நிபுணத்துவம் பெற்றுள்ளார்; தனிப்பயனாக்கப்பட்ட மறுவாழ்வு வழிமுறைகளின் மூலம் எங்கள் நோயாளிகள் நீடித்த நிம்மதியைப் பெறுவதை இவர் உறுதிசெய்கிறார்.',
          image: 'https://ik.imagekit.io/glvwzrukg/JP%20Webiste/dr.prasanna%20vani%20.jpeg',
        },
      ],
    },
    accreditation: {
      eyebrow: 'நம்பகத்தன்மை மற்றும் இணக்கம்',
      heading: 'முழுமையாக உரிமம் பெற்றது, அங்கீகரிக்கப்பட்டது & உங்கள் பாதுகாப்பில் அர்ப்பணிக்கப்பட்டது',
      body: 'சான்றுகளின் அடிப்படையில் அமைந்த சிகிச்சை, அதிநவீன உபகரணங்கள் மற்றும் தரப்படுத்தப்பட்ட நெறிமுறைகள் — பாதுகாப்பான, துல்லியமான பராமரிப்பை வழங்குகிறோம்.',
      license: 'CEA உரிம எண்: CEA-HOSP-2024-0012',
    },
    cta: {
      heading: 'சிறப்புமிகு சிகிச்சையை அனுபவியுங்கள்',
      body: 'நீடித்த வலிக்குரிய மருத்துவ ஆலோசனையையோ அல்லது சிறப்பு நரம்பியல் அறுவை சிகிச்சை சார்ந்த வழிகாட்டுதலையோ நீங்கள் நாடினாலும், நீங்கள் முழுமையாக குணமடையும் இந்தப் பயணத்தில் உங்களுக்குத் துணையாக நிற்க எங்கள் குழு தயாராக உள்ளது.',
      emergency: 'அவசர எண் 04343-239923',
    },
  },
};

// ─── Patient Services page translations ──────────────────────────────────────
export const patientServicesTranslations = {
  en: {
    hero: {
      heading1: 'Comprehensive Patient',
      heading2: 'Services & Facilities',
      body: 'JP Neuro Spine Hospital and Pain Management Centre blends surgical precision with compassionate care, providing a holistic healing environment for complex neurological and spine conditions.',
    },
    opd: {
      eyebrow: 'Out-Patient Department',
      heading: 'OPD Consultation Hours',
      body: 'Walk in or book ahead — our specialists are available across multiple sessions throughout the week.',
      callBtn: 'Call for Timings',
      specialized: 'Specialized',
      daily: 'Daily',
      monSat: 'Mon – Sat',
      sunday: 'Sunday',
      monFriMorning: 'Mon – Fri (Morning)',
      monFriEvening: 'Mon – Fri (Evening)',
      dailySession: 'Mon – Sat',
      dailySessionEvening: 'Mon – Sat (Evening)',
      neurosurgery: 'Neurosurgery',
      painMedicine: 'Pain Medicine',
      physiotherapy: 'Physiotherapy',
      neuroDesc: 'Expert consultation for brain, spine, and nerve conditions by our senior neurosurgeon.',
      painDesc: 'Specialised pain evaluation and intervention for chronic and acute pain conditions.',
      physioDesc: 'Advanced neuro-rehabilitation and physical therapy protocols tailored for spinal recovery.',
    },
    emergency: {
      heading: '24/7 Emergency & Support',
      items: [
        { title: 'Casualty',     desc: '24 Hours. Immediate emergency medical response and stabilization unit for critical traumas.' },
        { title: 'Pharmacy',     desc: '24 Hours. Fully stocked in-house medicine center for all surgical and critical care needs.' },
        { title: 'Lab Services', desc: '24 Hours. Advanced pathology and diagnostic laboratory for rapid results and diagnostics.' },
      ],
    },
    inpatient: {
      eyebrow: 'Accommodation',
      heading: 'Advanced In-Patient Care',
      items: [
        { title: 'Ward Options',          desc: 'Sharing Room, Private Non-AC, and Private AC Suite available for varied patient preferences.' },
        { title: 'Specialized ICU',       desc: '3-bed specialized intensive care unit equipped for critical Neuro Spine recovery and post-operative monitoring.' },
        { title: 'Day Care Procedures',   desc: 'Dedicated room for quick-turnaround pain management procedures and minimally invasive interventions.' },
      ],
    },
    diagnostics: {
      badgeLabel: 'Diagnostic Lab',
      eyebrow: 'Diagnostics',
      heading: 'Neuro Electro Diagnostic Excellence',
      body: 'Our diagnostic wing is equipped with cutting-edge technology to map neural activity with pinpoint accuracy, ensuring the right foundation for every treatment plan.',
      tests: [
        { label: 'EEG',  desc: 'Electroencephalogram' },
        { label: 'EMG',  desc: 'Electromyography' },
        { label: 'NCS',  desc: 'Nerve Conduction' },
        { label: 'BERA', desc: 'Brainstem Response' },
        { label: 'VEP',  desc: 'Visual Evoked Potential' },
        { label: 'AFT',  desc: 'Autonomic Function Tests' },
      ],
    },
  },
  ta: {
    hero: {
      heading1: 'விரிவான நோயாளிச்',
      heading2: 'சேவைகள் மற்றும் வசதிகள்',
      body: 'JP Neuro Spine Hospital and Pain Management Centre ஆனது, அறுவை சிகிச்சையின் துல்லியத்தையும் கருணைமிக்க கவனிப்பையும் ஒருங்கிணைத்து, நரம்பியல் மற்றும் முதுகெலும்பு சார்ந்த பாதிப்புகளுக்கு ஒரு முழுமையான குணப்படுத்தும் சூழலை வழங்குகிறது.',
    },
    opd: {
      eyebrow: 'வெளிநோயாளிகள் பிரிவு',
      heading: 'வெளிநோயாளிகள் ஆலோசனை நேரம்',
      body: 'நேரடியாக வருகை தரலாம் அல்லது முன்பதிவு செய்யலாம் — எங்கள் சிறப்பு மருத்துவர்கள் வாரம் முழுவதும் பல அமர்வுகளில் ஆலோசனைகளுக்குக் கிடைக்கிறார்கள்.',
      callBtn: 'நேரங்களுக்கு அழையுங்கள்',
      specialized: 'சிறப்பு',
      daily: 'தினமும்',
      monSat: 'திங்கள் – சனி',
      sunday: 'ஞாயிறு',
      monFriMorning: 'திங்கள் – வெள்ளி (காலை)',
      monFriEvening: 'திங்கள் – வெள்ளி (மாலை)',
      dailySession: 'திங்கள் – சனி',
      dailySessionEvening: 'திங்கள் – சனி (மாலை)',
      neurosurgery: 'நரம்பியல் அறுவை சிகிச்சை',
      painMedicine: 'வலி மருத்துவம்',
      physiotherapy: 'பிசியோதெரபி',
      neuroDesc: 'மூளை, தண்டுவடம் மற்றும் நரம்பு சார்ந்த பாதிப்புகளுக்கு, எங்கள் மூத்த நரம்பியல் அறுவை சிகிச்சை நிபுணரின் சிறப்பு ஆலோசனை.',
      painDesc: 'நாள்பட்ட மற்றும் தீவிர வலி நிலைகளுக்கான சிறப்பு வலி மதிப்பீடு மற்றும் சிகிச்சை முறைகள்.',
      physioDesc: 'முதுகெலும்பு மீட்பிற்காகவே பிரத்யேகமாக வடிவமைக்கப்பட்ட, மேம்பட்ட நரம்பியல் மறுவாழ்வு மற்றும் இயன்முறை மருத்துவ வழிமுறைகள்.',
    },
    emergency: {
      heading: '24/7 அவசர சிகிச்சை',
      items: [
        { title: 'அவசரம்/விபத்து',  desc: '24 மணி நேரம். உயிருக்கு ஆபத்தான காயங்களுக்கு உடனடி அவசர மருத்துவ உதவி மற்றும் நிலைப்படுத்தும் பிரிவு.' },
        { title: 'மருந்தகம்',        desc: '24 மணி நேரம், பக்கவாதம் மற்றும் அனைத்து அறுவை சிகிச்சை மற்றும் தீவிர சிகிச்சைத் தேவைகளுக்கும் மருந்துகள் கிடைக்கும்.' },
        { title: 'ஆய்வக சேவைகள்',  desc: '24 மணி நேரம். விரைவான முடிவுகள் மற்றும் நோயறிதலுக்கான மேம்பட்ட நோயியல் மற்றும் கண்டறியும் ஆய்வகம்.' },
      ],
    },
    inpatient: {
      eyebrow: 'தங்குமிடம்',
      heading: 'மேம்பட்ட உள்நோயாளி பராமரிப்பு',
      items: [
        { title: 'வார்டு விருப்பங்கள்',         desc: 'பல்வேறு நோயாளிகளின் விருப்பங்களுக்கு ஏற்ப, பகிரும் அறை, தனி ஏசி வசதியற்ற அறை, மற்றும் தனி ஏசி அறை ஆகியவை கிடைக்கின்றன.' },
        { title: 'சிறப்புத் தீவிர சிகிச்சைப் பிரிவு', desc: 'நரம்பியல் மற்றும் தண்டுவட அறுவை சிகிச்சைக்குப் பிந்தைய கண்காணிப்பு மற்றும் பக்கவாத சிகிச்சைக்காக பொருத்தப்பட்ட 3 படுக்கைகள் கொண்ட சிறப்புத் தீவிர சிகிச்சைப் பிரிவு.' },
        { title: 'பகல்நேர சிகிச்சை முறைகள்',    desc: 'வலி நிவாரண முறைகள் மற்றும் குறைந்தபட்ச ஊடுருவல் சிகிச்சை முறைகளுக்கான பிரத்யேக அறை.' },
      ],
    },
    diagnostics: {
      badgeLabel: 'நோயறிதல் ஆய்வகம்',
      eyebrow: 'நோயறிதல் சேவைகள்',
      heading: 'நரம்பியல் மின்-நோயறிதலில் சிறப்பீடு',
      body: 'எங்கள் நோயறிதல் பிரிவு, நரம்பியல் செயல்பாடுகளை மிகத் துல்லியமாகப் பதிவு செய்யும் அதிநவீன தொழில்நுட்பங்களைக் கொண்டுள்ளது; இது ஒவ்வொரு சிகிச்சைத் திட்டத்திற்கும் ஒரு வலுவான அடித்தளத்தை அமைத்துத் தருகிறது.',
      tests: [
        { label: 'EEG',  desc: 'மூளை மின் வரைபடம்' },
        { label: 'EMG',  desc: 'தசை மின் வரைபடம்' },
        { label: 'NCS',  desc: 'நரம்புச் செயல்பாடு ஆய்வு' },
        { label: 'BERA', desc: 'மூளைத்தண்டுச் செயல்பாடு ஆய்வு' },
        { label: 'VEP',  desc: 'பார்வை தூண்டல் திறன் ஆய்வு' },
        { label: 'AFT',  desc: 'தன்னியக்க செயல்பாட்டு சோதனைகள்' },
      ],
    },
  },
};

// ─── Doctors page translations ────────────────────────────────────────────────
export const doctorsTranslations = {
  en: {
    jayakumar: {
      specialty: 'Neurosurgery',
      name: 'Dr. Jayakumar P',
      quals: 'M.B.B.S., M. Ch. Neurosurgery (Madras Medical College)',
      yearsLabel: 'Years of\nExperience',
      recognitionLabel: 'Recognition',
      awardTitle: 'Best Doctor Award',
      awardPlace: 'Dharmapuri Medical College',
      backgroundTitle: 'Professional Background',
      pastLabel: 'Past Employment',
      pastText: 'Assistant Professor at Institute of Neurosurgery, Madras Medical College',
      expertiseTitle: 'Areas of Expertise',
      expertise: ['Brain Tumour Surgery', 'Spine Surgery', 'Endoscopic Neurosurgery', 'Trauma Surgery', 'Peripheral Nerve Surgery'],
      membershipsTitle: 'Memberships',
      memberships: ['Neurological Society of India', 'Tamil Nadu Association of Neurological Surgeons'],
      awardsTitle: 'Prestigious Awards',
      awards: [
        'Best Doctor Award at Dharmapuri Medical College.',
        'Best Poster Presentation at NSI, INDSPN in 2018.',
      ],
      publicationsTitle: 'Conferences & Publications',
      publications: 'Presented papers in various national and international conferences like TANS, NSICON and INDSPN.',
      opdLabel: 'OPD Availability',
      opdTimes: ['Mon – Sat · 10 AM – 1 PM', 'Mon – Sat · 4 PM – 9 PM'],
      bookBtn: 'Book Consultation',
    },
    prasanna: {
      specialty: 'Pain Medicine & Anesthesiology',
      name: 'Dr. Prasanna Vani V',
      quals: 'M.B.B.S., M.D.( Anaesthesiology, critical care and Pain), C.C.E.P.C., F.I.P.M, E.D.P.M (1).',
      yearsLabel: 'Years of\nExperience',
      academicLabel: 'Academic Merit',
      goldMedal: 'Gold Medalist',
      goldMedalSub: 'MD (Anaesthesiology)',
      pastTitle: 'Past Employment',
      membershipsTitle: 'Memberships',
      memberships: ['Indian Society of Study of Pain', 'European Pain Federation', 'Indian Society of Anesthesiologists', 'Society of Onco Anaesthesia and Perioperative Care'],
      pastItems: [
        { label: 'Senior Resident', place: 'AIIMS, New Delhi' },
        { label: 'Asst. Professor', place: 'Cancer Institute, Adyar' },
      ],
      opdLabel: 'OPD Availability',
      opdTimes: ['Mon – Fri (Morning) · 10 AM – 1 PM', 'Mon – Fri (Evening) · 6:30 PM – 8 PM'],
      bookBtn: 'Book Consultation',
      awardsTitle: 'Prestigious Awards',
      awards: [
        'Gold Medalist at M.D. Anaesthesia examinations conducted by Tamilnadu Dr. M.G.R. Medical University in 2014.',
        'Best research Paper award at Health Research Methodology workshop conducted by St. Johns Medical College in 2017.',
        'Best Paper presentation award given at Krishnagiri Hosur CME in 2024.',
        'Young Speaker award given at National conference of Society of Oncoanaesthesia and Perioperative Care in 2024.',
        'Invited faculty for ISACON national to be a pannelist in newer horizons in perioperative cancer care in 2018.',
        'Expert faculty in Tamilnadu state ISA 2025.',
        'Expert faculty at Pain workshop conducted by Society of Oncoanaesthesia and Perioperative Care in the national conference at Chennai in 2025.',
        'Invited faculty at TN state ISA meet in 2024 at Thanjavur.',
        'Felicitated by Rotary Cancer Research Foundation for a project on prehabilitation in Ovarian Cancer patients in 2025.',
        'Awarded the Annacharya Lokapur Foundation award for the best paper in Clinical research for the Development and pilot study to validate an headache clinical decision support tool by the Indian Society of Study of Pain at the national conference ISSPCON at Hyderabad in 2026.',
      ],
      publicationsTitle: 'Publications',
      publications: [
        { num: '01', authors: 'Prasanna Vani Vanamail, Kalpana Balakrishnan.', title: 'Nitrogen gas embolism as a potential complication of cryosurgery for bone tumours.', journal: 'Anaesthesia Cases/ 2017- 0244/ISSN 2396-8397' },
        { num: '02', authors: 'Sundararajan L, Vanamail Prasanna Vani.', title: 'A comparative study of levobupivacaine and rac-bupivacaine for caudal analgesia in pediatric subumblical surgeries.', journal: 'J. Evolution Med. Dent. Sci. 2018;7(11):0000-0000, DOI:10.14260/jemds/2018/0000' },
        { num: '03', authors: 'Vani Vanamail, P., & Balakrishnan, K.', title: 'Perioperative management of a patient with bleomycin lung injury and on dabigatran treatment for retro-peritoneal lymph node dissection: A case report.', journal: 'Indian Journal of Case Reports, 5(3), 289-291.' },
        { num: '04', authors: 'Vanamail PV, Dash R, Balakrishnan K.', title: 'A retrospective analysis of the presentation, outcomes and determinants of severity of postoperative pneumonia in upper abdominal oncological surgeries.', journal: 'Indian J Respir Care 2020;9:52-7' },
        { num: '05', authors: 'Prasanna Vani Vanamail, Radhika Dash, Kalpana Balakrishnan, & Thendral Edwin. (2021).', title: 'Recurrent pulmonary thromboembolism during radical cystectomy: A case report.', journal: 'Indian Journal of Case Reports, 260-262.' },
        { num: '06', authors: 'Vanamail PV, Balakrishnan K, Prahlad S, Chockalingam P, Dash R, Soundararajan DK.', title: 'Ultrasonographic Assessment of Diaphragmatic Inspiratory Amplitude and Its Association with Postoperative Pulmonary Complications in Upper Abdominal Surgery: A Prospective, Longitudinal, Observational Study.', journal: 'Indian J Crit Care Med 2021; 25 (9):1031-1039.' },
        { num: '07', authors: 'Vanamail, Prasanna Vani; Raj, Pritha; Balakrishnan, Kalpana; Ramasamy, Thendral; Gunasekaran, Praveen Kumar.', title: 'Effect of Perioperative Anaemia and Blood Transfusion on Overall Survival in Major Cancer Surgery: A Retrospective Analysis.', journal: 'Journal of Onco-Anaesthesiology and Perioperative Medicine 3(1):p 81-87, Jan–Apr 2026.' },
      ],
    },
  },
  ta: {
    jayakumar: {
      specialty: 'நரம்பியல் அறுவை சிகிச்சை',
      name: 'டாக்டர் ஜெயக்குமார் P',
      quals: 'M.B.B.S., M. Ch. நரம்பியல் அறுவை சிகிச்சை (மெட்ராஸ் மருத்துவக் கல்லூரி)',
      yearsLabel: 'ஆண்டுகள் பணி அனுபவம்',
      recognitionLabel: 'அங்கீகாரங்கள்',
      awardTitle: 'சிறந்த மருத்துவர் விருது',
      awardPlace: 'தர்மபுரி மருத்துவக் கல்லூரி',
      backgroundTitle: 'தொழில்முறைப் பின்னணி',
      pastLabel: 'முந்தைய பணி அனுபவம்',
      pastText: 'உதவிப் பேராசிரியர், நரம்பியல் அறுவை சிகிச்சை நிறுவனம், மெட்ராஸ் மருத்துவக் கல்லூரி',
      expertiseTitle: 'நிபுணத்துவத் துறைகள்',
      expertise: ['மூளைக் கட்டி அறுவை சிகிச்சை', 'முதுகெலும்பு அறுவை சிகிச்சை', 'எண்டோஸ்கோபிக் நரம்பியல் அறுவை சிகிச்சை', 'விபத்து மற்றும் காயங்களுக்கான அறுவை சிகிச்சை', 'புற நரம்பு அறுவை சிகிச்சை'],
      membershipsTitle: 'உறுப்பினர் அமைப்புகள்',
      memberships: ['இந்திய நரம்பியல் சங்கம் (Neurological Society of India)', 'தமிழ்நாடு நரம்பியல் அறுவை சிகிச்சை நிபுணர்கள் சங்கம்'],
      awardsTitle: 'சிறப்பு விருதுகள்',
      awards: [
        'சிறந்த மருத்துவர் விருது - தர்மபுரி மருத்துவக் கல்லூரி.',
        'சிறந்த சுவரொட்டி விளக்கக்காட்சி விருது (Best Poster Presentation) - NSI, INDSPN (2018).',
      ],
      publicationsTitle: 'கருத்தரங்குகள் மற்றும் வெளியீடுகள்',
      publications: 'TANS, NSICON மற்றும் INDSPN போன்ற பல்வேறு தேசிய மற்றும் சர்வதேச கருத்தரங்குகளில் ஆய்வுக் கட்டுரைகளை சமர்ப்பித்துள்ளார்.',
      opdLabel: 'வெளிநோயாளிகள் பிரிவு (OPD) நேரம்',
      opdTimes: ['திங்கள் – சனி · காலை 10 மணி – மதியம் 1 மணி வரை', 'திங்கள் – சனி · மாலை 4 மணி – இரவு 9 மணி வரை'],
      bookBtn: 'ஆலோசனைக்கு முன்பதிவு செய்யவும்',
    },
    prasanna: {
      specialty: 'வலி மருத்துவம் & மயக்கவியல்',
      name: 'டாக்டர். பிரசன்ன வாணி V',
      quals: 'M.B.B.S., M.D. (மயக்கவியல், தீவிர சிகிச்சை மற்றும் வலி மருத்துவம்), C.C.E.P.C., F.I.P.M, E.D.P.M.',
      yearsLabel: 'ஆண்டு பணி அனுபவம்',
      academicLabel: 'கல்விச் சிறப்பு',
      goldMedal: 'தங்கப் பதக்கம் வென்றவர்',
      goldMedalSub: 'MD (மயக்கவியல்)',
      pastTitle: 'முந்தைய பணி அனுபவம்',
      membershipsTitle: 'உறுப்பினர் அமைப்புகள்',
      memberships: ['இந்திய வலி ஆய்வுச் சங்கம் (Indian Society of Study of Pain)', 'ஐரோப்பிய வலி கூட்டமைப்பு (European Pain Federation)', 'இந்திய மயக்கவியல் நிபுணர்கள் சங்கம் (Indian Society of Anesthesiologists)', 'புற்றுநோய் மயக்கவியல் மற்றும் அறுவை சிகிச்சைக்கு முந்தைய/பிந்தைய பராமரிப்புச் சங்கம் (Society of Onco Anaesthesia and Perioperative Care)'],
      pastItems: [
        { label: 'மருத்துவர்', place: 'AIIMS, புது தில்லி' },
        { label: 'உதவிப் பேராசிரியர்', place: 'புற்றுநோய் நிறுவனம் (Cancer Institute), அடையாறு' },
      ],
      opdLabel: 'வெளிநோயாளிகள் பிரிவு (OPD) நேரம்',
      opdTimes: ['திங்கள் – வெள்ளி (காலை) · 10 AM – 1 PM', 'திங்கள் – வெள்ளி (மாலை) · 6:30 PM – 8 PM'],
      bookBtn: 'ஆலோசனைக்கு முன்பதிவு செய்யவும்',
      awardsTitle: 'சிறப்புமிக்க விருதுகள்',
      awards: [
        '2014-ஆம் ஆண்டு தமிழ்நாடு டாக்டர் எம்.ஜி.ஆர். மருத்துவப் பல்கலைக்கழகம் நடத்திய M.D. (மயக்கவியல்) தேர்வுகளில் தங்கப் பதக்கம் வென்றவர்.',
        '2017-ஆம் ஆண்டு செயின்ட் ஜான்ஸ் மருத்துவக் கல்லூரி நடத்திய \'சுகாதார ஆராய்ச்சி முறையியல்\' பயிலரங்கில் சிறந்த ஆராய்ச்சிக் கட்டுரைக்கான விருது பெற்றவர்.',
        '2024-ஆம் ஆண்டு கிருஷ்ணகிரி - ஓசூர் CME நிகழ்வில் சிறந்த ஆய்வுக் கட்டுரை விளக்கக்காட்சிக்கான விருது பெற்றவர்.',
        '2024-ஆம் ஆண்டு \'புற்றுநோய் மயக்கவியல் மற்றும் அறுவை சிகிச்சைக்கு முந்தைய/பிந்தைய பராமரிப்புச் சங்கத்தின்\' தேசிய மாநாட்டில் \'இளம் பேச்சாளர்\' விருது பெற்றவர்.',
        '2018-ஆம் ஆண்டு நடைபெற்ற ISACON தேசிய மாநாட்டில், \'புற்றுநோய் சிகிச்சையில் அறுவை சிகிச்சைக்கு முந்தைய/பிந்தைய பராமரிப்பின் புதிய எல்லைகள்\' குறித்த குழு விவாதத்தில் பங்கேற்க, சிறப்புப் பேராசிரியராக அழைக்கப்பட்டவர்.',
        '2025-ஆம் ஆண்டு நடைபெற்ற தமிழ்நாடு மாநில ISA மாநாட்டில் சிறப்புப் பேராசிரியராகப் பணியாற்றியவர்.',
        '2025-ஆம் ஆண்டு சென்னையில் நடைபெற்ற தேசிய மாநாட்டில், \'புற்றுநோய் மயக்கவியல் மற்றும் அறுவை சிகிச்சைக்கு முந்தைய/பிந்தைய பராமரிப்புச் சங்கம்\' நடத்திய வலி மருத்துவப் பயிலரங்கில் சிறப்புப் பேராசிரியராகப் பணியாற்றியவர்.',
        '2024-ஆம் ஆண்டு தஞ்சாவூரில் நடைபெற்ற தமிழ்நாடு மாநில ISA மாநாட்டில் சிறப்புப் பேராசிரியராக அழைக்கப்பட்டவர்.',
        '2025-ஆம் ஆண்டில், கருப்பை புற்றுநோய் நோயாளிகளுக்கான \'முன்-புனர்வாழ்வு\' (prehabilitation) குறித்த ஒரு திட்டத்திற்காக, ரோட்டரி புற்றுநோய் ஆராய்ச்சி அறக்கட்டளையால் கௌரவிக்கப்பட்டார்.',
        '2026-ஆம் ஆண்டில் ஹைதராபாத்தில் நடைபெற்ற ISSPCON தேசிய மாநாட்டில், \'இந்திய வலி ஆய்வுச் சங்கத்தால்\' (Indian Society for Study of Pain), தலைவலி தொடர்பான மருத்துவ முடிவெடுக்கும் உதவி கருவியை (clinical decision support tool) சரிபார்ப்பதற்கான மேம்பாடு மற்றும் முன்னோடி ஆய்வு குறித்த சிறந்த மருத்துவ ஆராய்ச்சி ஆய்வுக் கட்டுரையைச் சமர்ப்பித்ததற்காக, \'அன்னாச்சார்யா லோகாபூர் அறக்கட்டளை விருதை\' பெற்றார்.',
      ],
      publicationsTitle: 'மருத்துவ இதழ் வெளியீடுகள்',
      publications: [
        { num: '01', authors: 'பிரசன்ன வாணி வனமெயில், கல்பனா பாலகிருஷ்ணன்.', title: 'எலும்புக்கட்டி அறுவை சிகிச்சையின் (cryosurgery) சாத்தியமான சிக்கலாக நைட்ரஜன் வாயு அடைப்பு (gas embolism) ஏற்படுதல்.', journal: 'Anaesthesia Cases/ 2017- 0244/ISSN 2396-8397' },
        { num: '02', authors: 'சுந்தரராஜன் L, வனமெயில் பிரசன்ன வாணி.', title: 'குழந்தைகளுக்கான தொப்புளுக்குக் கீழான அறுவை சிகிச்சைகளில், காடல் வலி நிவாரணத்திற்காக (caudal analgesia) லெவோபுபிவாகைன் (levobupivacaine) மற்றும் rac-புபிவாகைன் (rac-bupivacaine) ஆகியவற்றை ஒப்பிட்டு மேற்கொள்ளப்பட்ட ஆய்வு.', journal: 'J. Evolution Med. Dent. Sci. 2018;7(11):0000-0000, DOI:10.14260/jemds/2018/0000' },
        { num: '03', authors: 'வாணி வனமெயில் P, பாலகிருஷ்ணன் K.', title: 'ப்ளியோமைசின் (bleomycin) மருந்து சார்ந்த நுரையீரல் பாதிப்பு மற்றும் ரெட்ரோ-பெரிட்டோனியல் நிணநீர் முடிச்சு அகற்றும் அறுவை சிகிச்சைக்காக டபிகட்ரான் (dabigatran) சிகிச்சை பெற்றுவரும் ஒரு நோயாளியின் அறுவை சிகிச்சைக்கு முந்தைய மற்றும் பிந்தைய மேலாண்மை: ஒரு மருத்துவச் சூழல் அறிக்கை (Case Report).', journal: 'Indian Journal of Case Reports, 5(3), 289-291.' },
        { num: '04', authors: 'வனமெயில் PV, டாஷ் R, பாலகிருஷ்ணன் K.', title: 'மேல் வயிற்றுப் பகுதி புற்றுநோய் அறுவை சிகிச்சைகளுக்குப் பிறகு ஏற்படும் நிமோனியாவின் அறிகுறிகள், விளைவுகள் மற்றும் அதன் தீவிரத்தைத் தீர்மானிக்கும் காரணிகள் குறித்த ஒரு பின்னோக்கு ஆய்வு.', journal: 'Indian J Respir Care 2020;9:52-7' },
        { num: '05', authors: 'பிரசன்ன வாணி வனமெயில், ராதிகா டாஷ், கல்பனா பாலகிருஷ்ணன், & தென்றல் எட்வின். (2021).', title: 'முழுமையான சிறுநீர்ப்பை அகற்றும் அறுவை சிகிச்சையின்போது (radical cystectomy) மீண்டும் மீண்டும் ஏற்படும் நுரையீரல் இரத்த உறைவு அடைப்பு (pulmonary thromboembolism): ஒரு மருத்துவச் சூழல் அறிக்கை.', journal: 'Indian Journal of Case Reports, 260-262.' },
        { num: '06', authors: 'வனமெயில் PV, பாலகிருஷ்ணன் K, பிரஹலாத் S, சொக்கலிங்கம் P, டாஷ் R, சௌந்தரராஜன் DK.', title: 'மேல் வயிற்று அறுவை சிகிச்சையில், உதரவிதானத்தின் உள்ளிழுக்கும் அலைவீச்சு குறித்த மீயொலிப் பரிசோதனை மதிப்பீடும், அறுவை சிகிச்சைக்குப் பிந்தைய நுரையீரல் சிக்கல்களுடனான அதன் தொடர்பும்: ஒரு வருங்கால, நீண்டகால, உற்றுநோக்கல் ஆய்வு.', journal: 'Indian J Crit Care Med 2021; 25 (9):1031-1039.' },
        { num: '07', authors: 'வனமெயில், பிரசன்ன வாணி; ராஜ், பிரிதா; பாலகிருஷ்ணன், கல்பனா; ராமசாமி, தென்றல்; குணசேகரன், பிரவீன் குமார்.', title: 'முக்கியப் புற்றுநோய் அறுவை சிகிச்சைகளில், அறுவை சிகிச்சைக்கு முந்தைய மற்றும் பிந்தைய கால இரத்தச்சோகை மற்றும் இரத்த ஏற்றத்தின், ஒட்டுமொத்த உயிர்வாழ்வு விகிதத்தின் மீதான தாக்கம்: ஒரு பின்னோக்கு ஆய்வு.', journal: 'Journal of Onco-Anaesthesiology and Perioperative Medicine 3(1):p 81-87, Jan–Apr 2026.' },
      ],
    },
  },
};

// ─── Emergency page translations ─────────────────────────────────────────────
export const emergencyTranslations = {
  en: {
    hero: {
      badge:    'Emergency Response — Active 24 / 7',
      line1:    'Immediate',
      line2:    'Neurological',
      line3:    'Response.',
      body:     'Every second counts in neuro-trauma. Our rapid response team is on standby around the clock for acute stroke, spinal emergencies, and critical head injuries.',
      callLabel:    'Call Emergency',
      directionsLabel: 'Get Directions',
      locationText: 'Krishnagiri, TN',
      scrollHint: 'Scroll for details',
    },
    strip: [
      { label: 'Main Hospital Line',  value: '04343-239923',         sub: 'Available 24/7' },
      { label: 'Hospital Address',    value: '9/1, West Link Road, Co-operative Colony', sub: 'via K Theatre Road, Near ICICI Bank, Krishnagiri-635001, Tamilnadu' },
      { label: 'Patient Services',    value: 'View All Services',    sub: 'Resources & care information' },
    ],
    channels: {
      eyebrow: 'Reach Out',
      heading: 'All Contact Channels',
      cards: [
        { title: 'Emergency Hotline', detail: '04343-239923',           sub: '24 / 7 — Trauma & Critical' },
        { title: 'Visit Us',          detail: '9/1, West Link Road, Co-operative Colony', sub: 'via K Theatre Road, Near ICICI Bank, Krishnagiri-635001, Tamilnadu' },
        { title: 'Patient Services',  detail: 'Health & Care Resources', sub: 'Insurance, billing & guides' },
        { title: 'Book Appointment',  detail: 'Schedule a Consultation', sub: 'OPD & specialist slots'      },
      ],
    },
    critical: {
      eyebrow: 'Always On',
      heading: '24/7 Critical Services',
      trauma: {
        title: '24h Emergency Trauma Care & ICU',
        body:  'Level-1 neuro-trauma stabilization and advanced intensive care monitoring with dedicated neuro-intensivists on call at all times.',
        tags:  ['Always Open', 'Immediate Triage', 'Neuro-ICU'],
      },
      pharmacy: {
        title: '24-hour Pharmacy',
        body:  'Critical care medications and life-saving neurological drugs always in stock.',
      },
      stroke: {
        title:  'Acute Stroke Care',
        body:   'Rapid thrombolysis for ischemic events within the golden hour.',
        cta:    'Call Now',
      },
      icu: {
        title: 'Specialized Neuro ICU',
        body:  'Our dedicated 3-bed Neuro ICU provides continuous round-the-clock monitoring for critical neurological and post-operative cases — with specialists always present and a response time under 5 minutes.',
        stats: [
          { label: 'Availability',   value: '24 / 7 / 365'  },
          { label: 'ICU Beds',       value: '3 Beds'         },
          { label: 'Specialists',    value: 'Always On-Call' },
          { label: 'Response Time',  value: '< 5 Minutes'   },
        ],
      },
    },
    reach: {
      eyebrow: 'Step-by-Step',
      heading: 'How to Reach Us',
      body:    'Follow these steps to reach our Emergency wing quickly and safely.',
      addressLabel:   'Hospital Address',
      addressLine1:   '9/1, West Link Road, Co-operative Colony,',
      addressLine2:   'via K Theatre Road, Near ICICI Bank,',
      addressLine3:   'Krishnagiri-635001, Tamilnadu',
      mapsBtn:        'Open in Google Maps',
      ambulanceBtn:   'Call for Ambulance',
    },
  },
  ta: {
    hero: {
      badge:    'அவசர மறுமொழி — 24 / 7 இயங்குகிறது',
      line1:    'உடனடி',
      line2:    'நரம்பியல்',
      line3:    'மீட்புச் சேவை.',
      body:     'நரம்பியல் சார்ந்த காயங்களில் ஒவ்வொரு நொடியும் விலைமதிப்பற்றது. கடுமையான பக்கவாதம், முதுகெலும்பு சார்ந்த அவசர நிலைகள் மற்றும் தலையில் ஏற்படும் தீவிர காயங்களுக்குச் சிகிச்சை அளிக்க, எங்கள் விரைவு மீட்புக் குழு 24 மணி நேரமும் தயார் நிலையில் உள்ளது.',
      callLabel:    'அவசர உதவிக்கு அழைக்கவும்',
      directionsLabel: 'வழித்தடத்தை அறிய',
      locationText: 'கிருஷ்ணகிரி, தமிழ்நாடு',
      scrollHint: 'மேலும் விவரங்கள் கீழே',
    },
    strip: [
      { label: 'மருத்துவமனைத் தொலைபேசி எண்', value: '04343-239923',                                                                                                          sub: '24 மணி நேரமும்' },
      { label: 'மருத்துவமனை முகவரி',           value: '9/1, வெஸ்ட் லிங்க் சாலை, கூட்டுறவு நகர், K தியேட்டர் சாலை வழியாக, ICICI வங்கி அருகில், கிருஷ்ணகிரி - 635001',    sub: 'கிருஷ்ணகிரி, TN' },
      { label: 'மருத்துவமனைச் சேவைகள்',        value: 'அனைத்துச் சேவைகளையும் காண்க',                                                                                        sub: 'சிறப்பம்சங்கள் மற்றும் சிகிச்சைத் தகவல்கள்' },
    ],
    channels: {
      eyebrow: 'தொடர்புகொள்ளுங்கள்',
      heading: 'அனைத்துத் தொடர்பு வழிகள்',
      cards: [
        { title: 'அவசர எண்',         detail: '04343-239923',                                                                                                                 sub: '24 மணி நேரமும்'                              },
        { title: 'முகவரி',            detail: '9/1, வெஸ்ட் லிங்க் சாலை, கூட்டுறவு நகர், K தியேட்டர் சாலை வழியாக, ICICI வங்கி அருகில், கிருஷ்ணகிரி - 635001',             sub: 'கிருஷ்ணகிரி, TN'                             },
        { title: 'நோயாளர் சேவை',     detail: 'சுகாதார & சிகிச்சை வளங்கள்',                                                                                                  sub: 'காப்பீடு, பில்லிங் & வழிகாட்டிகள்'           },
        { title: 'சந்திப்பு பதிவு',   detail: 'ஆலோசனை திட்டமிடவும்',                                                                                                        sub: 'OPD & நிபுணர் நேரங்கள்'                      },
      ],
    },
    critical: {
      eyebrow: 'எப்போதும் இயங்கும்',
      heading: '24/7 அவசர சேவைகள்',
      trauma: {
        title: '24 மணி நேர அவசர விபத்து சிகிச்சை மற்றும் தீவிர சிகிச்சைப் பிரிவு (ICU)',
        body:  'நிலை-1 நரம்பியல் காய நிலைப்படுத்தல் மற்றும் மேம்பட்ட தீவிர சிகிச்சைக் கண்காணிப்பு, இதற்காக அர்ப்பணிக்கப்பட்ட நரம்பியல்-தீவிர சிகிச்சையாளர்கள் எல்லா நேரங்களிலும் அழைப்பின் பேரில் இருப்பார்கள்.',
        tags:  ['எப்போதும் திறந்திருக்கும்', 'உடனடி சிகிச்சை', 'நரம்பியல்-தீவிர சிகிச்சைப் பிரிவு (Neuro-ICU)'],
      },
      pharmacy: {
        title: '24 மணி நேர மருந்தகம்',
        body:  'அவசர சிகிச்சைக்கான மருந்துகள் மற்றும் உயிர்காக்கும் நரம்பியல் மருந்துகள் எப்போதும் கையிருப்பில் இருக்கும்.',
      },
      stroke: {
        title: 'திடீர் பக்கவாத சிகிச்சை',
        body:  'மூளைக்கு ஏற்படும் இரத்த ஓட்டத் தடை நிகழ்வுகளுக்கு, \'பொன்னான ஒரு மணி நேரத்திற்குள்\' (Golden Hour) விரைவான இரத்த உறைவு கரைப்பு சிகிச்சை.',
        cta:   'இப்போதே அழையுங்கள்',
      },
      icu: {
        title: 'சிறப்பு நரம்பியல் தீவிர சிகிச்சைப் பிரிவு (Neuro ICU)',
        body:  'எங்களின் பிரத்யேக 3 படுக்கைகள் கொண்ட நரம்பியல் தீவிர சிகிச்சைப் பிரிவு, தீவிர நரம்பியல் மற்றும் அறுவை சிகிச்சைக்குப் பிந்தைய நிலைகளில் உள்ள நோயாளிகளுக்கு, நாள் முழுவதும் 24 மணி நேரமும் தொடர் கண்காணிப்பை வழங்குகிறது — இங்கு சிறப்பு மருத்துவர்கள் எப்போதும் உடனிருந்து, 5 நிமிடங்களுக்குள் விரைந்து சிகிச்சை அளிக்கும் தயார்நிலையுடன் உள்ளனர்.',
        stats: [
          { label: 'கால அட்டவணை',       value: '24 / 7 / 365'            },
          { label: 'படுக்கைகள்',          value: '3 படுக்கைகள்'            },
          { label: 'சிறப்பு மருத்துவர்கள்', value: 'எப்போதும் தயார்நிலையில்' },
          { label: 'துரித சேவை நேரம்',   value: '< 5 நிமிடங்கள்'          },
        ],
      },
    },
    reach: {
      eyebrow: 'படி படியாக',
      heading: 'எங்களை அணுகுவது எப்படி?',
      body:    'எங்கள் அவசர சிகிச்சைப் பிரிவை விரைவாகவும் பாதுகாப்பாகவும் சென்றடைய, பின்வரும் வழிமுறைகளைப் பின்பற்றவும்.',
      addressLabel:   'மருத்துவமனை முகவரி',
      addressLine1:   '9/1, வெஸ்ட் லிங்க் சாலை, கூட்டுறவு நகர்,',
      addressLine2:   'K தியேட்டர் சாலை வழியாக, ICICI வங்கி அருகில்,',
      addressLine3:   'கிருஷ்ணகிரி-635001, தமிழ்நாடு',
      mapsBtn:        'Google Maps-இல் திறக்கவும்',
      ambulanceBtn:   'ஆம்புலன்ஸுக்காக அழைக்கவும்',
    },
  },
};

// ─── Contact page translations ───────────────────────────────────────────────
export const contactTranslations = {
  en: {
    hero: {
      eyebrow: 'Direct Access',
      heading: 'Get in Touch',
      body: 'Expert Neuro Spine care and advanced pain management. Reach out to our clinical team for consultations or emergency assistance.',
      specialtiesLabel: 'Our Specialties',
      specialties: ['Neuro Surgery', 'Spine Surgery', 'Chronic Pain', 'Physiotherapy', 'Emergency Care'],
      accreditationsLabel: 'Accreditations',
      accreditations: [
        { icon: 'verified',          label: 'NABH Accredited' },
        { icon: 'workspace_premium', label: 'ISO 9001:2015' },
        { icon: 'emergency',         label: '24 / 7 Emergency' },
      ],
    },
    cards: {
      locationTitle: 'Location',
      locationAddress: '9/1, West Link Road, Co-operative Colony, via K Theatre Road, Near ICICI Bank, Krishnagiri – 635001, Tamil Nadu',
      phoneTitle: 'Direct Lines',
      phoneSub: 'Emergency: 24 / 7',
      digitalTitle: 'Digital Support',
      quickLinksTitle: 'Quick Links',
      patientServicesLabel: 'Patient Services',
    },
    hours: {
      heading: 'OPD Timings',
      sub: 'Consultation hours by department',
      depts: [
        {
          name: 'Neurosurgery', icon: 'neurology',
          slots: [
            { days: 'Mon – Sat', time: '10 AM – 1 PM' },
            { days: 'Mon – Sat', time: '4 PM – 9 PM'  },
            { days: 'Sunday',    time: '10 AM – 1 PM'  },
          ],
        },
        {
          name: 'Pain Medicine', icon: 'medication',
          slots: [
            { days: 'Mon – Fri', time: '10 AM – 1 PM'  },
            { days: 'Mon – Fri', time: '6:30 PM – 8 PM' },
          ],
        },
      ],
      rows: [
        { label: 'Emergency', time: '24 Hrs / 7 Days', icon: 'emergency',      sub: 'Always open',     highlight: true  },
        { label: 'Surgery',   time: 'By Appointment',  icon: 'calendar_month', sub: 'Pre-booked only', highlight: false },
      ],
    },
  },
  ta: {
    hero: {
      eyebrow: 'நேரடி தொடர்பு',
      heading: 'தொடர்பு கொள்ளுங்கள்',
      body: 'சிறப்பு நரம்பியல் மற்றும் முதுகெலும்பு சிகிச்சை, மேம்பட்ட வலி நிவாரணம். ஆலோசனை அல்லது அவசர உதவிக்கு எங்கள் மருத்துவக் குழுவைத் தொடர்புகொள்ளுங்கள்.',
      specialtiesLabel: 'எங்கள் சிறப்புத் துறைகள்',
      specialties: ['நரம்பியல் அறுவை சிகிச்சை', 'முதுகெலும்பு அறுவை சிகிச்சை', 'நீண்டகால வலி சிகிச்சை', 'இயன்முறை மருத்துவம்', 'அவசர சிகிச்சை'],
      accreditationsLabel: 'அங்கீகாரங்கள்',
      accreditations: [
        { icon: 'verified',          label: 'NABH அங்கீகரிக்கப்பட்டது' },
        { icon: 'workspace_premium', label: 'ISO 9001:2015' },
        { icon: 'emergency',         label: '24 / 7 அவசர சேவை' },
      ],
    },
    cards: {
      locationTitle: 'இடம்',
      locationAddress: '9/1, வெஸ்ட் லிங்க் ரோடு, கோ-ஆபரேட்டிவ் காலனி, K தியேட்டர் ரோடு வழியாக, ICICI வங்கி அருகில், கிருஷ்ணகிரி – 635001, தமிழ்நாடு',
      phoneTitle: 'நேரடி தொலைபேசி',
      phoneSub: 'அவசர சேவை: 24 / 7',
      digitalTitle: 'டிஜிட்டல் ஆதரவு',
      quickLinksTitle: 'விரைவு இணைப்புகள்',
      patientServicesLabel: 'நோயாளர் சேவை',
    },
    hours: {
      heading: 'OPD நேரங்கள்',
      sub: 'துறை வாரியான ஆலோசனை நேரங்கள்',
      depts: [
        {
          name: 'நரம்பியல் அறுவை', icon: 'neurology',
          slots: [
            { days: 'திங்கள் – சனி', time: 'காலை 10 – பகல் 1'  },
            { days: 'திங்கள் – சனி', time: 'மாலை 4 – இரவு 9'   },
            { days: 'ஞாயிறு',        time: 'காலை 10 – பகல் 1'  },
          ],
        },
        {
          name: 'வலி மருத்துவம்', icon: 'medication',
          slots: [
            { days: 'திங்கள் – வெள்ளி', time: 'காலை 10 – பகல் 1'    },
            { days: 'திங்கள் – வெள்ளி', time: 'மாலை 6:30 – இரவு 8'  },
          ],
        },
      ],
      rows: [
        { label: 'அவசர சிகிச்சை', time: '24 மணி / 7 நாள்',  icon: 'emergency',      sub: 'எப்போதும் திறந்தது', highlight: true  },
        { label: 'அறுவை சிகிச்சை', time: 'முன்பதிவு மட்டும்', icon: 'calendar_month', sub: 'முன்பதிவு அவசியம்',  highlight: false },
      ],
    },
  },
};

// ─── Home page translations ───────────────────────────────────────────────────
export const homeTranslations = {
  en: {
    hero: {
      eyebrow: 'JP Neuro Spine Hospital & Pain Management Centre',
      visionLabel: 'Our Vision',
      vision: 'Restoring lives through excellence in Neuro Spine and Pain care',
      missionLabel: 'Our Mission',
      mission: 'To deliver ethical, evidence-based, and patient-centric Neuro Spine and pain management services through clinical excellence, advanced technology, and compassionate care.',
      cta: 'Call to Book Appointment',
      cta2: 'Our Services',
      quote: '"Excellence in every incision, compassion in every interaction."',
      facilities: [
         { icon: 'neurology',        label: 'Brain & Spine Surgery' },
         { icon: 'medical_services', label: 'Pain Management' },
        { icon: 'emergency',        label: 'Critical Care' },
        { icon: 'self_improvement', label: 'Physiotherapy' },
      ],
      valuesLabel: 'Core Values',
      values: [
        { icon: 'workspace_premium', title: 'Clinical Excellence', body: 'We uphold the highest standards of medical practice through evidence-based treatment, continuous learning, and outcome-driven care.' },
        { icon: 'volunteer_activism', title: 'Compassion & Dignity', body: 'We treat every patient with empathy, respect, and sensitivity, recognizing the physical and emotional impact of neuro and pain disorders.' },
        { icon: 'verified_user', title: 'Integrity & Ethics', body: 'We are committed to transparent communication, ethical decision-making, and responsible medical practice at all times.' },
        { icon: 'person_check', title: 'Patient-Centric Care', body: 'We prioritize individualized treatment plans, informed consent, and collaborative decision-making to ensure the best possible outcomes.' },
        { icon: 'lightbulb', title: 'Innovation & Continuous Improvement', body: 'We embrace advanced technology, evolving clinical protocols, and structured quality systems to continuously enhance patient safety and recovery.' },
        { icon: 'groups', title: 'Teamwork & Collaboration', body: 'We foster a culture of interdisciplinary teamwork, mutual respect, and unified purpose to deliver seamless, coordinated care for every patient.' },
      ],
    },
    highlights: [
      {
        icon: 'schedule',
        title: '24/7 Services',
        desc: 'Emergency neurosurgical support and critical care available round the clock for urgent interventions.',
      },
      {
        icon: 'psychology',
        title: 'Expert Care',
        desc: 'Led by senior consultants with decades of experience in complex spine surgeries and neuro-rehabilitation.',
      },
      {
        icon: 'volunteer_activism',
        title: 'Patient-Centric',
        desc: 'Personalized recovery pathways designed around your comfort, lifestyle, and long-term wellness.',
      },
    ],
    specialties: {
      eyebrow: 'Our Departments',
      heading: 'World-Class Specializations',
      body: 'Our core pillars of excellence provide a seamless transition from acute surgical intervention to specialized pain recovery.',
      neuro: {
        title: 'Neurosurgery',
        body: 'Specialized in micro-discectomy, brain tumor excisions, and complex spinal instrumentations using state-of-the-art neuro-navigation.',
        list: ['Spine Trauma Care', 'Brain & Nerve Disorders', 'Pediatric Neurosurgery'],
        cta: 'Explore Department',
      },
      pain: {
        title: 'Pain Medicine',
        body: 'Multidisciplinary approach to chronic pain, utilizing interventional procedures, physiotherapy, and pharmacological management protocols.',
        list: ['Interventional Pain Care', 'Regenerative Therapies', 'Physical Rehabilitation'],
        cta: 'Explore Department',
      },
    },
    testimonials: {
      heading: 'Healing Stories',
      sub: 'Voices of recovery and gratitude from our patients.',
      items: [
        {
          initials: 'P',
          name: 'Prabha',
          role: 'Spinal Surgery Patient',
          quote: 'After years of debilitating back pain, the team at JP Neuro Spine Hospital and Pain Management Centre gave me my life back. The precision of the surgery and the care during recovery was world-class.',
        },
        {
          initials: 'S',
          name: 'Shinu',
          role: 'Chronic Pain Management',
          quote: 'The doctors here are not just experts; they are compassionate listeners. They explained my condition in simple terms and guided me through pain management with immense patience.',
        },
        {
          initials: 'JV',
          name: 'J Vijay',
          role: 'Family Member',
          quote: "Emergency neuro-care saved my brother's life. The 24/7 availability and immediate response time were critical factors. We are forever grateful.",
        },
      ],
    },
    accreditation: {
      badge: 'CEA LICENSED',
      badgeSub: 'HOSPITAL REGISTRATION',
      heading: 'Recognized Clinical Excellence',
      body: 'JP Neuro Spine Hospital and Pain Management Centre is a Clinical Establishment Act (CEA) licensed hospital. This license is our commitment to maintaining the highest standards of medical ethics, safety protocols, and patient care infrastructure.',
      badges: ['Surgical Safety Protocol', 'Infection Control Excellence'],
    },
  },

  ta: {
    hero: {
      eyebrow: 'JP Neuro Spine Hospital and Pain Management Centre',
      visionLabel: 'எங்கள் நோக்கு',
      vision: 'நரம்பு, முதுகுத்தண்டு மற்றும் வலி சிகிச்சையில் சிறப்பின் மூலம் வாழ்வை மீட்டெடுத்தல்.',
      missionLabel: 'எங்கள் குறிக்கோள்',
      mission: 'மருத்துவச் சிறப்பு, மேம்பட்ட தொழில்நுட்பம் மற்றும் கருணைமிக்க கவனிப்பு ஆகியவற்றின் வாயிலாக, நெறிசார்ந்த, அறிவியல் சான்றுகள் சார்ந்த மற்றும் நோயாளி மையப்படுத்திய நரம்பு, முதுகுத்தண்டு மற்றும் வலி நிவாரணச் சேவைகளை வழங்குதல்.',
      cta: 'மருத்துவர் சந்திப்பை முன்பதிவு செய்ய அழைக்கவும்',
      cta2: 'எங்கள் சேவைகள்',
      quote: '"ஒவ்வொரு அறுவையிலும் சிறப்பு, ஒவ்வொரு தொடர்பிலும் இரக்கம்."',
      facilities: [
        { icon: 'neurology',        label: 'மூளை மற்றும் தண்டுவட அறுவை சிகிச்சை' },
        { icon: 'medical_services', label: 'வலி நிவாரணம்' },
        { icon: 'emergency',        label: 'தீவிர சிகிச்சைப் பிரிவு' },
        { icon: 'self_improvement', label: 'பிசியோதெரபி' },
      ],
      valuesLabel: 'முக்கிய மதிப்பீடுகள்',
      values: [
        { icon: 'workspace_premium', title: 'மருத்துவச் சிறப்பு', body: 'சான்றுகளின் அடிப்படையில் அமைந்த சிகிச்சை, தொடர் புதுப்பித்தல் மற்றும் விளைவுகளை மையமாகக் கொண்ட பராமரிப்பு ஆகியவற்றின் மூலம், மருத்துவ நடைமுறையின் மிக உயர்ந்த தரநிலைகளை நாங்கள் நிலைநிறுத்துகிறோம்.' },
        { icon: 'volunteer_activism', title: 'கருணையும் கண்ணியமும்', body: 'நரம்பியல் மற்றும் வலி சார்ந்த பாதிப்புகளின் உடல்ரீதியான மற்றும் உணர்வுரீதியான தாக்கங்களை உணர்ந்து, ஒவ்வொரு நோயாளியையும் நாங்கள் பரிவு, மரியாதை மற்றும் உணர்வுபூர்வமான அக்கறையுடன் நடத்துகிறோம்.' },
        { icon: 'verified_user', title: 'நேர்மையும் அறநெறியும்', body: 'நாங்கள் எப்போதும் வெளிப்படையான தகவல் தொடர்பு, அறநெறி சார்ந்த முடிவெடுத்தல் மற்றும் பொறுப்புமிக்க மருத்துவ நடைமுறை ஆகியவற்றில் உறுதியுடன் உள்ளோம்.' },
        { icon: 'person_check', title: 'நோயாளி மையப் பராமரிப்பு', body: 'சிறந்த குணமடைவதை உறுதிசெய்ய, தனிப்பயனாக்கப்பட்ட சிகிச்சைத் திட்டங்கள், தகவலறிந்த ஒப்புதல் மற்றும் கூட்டு முடிவெடுத்தல் ஆகியவற்றுக்கு நாங்கள் முன்னுரிமை அளிக்கிறோம்.' },
        { icon: 'lightbulb', title: 'புதுமை மற்றும் தொடர் மேம்பாடு', body: 'நோயாளிகளின் பாதுகாப்பு மற்றும் குணமடைதலைத் தொடர்ந்து மேம்படுத்த, நாங்கள் மேம்பட்ட தொழில்நுட்பம், வளர்ந்து வரும் மருத்துவ நெறிமுறைகள் மற்றும் கட்டமைக்கப்பட்ட தர அமைப்புகளை ஏற்றுக்கொள்கிறோம்.' },
        { icon: 'groups', title: 'கூட்டுழைப்பு மற்றும் ஒருங்கிணைப்பு', body: 'ஒவ்வொரு நோயாளிக்கும் தடையற்ற, ஒருங்கிணைந்த சிகிச்சையை வழங்குவதற்காக, பல்வேறு துறைசார் கூட்டுழைப்பு, பரஸ்பர மரியாதை மற்றும் ஒருமித்த நோக்கம் ஆகியவற்றை உள்ளடக்கிய ஒரு கலாச்சாரத்தை நாங்கள் வளர்க்கிறோம்.' },
      ],
    },
    highlights: [
      {
        icon: 'schedule',
        title: '24/7 சேவைகள்',
        desc: 'அவசரகால நரம்பியல் அறுவை சிகிச்சை மற்றும் தீவிர சிகிச்சை ஆகியவை அவசர தலையீடுகளுக்கு எப்போதும் கிடைக்கும்.',
      },
      {
        icon: 'psychology',
        title: 'நிபுணர் சிகிச்சை',
        desc: 'சிக்கலான முதுகெலும்பு அறுவை சிகிச்சை மற்றும் நரம்பியல் மறுவாழ்வில் பல வருட அனுபவம் கொண்ட மூத்த ஆலோசகர்களால் வழிநடத்தப்படுகிறது.',
      },
      {
        icon: 'volunteer_activism',
        title: 'நோயாளி மையமான',
        desc: 'உங்கள் வசதி, வாழ்க்கை முறை மற்றும் நீண்டகால ஆரோக்கியத்தை மனதில் கொண்டு தனிப்பயனாக்கப்பட்ட மீட்பு திட்டங்கள்.',
      },
    ],
    specialties: {
      eyebrow: 'எங்கள் துறைகள்',
      heading: 'உலகத்தரம் வாய்ந்த சிறப்புப் பிரிவுகள்',
      body: 'எங்களின் சிறப்பின் அடிப்படைத் தூண்கள், அறுவை சிகிச்சை முதல் சிறப்பு வலி நிவாரண சிகிச்சை வரை தடையற்ற பராமரிப்பை வழங்குகின்றன.',
      neuro: {
        title: 'நரம்பியல் அறுவை சிகிச்சை',
        body: 'மிக நவீன நரம்பியல் வழிநடத்தல் (Neuro-navigation) தொழில்நுட்பத்தைப் பயன்படுத்தி, நுண்-வட்டு நீக்கம் (Micro-discectomy), மூளைக் கட்டி அகற்றுதல் மற்றும் சிக்கலான முதுகெலும்பு சார்ந்த அறுவை சிகிச்சைகளை மேற்கொள்வதில் நிபுணத்துவம் பெற்றது.',
        list: ['முதுகெலும்பு காய சிகிச்சை', 'மூளை மற்றும் நரம்பு அறுவை சிகிச்சை', 'குழந்தைகளுக்கான நரம்பியல் அறுவை சிகிச்சை'],
        cta: 'துறையைப் பற்றி அறிய',
      },
      pain: {
        title: 'வலி மருத்துவம்',
        body: 'நாள்பட்ட வலிக்கு, வலி நிவாரணச் செயல்முறைகள் மற்றும் மருந்தியல் சிகிச்சை நெறிமுறைகளைப் பயன்படுத்தும் பல்துறைசார் அணுகுமுறை.',
        list: ['வலி நிவாரணச் செயல்முறைகள்', 'மீளுருவாக்கச் சிகிச்சைகள்', 'புனர்வாழ்வு உடற்பயிற்சிகள்'],
        cta: 'துறையை ஆராயுங்கள்',
      },
    },
    testimonials: {
      heading: 'குணமடைந்த அனுபவங்கள்',
      sub: 'எங்கள் நோயாளிகளிடமிருந்து குணமடைந்த மற்றும் நன்றியின் குரல்கள்',
      items: [
        {
          initials: 'P',
          name: 'பிரபா',
          role: 'முதுகெலும்பு அறுவை சிகிச்சை நோயாளி',
          quote: 'பல ஆண்டுகளாக என்னை வாட்டி வதைத்த முதுகு வலிக்குப் பிறகு, JP Neuro Spine Hospital மற்றும் Pain Management Centre-இன் மருத்துவக் குழுவினர் எனது வாழ்க்கையையே எனக்குத் திரும்பப் பெற்றுத் தந்தனர். அறுவை சிகிச்சையின் துல்லியமும், குணமடையும் காலத்தில் அவர்கள் அளித்த கவனிப்பும் உலகத்தரம் வாய்ந்தவையாக இருந்தன.',
        },
        {
          initials: 'S',
          name: 'ஷினு',
          role: 'வலி நிவாரணம்',
          quote: 'இங்குள்ள மருத்துவர்கள் வெறும் நிபுணர்கள் மட்டுமல்ல; அவர்கள் பரிவுடன் செவிசாய்ப்பவர்கள். அவர்கள் எனது நிலையை எளிய வார்த்தைகளில் விளக்கி, மிகுந்த பொறுமையுடன் வலி நிவாரணத்தில் எனக்கு வழிகாட்டினார்கள்.',
        },
        {
          initials: 'JV',
          name: 'J விஜய்',
          role: 'குடும்ப உறுப்பினர்',
          quote: 'அவசரகால நரம்பியல் சிகிச்சையே என் சகோதரரின் உயிரைக் காப்பாற்றியது. 24 மணி நேரமும் கிடைக்கும் வசதியும், உடனடிச் செயல்பாடுமே இதில் மிக முக்கியக் காரணிகளாக அமைந்தன.',
        },
      ],
    },
    accreditation: {
      badge: 'CEA உரிமம்',
      badgeSub: 'மருத்துவமனை பதிவு',
      heading: 'அங்கீகரிக்கப்பட்ட மருத்துவச் சிறப்பு',
      body: 'JP Neuro Spine Hospital and Pain Management Centre ஆனது, மருத்துவ நிறுவனங்கள் சட்டத்தின் (CEA) கீழ் உரிமம் பெற்ற ஒரு மருத்துவமனையாகும். மருத்துவ நெறிமுறைகள், பாதுகாப்பு நெறிமுறைகள் மற்றும் நோயாளி பராமரிப்புக்கான உள்கட்டமைப்பு ஆகியவற்றில் மிக உயர்ந்த தரநிலைகளைப் பேணுவதில் நாங்கள் கொண்டுள்ள அர்ப்பணிப்பையே இந்த உரிமம் பிரதிபலிக்கிறது.',
      badges: ['அறுவை சிகிச்சை பாதுகாப்பு நெறிமுறை', 'தொற்று கட்டுப்பாடு சிறப்பு'],
    },
  },
};

// ─── Blog Listing page translations ──────────────────────────────────────────
export const blogListingTranslations = {
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Health Articles',
    heroBadge: 'Expert Medical Insights',
    heroHeading1: 'Health & Wellness',
    heroHeading2: 'Knowledge Centre',
    heroBody: 'Trusted insights on neurology, spine care, and pain management — written by our specialists to help you make informed health decisions.',
    articleSingular: 'article',
    articlePlural: 'articles',
    published: 'published',
    updatedRegularly: 'Updated regularly',
    fromSpecialists: 'From Our Specialists',
    latestArticles: 'Latest Articles',
    allArticlesLabel: 'All Articles',
    featuredBadge: 'Featured',
    healthArticleBadge: 'Health Article',
    readFullArticle: 'Read full article',
    readLink: 'Read',
    noArticlesHeading: 'No articles yet',
    noArticlesBody: 'Our first article is on its way. Check back soon!',
    errorMsg: 'Failed to load articles. Please refresh the page.',
    ctaBadge: 'Specialist Care Available',
    ctaHeading: 'Have a health concern?',
    ctaBody: 'Our specialists are here to help. Book a consultation and get expert guidance tailored to your needs.',
    ctaContact: 'Contact Us',
    minRead: 'min read',
  },
  ta: {
    breadcrumbHome: 'முகப்பு',
    breadcrumbCurrent: 'சுகாதார கட்டுரைகள்',
    heroBadge: 'நிபுணர் மருத்துவ அறிவு',
    heroHeading1: 'சுகாதாரம் & நலன்',
    heroHeading2: 'அறிவு மையம்',
    heroBody: 'நரம்பியல், முதுகெலும்பு சிகிச்சை மற்றும் வலி மேலாண்மை பற்றிய நம்பகமான தகவல்கள் — நீங்கள் சரியான சுகாதார முடிவுகள் எடுக்க உதவ எங்கள் நிபுணர்களால் எழுதப்பட்டது.',
    articleSingular: 'கட்டுரை',
    articlePlural: 'கட்டுரைகள்',
    published: 'வெளியிடப்பட்டது',
    updatedRegularly: 'தொடர்ந்து புதுப்பிக்கப்படுகிறது',
    fromSpecialists: 'எங்கள் நிபுணர்களிடமிருந்து',
    latestArticles: 'சமீபத்திய கட்டுரைகள்',
    allArticlesLabel: 'அனைத்து கட்டுரைகள்',
    featuredBadge: 'சிறப்பு',
    healthArticleBadge: 'சுகாதார கட்டுரை',
    readFullArticle: 'முழு கட்டுரையை படியுங்கள்',
    readLink: 'படியுங்கள்',
    noArticlesHeading: 'இன்னும் கட்டுரைகள் இல்லை',
    noArticlesBody: 'எங்கள் முதல் கட்டுரை வரும் வழியில் உள்ளது. விரைவில் சரிபாருங்கள்!',
    errorMsg: 'கட்டுரைகளை ஏற்றுவதில் தோல்வி. பக்கத்தை புதுப்பிக்கவும்.',
    ctaBadge: 'நிபுணர் சிகிச்சை கிடைக்கிறது',
    ctaHeading: 'உடல் நல கவலை உள்ளதா?',
    ctaBody: 'எங்கள் நிபுணர்கள் உதவ இங்கே இருக்கிறார்கள். ஒரு ஆலோசனை பதிவு செய்து உங்கள் தேவைகளுக்கு ஏற்ற நிபுணர் வழிகாட்டலைப் பெறுங்கள்.',
    ctaContact: 'தொடர்பு கொள்ளுங்கள்',
    minRead: 'நிமிட வாசிப்பு',
  },
};

// ─── Blog Detail page translations ───────────────────────────────────────────
export const blogDetailTranslations = {
  en: {
    allArticles: 'All articles',
    healthArticleBadge: 'Health Article',
    notFoundHeading: 'Article Not Found',
    notFoundBody: 'This article may have been moved or does not exist.',
    backToAllArticles: 'Back to all articles',
    errorMsg: 'Failed to load article. Please try again.',
    bookConsultation: 'Book a Consultation',
    writtenBy: 'Written by',
    minRead: 'min read',
    hospitalBio: 'JP Neuro Spine Hospital and Pain Management Centre — Expert healthcare for neurology & spine conditions.',
    needConsultation: 'Need a Consultation?',
    consultationBody: 'Our specialists are available for expert guidance on neurology and spine conditions.',
    callNow: 'Call Now',
    emergencyCare: 'Emergency Care',
    emergencyBody: '24/7 emergency neurosurgical support available at JP Neuro Spine Hospital and Pain Management Centre.',
    emergency247: 'Emergency 24/7',
    allArticlesBtn: 'All Articles',
  },
  ta: {
    allArticles: 'அனைத்து கட்டுரைகள்',
    healthArticleBadge: 'சுகாதார கட்டுரை',
    notFoundHeading: 'கட்டுரை கிடைக்கவில்லை',
    notFoundBody: 'இந்த கட்டுரை நகர்த்தப்பட்டிருக்கலாம் அல்லது இல்லாமல் இருக்கலாம்.',
    backToAllArticles: 'அனைத்து கட்டுரைகளுக்கு திரும்பு',
    errorMsg: 'கட்டுரையை ஏற்றுவதில் தோல்வி. மீண்டும் முயற்சிக்கவும்.',
    bookConsultation: 'ஆலோசனை பதிவு',
    writtenBy: 'எழுதியவர்',
    minRead: 'நிமிட வாசிப்பு',
    hospitalBio: 'JP Neuro Spine Hospital and Pain Management Centre — நரம்பியல் & முதுகெலும்பு நிலைமைகளுக்கான நிபுணர் சுகாதாரம்.',
    needConsultation: 'ஆலோசனை தேவையா?',
    consultationBody: 'நரம்பியல் மற்றும் முதுகெலும்பு நிலைமைகளில் நிபுணர் வழிகாட்டலுக்கு எங்கள் நிபுணர்கள் கிடைக்கிறார்கள்.',
    callNow: 'இப்போது அழையுங்கள்',
    emergencyCare: 'அவசர சிகிச்சை',
    emergencyBody: 'JP Neuro Spine Hospital and Pain Management Centre-இல் 24/7 அவசர நரம்பியல் அறுவை சிகிச்சை ஆதரவு கிடைக்கிறது.',
    emergency247: 'அவசரநிலை 24/7',
    allArticlesBtn: 'அனைத்து கட்டுரைகள்',
  },
};

// ─── Privacy Policy page translations ────────────────────────────────────────
export const privacyPolicyTranslations = {
  en: {
    hero: {
      eyebrow: 'Legal · Compliance',
      heading: 'Privacy Policy',
      body: 'JP Neuro Spine Hospital & Pain Management Centre is committed to protecting the privacy and confidentiality of all patients, visitors, and website users.',
      effectiveLabel: 'Effective Date',
      effectiveDate: '1 January 2026',
      updatedLabel: 'Last Updated',
      updatedDate: '1 April 2026',
    },
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Privacy Policy',
    sidebarNotice: 'By using our services you agree to the practices described in this policy.',
    tocLabel: 'Contents',
    quickContact: 'Quick Contact',
    contactUsBtn: 'Contact Us →',
    backHome: 'Back to Home',
    sections: [
      {
        id: 'information-collected',
        title: '1. Information We Collect',
        content: [
          { subtitle: 'Personal Identification Information', text: 'We may collect personal information such as your full name, date of birth, gender, address, phone number, and email address when you register as a patient, book an appointment, or contact us through our website or in person.' },
          { subtitle: 'Medical & Health Information', text: 'In the course of providing medical services, we collect health-related information including medical history, diagnoses, treatment records, prescriptions, lab results, imaging reports, and any other clinical data necessary for your care.' },
          { subtitle: 'Technical & Usage Data', text: 'When you visit our website, we may automatically collect information such as your IP address, browser type, pages visited, time spent on pages, and referring URLs for the purpose of improving our online services.' },
        ],
      },
      {
        id: 'how-we-use',
        title: '2. How We Use Your Information',
        content: [
          { subtitle: 'Providing Medical Care', text: 'Your personal and medical information is primarily used to deliver healthcare services, coordinate treatment, manage appointments, issue prescriptions, and communicate test results or follow-up instructions.' },
          { subtitle: 'Administrative Purposes', text: 'We use your information for billing, insurance processing, appointment scheduling, and maintaining accurate medical records as required under applicable Indian healthcare regulations.' },
          { subtitle: 'Communication', text: 'We may contact you via phone, SMS, or email to confirm appointments, share health advisories, or provide important updates related to your care at JP Neuro Spine Hospital and Pain Management Centre.' },
          { subtitle: 'Legal & Regulatory Compliance', text: 'We retain and process data as required by the Clinical Establishments Act (CEA), the Information Technology Act, 2000, and any applicable guidelines issued by the Indian Medical Council or relevant state authorities.' },
        ],
      },
      {
        id: 'sharing',
        title: '3. Sharing of Information',
        content: [
          { subtitle: 'Within the Hospital', text: 'Your information is accessible only to authorised medical and administrative staff directly involved in your care. Access is role-based and strictly limited to what is necessary.' },
          { subtitle: 'Referrals & External Providers', text: 'With your consent, we may share relevant medical records with referred specialists, diagnostic laboratories, or other healthcare facilities to ensure continuity of care.' },
          { subtitle: 'Legal Obligations', text: 'We may disclose your information when required by law, court order, or regulatory authority, or when necessary to protect the safety of patients, staff, or the public.' },
          { subtitle: 'No Sale of Data', text: 'We do not sell, rent, or trade your personal or medical information to any third party for commercial or marketing purposes.' },
        ],
      },
      {
        id: 'data-security',
        title: '4. Data Security',
        content: [
          { subtitle: 'Safeguards in Place', text: 'JP Neuro Spine Hospital and Pain Management Centre employs reasonable physical, electronic, and administrative safeguards to protect your personal and health information from unauthorised access, disclosure, alteration, or destruction.' },
          { subtitle: 'Limitations', text: 'While we take reasonable steps to secure your data, no method of electronic storage or internet transmission is completely secure. We encourage patients to contact us promptly if they suspect any unauthorised use of their information.' },
        ],
      },
      {
        id: 'retention',
        title: '5. Retention of Records',
        content: [
          { subtitle: 'Medical Records', text: 'Patient medical records are retained for a minimum period as prescribed by applicable Indian law and medical regulations. After this period, records may be securely disposed of or archived in accordance with regulatory guidelines.' },
          { subtitle: 'Website Data', text: 'Technical data collected through our website is retained only for as long as necessary to fulfil the purposes for which it was collected.' },
        ],
      },
      {
        id: 'your-rights',
        title: '6. Your Rights',
        content: [
          { subtitle: 'Access & Correction', text: 'You have the right to access your medical records and request corrections to any inaccurate or incomplete information. Requests can be made at our administrative office or via the contact details below.' },
          { subtitle: 'Consent Withdrawal', text: 'Where processing is based on your consent, you may withdraw that consent at any time. Please note this will not affect the legality of any processing carried out prior to withdrawal.' },
          { subtitle: 'Complaints', text: 'If you believe your privacy rights have been violated, you may raise a concern with our Patient Relations Officer or the relevant regulatory authority in Tamil Nadu.' },
        ],
      },
      {
        id: 'cookies',
        title: '7. Cookies & Analytics',
        content: [
          { subtitle: 'Use of Cookies', text: 'Our website may use cookies to enhance your browsing experience. These are small text files stored on your device. You may configure your browser to decline cookies, although this may affect certain website functionality.' },
          { subtitle: 'Analytics', text: 'We may use anonymised analytics tools to understand how visitors interact with our website. No personally identifiable information is collected through these tools without your explicit consent.' },
        ],
      },
      {
        id: 'policy-changes',
        title: '8. Changes to This Policy',
        content: [
          { subtitle: 'Policy Updates', text: 'JP Neuro Spine Hospital and Pain Management Centre reserves the right to update this Privacy Policy at any time to reflect changes in law, regulation, or our practices. The revised policy will be published on this page with an updated effective date. We encourage you to review this page periodically.' },
        ],
      },
      {
        id: 'contact',
        title: '9. Contact Us',
        content: [
          { subtitle: 'Privacy & Data Queries', text: 'For any questions, concerns, or requests relating to this Privacy Policy or the handling of your personal information, please contact us:' },
        ],
        contact: true,
      },
    ],
  },
  ta: {
    hero: {
      eyebrow: 'சட்டம் · இணக்கம்',
      heading: 'தனியுரிமைக் கொள்கை',
      body: 'JP Neuro Spine Hospital and Pain Management Centre அனைத்து நோயாளிகள், பார்வையாளர்கள் மற்றும் இணையதள பயனர்களின் தனியுரிமை மற்றும் இரகசியத்தன்மையை பாதுகாக்க உறுதிபூண்டுள்ளது.',
      effectiveLabel: 'நடைமுறை தேதி',
      effectiveDate: '1 ஜனவரி 2026',
      updatedLabel: 'கடைசியாக புதுப்பிக்கப்பட்டது',
      updatedDate: '1 ஏப்ரல் 2026',
    },
    breadcrumbHome: 'முகப்பு',
    breadcrumbCurrent: 'தனியுரிமைக் கொள்கை',
    sidebarNotice: 'எங்கள் சேவைகளை பயன்படுத்துவதன் மூலம் இந்தக் கொள்கையில் விவரிக்கப்பட்ட நடைமுறைகளுக்கு நீங்கள் ஒப்புக்கொள்கிறீர்கள்.',
    tocLabel: 'உள்ளடக்கம்',
    quickContact: 'விரைவு தொடர்பு',
    contactUsBtn: 'தொடர்பு கொள்ளுங்கள் →',
    backHome: 'முகப்புக்கு திரும்பு',
    sections: [
      {
        id: 'information-collected',
        title: '1. நாங்கள் சேகரிக்கும் தகவல்கள்',
        content: [
          { subtitle: 'தனிப்பட்ட அடையாள தகவல்', text: 'நோயாளியாக பதிவு செய்யும்போது, சந்திப்பு பதிவு செய்யும்போது அல்லது எங்கள் இணையதளம் மூலமாகவோ நேரிலோ தொடர்பு கொள்ளும்போது உங்கள் முழு பெயர், பிறந்த தேதி, பாலினம், முகவரி, தொலைபேசி எண் மற்றும் மின்னஞ்சல் முகவரி போன்ற தனிப்பட்ட தகவல்களை நாங்கள் சேகரிக்கலாம்.' },
          { subtitle: 'மருத்துவ & சுகாதார தகவல்', text: 'மருத்துவ சேவைகளை வழங்கும் போது, உங்கள் சிகிச்சைக்கு தேவையான மருத்துவ வரலாறு, நோயறிதல்கள், சிகிச்சை பதிவுகள், மருந்துச் சீட்டுகள், ஆய்வக முடிவுகள், படிமக் கண்டறிதல் அறிக்கைகள் மற்றும் பிற மருத்துவ தரவுகளை நாங்கள் சேகரிக்கிறோம்.' },
          { subtitle: 'தொழில்நுட்ப & பயன்பாட்டு தரவு', text: 'நீங்கள் எங்கள் இணையதளத்தை பார்வையிடும்போது, எங்கள் ஆன்லைன் சேவைகளை மேம்படுத்தும் நோக்கத்திற்காக உங்கள் IP முகவரி, உலாவி வகை, பார்வையிட்ட பக்கங்கள், பக்கங்களில் செலவழித்த நேரம் மற்றும் திசைதிருப்பல் URL கள் போன்ற தகவல்களை தானாகவே சேகரிக்கலாம்.' },
        ],
      },
      {
        id: 'how-we-use',
        title: '2. உங்கள் தகவலை நாங்கள் எவ்வாறு பயன்படுத்துகிறோம்',
        content: [
          { subtitle: 'மருத்துவ சிகிச்சை வழங்குதல்', text: 'உங்கள் தனிப்பட்ட மற்றும் மருத்துவ தகவல் முதன்மையாக சுகாதார சேவைகளை வழங்க, சிகிச்சையை ஒருங்கிணைக்க, சந்திப்புகளை நிர்வகிக்க, மருந்துச் சீட்டுகளை வழங்க மற்றும் சோதனை முடிவுகள் அல்லது தொடர்ச்சியான அறிவுறுத்தல்களை தெரிவிக்க பயன்படுகிறது.' },
          { subtitle: 'நிர்வாக நோக்கங்கள்', text: 'பொருந்தக்கூடிய இந்திய சுகாதார விதிமுறைகளின் கீழ் தேவைப்படும் பட்டியலிடல், காப்பீட்டு செயலாக்கம், சந்திப்பு திட்டமிடல் மற்றும் துல்லியமான மருத்துவ பதிவுகளை பராமரிக்க உங்கள் தகவலை பயன்படுத்துகிறோம்.' },
          { subtitle: 'தொடர்பு', text: 'சந்திப்புகளை உறுதிப்படுத்த, சுகாதார ஆலோசனைகளை பகிர்வதற்கு அல்லது JP Neuro Spine Hospital and Pain Management Centre-இல் உங்கள் சிகிச்சை தொடர்பான முக்கியமான புதுப்பிப்புகளை வழங்க தொலைபேசி, SMS அல்லது மின்னஞ்சல் மூலம் தொடர்பு கொள்ளலாம்.' },
          { subtitle: 'சட்ட & ஒழுங்குமுறை இணக்கம்', text: 'Clinical Establishments Act (CEA), Information Technology Act, 2000 மற்றும் Indian Medical Council அல்லது பொருந்தக்கூடிய மாநில அதிகாரிகளால் வழங்கப்பட்ட வழிகாட்டுதல்களின் படி தரவை நாங்கள் பாதுகாத்து செயலாக்குகிறோம்.' },
        ],
      },
      {
        id: 'sharing',
        title: '3. தகவல் பகிர்வு',
        content: [
          { subtitle: 'மருத்துவமனைக்குள்', text: 'உங்கள் தகவல் உங்கள் சிகிச்சையில் நேரடியாக ஈடுபட்டுள்ள அங்கீகாரம் பெற்ற மருத்துவ மற்றும் நிர்வாக பணியாளர்களுக்கு மட்டுமே அணுகல் இருக்கும். அணுகல் பங்கு-அடிப்படையிலானது மற்றும் தேவையானதற்கு மட்டுமே கட்டுப்படுத்தப்பட்டுள்ளது.' },
          { subtitle: 'பரிந்துரைகள் & வெளி வழங்குனர்கள்', text: 'உங்கள் சம்மதத்துடன், சிகிச்சையின் தொடர்ச்சியை உறுதி செய்ய பரிந்துரைக்கப்பட்ட நிபுணர்கள், நோயறிதல் ஆய்வகங்கள் அல்லது பிற சுகாதார நிறுவனங்களுடன் தொடர்புடைய மருத்துவ பதிவுகளை பகிரலாம்.' },
          { subtitle: 'சட்ட கடமைகள்', text: 'சட்டம், நீதிமன்ற உத்தரவு அல்லது ஒழுங்குமுறை ஆணையம் தேவைப்படும்போது, அல்லது நோயாளிகள், பணியாளர்கள் அல்லது பொதுமக்களின் பாதுகாப்பை காப்பாற்ற தேவையான போது உங்கள் தகவலை வெளியிடலாம்.' },
          { subtitle: 'தரவு விற்பனை இல்லை', text: 'வணிக அல்லது சந்தைப்படுத்தல் நோக்கங்களுக்காக எந்த மூன்றாம் தரப்பிடமும் உங்கள் தனிப்பட்ட அல்லது மருத்துவ தகவலை விற்கவோ, வாடகைக்கு விடவோ அல்லது வர்த்தகம் செய்யவோ மாட்டோம்.' },
        ],
      },
      {
        id: 'data-security',
        title: '4. தரவு பாதுகாப்பு',
        content: [
          { subtitle: 'பாதுகாப்பு நடவடிக்கைகள்', text: 'JP Neuro Spine Hospital and Pain Management Centre உங்கள் தனிப்பட்ட மற்றும் சுகாதார தகவலை அங்கீகரிக்கப்படாத அணுகல், வெளியீடு, மாற்றம் அல்லது அழிவிலிருந்து பாதுகாக்க நியாயமான உடல், மின்னணு மற்றும் நிர்வாக பாதுகாப்பு நடவடிக்கைகளை பயன்படுத்துகிறது.' },
          { subtitle: 'வரம்புகள்', text: 'உங்கள் தரவை பாதுகாக்க நாங்கள் நியாயமான நடவடிக்கைகள் எடுக்கும் அதே வேளையில், எந்த மின்னணு சேமிப்பு அல்லது இணைய கடத்தல் முறையும் முழுமையாக பாதுகாப்பானதல்ல. தங்கள் தகவலின் அங்கீகரிக்கப்படாத பயன்பாட்டை சந்தேகித்தால் உடனடியாக தொடர்பு கொள்ள நோயாளிகளை ஊக்குவிக்கிறோம்.' },
        ],
      },
      {
        id: 'retention',
        title: '5. பதிவுகளை பாதுகாத்தல்',
        content: [
          { subtitle: 'மருத்துவ பதிவுகள்', text: 'நோயாளி மருத்துவ பதிவுகள் பொருந்தக்கூடிய இந்திய சட்டம் மற்றும் மருத்துவ விதிமுறைகளால் பரிந்துரைக்கப்பட்ட குறைந்தபட்ச காலத்திற்கு பாதுகாக்கப்படுகின்றன. இந்த காலத்திற்கு பிறகு, ஒழுங்குமுறை வழிகாட்டுதல்களின் படி பதிவுகள் பாதுகாப்பாக அகற்றப்படலாம் அல்லது காப்பகப்படுத்தப்படலாம்.' },
          { subtitle: 'இணையதளத் தரவு', text: 'எங்கள் இணையதளம் மூலம் சேகரிக்கப்பட்ட தொழில்நுட்ப தரவு அது சேகரிக்கப்பட்ட நோக்கங்களை நிறைவேற்றுவதற்கு தேவையான காலம் மட்டுமே பாதுகாக்கப்படும்.' },
        ],
      },
      {
        id: 'your-rights',
        title: '6. உங்கள் உரிமைகள்',
        content: [
          { subtitle: 'அணுகல் & திருத்தம்', text: 'உங்கள் மருத்துவ பதிவுகளை அணுகவும் தவறான அல்லது முழுமையற்ற தகவல்களை திருத்தும்படி கோரவும் உங்களுக்கு உரிமை உண்டு. கோரிக்கைகளை எங்கள் நிர்வாக அலுவலகத்தில் அல்லது கீழே உள்ள தொடர்பு விவரங்கள் மூலம் செய்யலாம்.' },
          { subtitle: 'சம்மதம் திரும்பப் பெறுதல்', text: 'செயலாக்கம் உங்கள் சம்மதத்தின் அடிப்படையில் இருக்கும்போது, எந்த நேரத்திலும் அந்த சம்மதத்தை திரும்பப் பெறலாம். திரும்பப் பெறுவதற்கு முன் மேற்கொள்ளப்பட்ட செயலாக்கத்தின் சட்டப்பூர்வத்தன்மையை இது பாதிக்காது என்பதை கவனிக்கவும்.' },
          { subtitle: 'புகார்கள்', text: 'உங்கள் தனியுரிமை உரிமைகள் மீறப்பட்டிருப்பதாக நம்பினால், எங்கள் நோயாளர் உறவு அதிகாரியிடம் அல்லது தமிழ்நாட்டில் பொருந்தக்கூடிய ஒழுங்குமுறை அதிகாரத்திடம் கவலையை தெரிவிக்கலாம்.' },
        ],
      },
      {
        id: 'cookies',
        title: '7. குக்கீகள் & பகுப்பாய்வு',
        content: [
          { subtitle: 'குக்கீகளின் பயன்பாடு', text: 'உங்கள் உலாவல் அனுபவத்தை மேம்படுத்த எங்கள் இணையதளம் குக்கீகளை பயன்படுத்தலாம். இவை உங்கள் சாதனத்தில் சேமிக்கப்படும் சிறிய உரை கோப்புகள். குக்கீகளை நிராகரிக்க உங்கள் உலாவியை கட்டமைக்கலாம், இருப்பினும் இது சில இணையதள செயல்பாட்டை பாதிக்கலாம்.' },
          { subtitle: 'பகுப்பாய்வு', text: 'பார்வையாளர்கள் எங்கள் இணையதளத்துடன் எவ்வாறு தொடர்பு கொள்கிறார்கள் என்பதை புரிந்துகொள்ள பெயர் தெரியாத பகுப்பாய்வு கருவிகளை பயன்படுத்தலாம். இந்தக் கருவிகள் மூலம் உங்கள் வெளிப்படையான சம்மதமின்றி தனிப்பட்ட தகவல் சேகரிக்கப்படவில்லை.' },
        ],
      },
      {
        id: 'policy-changes',
        title: '8. இந்தக் கொள்கையில் மாற்றங்கள்',
        content: [
          { subtitle: 'கொள்கை புதுப்பிப்புகள்', text: 'சட்டம், ஒழுங்குமுறை அல்லது எங்கள் நடைமுறைகளில் மாற்றங்களை பிரதிபலிக்க JP Neuro Spine Hospital and Pain Management Centre எந்த நேரத்திலும் இந்த தனியுரிமைக் கொள்கையை புதுப்பிக்கும் உரிமையை கொண்டுள்ளது. திருத்தப்பட்ட கொள்கை புதுப்பிக்கப்பட்ட நடைமுறை தேதியுடன் இந்தப் பக்கத்தில் வெளியிடப்படும். இந்தப் பக்கத்தை அவ்வப்போது பரிசீலிக்க ஊக்குவிக்கிறோம்.' },
        ],
      },
      {
        id: 'contact',
        title: '9. தொடர்பு கொள்ளுங்கள்',
        content: [
          { subtitle: 'தனியுரிமை & தரவு கேள்விகள்', text: 'இந்த தனியுரிமைக் கொள்கை அல்லது உங்கள் தனிப்பட்ட தகவலை கையாளுவது தொடர்பான கேள்விகள், கவலைகள் அல்லது கோரிக்கைகளுக்கு, தயவுசெய்து எங்களை தொடர்பு கொள்ளுங்கள்:' },
        ],
        contact: true,
      },
    ],
  },
};
