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
    emergency: 'அவசரநிலை',
    bookAppointment: 'சந்திப்பு பதிவு செய்க',
  },
};

// ─── Footer translations ──────────────────────────────────────────────────────
export const footerTranslations = {
  en: {
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
        { label: 'Patient Education', to: '/patient-education' },
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
    tagline: 'அனுதாபமும் துல்லியமும் கொண்ட மருத்துவச் சிறப்பு — தமிழ்நாட்டில் மேம்பட்ட நரம்பியல் மற்றும் முதுகெலும்பு சிகிச்சைக்கான நம்பகமான மையம்.',
    followUs: 'எங்களை பின்தொடரவும்',
    quickLinks: {
      heading: 'விரைவு இணைப்புகள்',
      links: [
        { label: 'முகப்பு', to: '/' },
        { label: 'எங்களை பற்றி', to: '/about-us' },
        { label: 'துறைகள்', to: '/department-services' },
        { label: 'எங்கள் மருத்துவர்கள்', to: '/doctors' },
        { label: 'நோயாளர் சேவைகள்', to: '/patient-services' },
        { label: 'நோயாளர் கல்வி', to: '/patient-education' },
        { label: 'தொடர்பு கொள்ளுங்கள்', to: '/contact-us' },
      ],
    },
    services: {
      heading: 'எங்கள் சேவைகள்',
      links: [
        { label: 'நரம்பியல்', to: '/department-services' },
        { label: 'முதுகெலும்பு அறுவை சிகிச்சை', to: '/department-services' },
        { label: 'வலி மேலாண்மை', to: '/department-services' },
        { label: 'நரம்பியல் மறுவாழ்வு', to: '/department-services' },
        { label: 'அவசர சிகிச்சை', to: '/emergency' },
      ],
    },
    contact: {
      heading: 'தொடர்பு தகவல்',
      hours: 'திங்கள் – சனி: காலை 9 – மாலை 6',
      emergency: 'அவசரநிலை: 24 / 7',
      viewMap: 'கூகுள் வரைபடத்தில் காண்க',
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
      body: 'மிகவும் சிக்கலான நரம்பியல் மற்றும் அறுவை சிகிச்சை நிகழ்வுகளுக்கு இடைவிடாத தீவிர கண்காணிப்பு மற்றும் அவசர சிகிச்சை — ஒவ்வொரு நொடியும் முக்கியமான இடத்தில்.',
      call: 'இப்போது அழையுங்கள்',
    },
    services: [
      { icon: 'emergency',     iconBg: 'bg-error/10',     iconColor: 'text-error',     title: '24 மணி நேர அவசர காயம் சிகிச்சை & ICU', desc: 'தலை மற்றும் முதுகெலும்பு காயங்களை விரைவாக நிலைப்படுத்த இடைவிடாத உடனடி சிகிச்சை உறுதி செய்கிறது.' },
      { icon: 'monitor_heart', iconBg: 'bg-primary/10',   iconColor: 'text-primary',   title: 'கடுமையான பக்கவாதம் சிகிச்சை',           desc: 'நேர-உணர்திறன் பக்கவாதம் மேலாண்மை மூளைக்கு இரத்த ஓட்டத்தை மீட்டெடுக்கவும் நிரந்தர சேதத்தை கட்டுப்படுத்தவும் உதவுகிறது.' },
      { icon: 'analytics',     iconBg: 'bg-secondary/10', iconColor: 'text-secondary', title: 'அறுவையின் போது நரம்பு கண்காணிப்பு',     desc: 'அறுவை சிகிச்சையின் போது நரம்பு பாதைகளின் நிகழ்நேர கண்காணிப்பு முக்கிய மூளை மற்றும் முதுகெலும்பு அமைப்புகளுக்கு சேதம் தடுக்க உதவுகிறது.' },
      { icon: 'vital_signs',   iconBg: 'bg-primary/10',   iconColor: 'text-primary',   title: 'ஆக்கிரமிப்பு இரத்த ஓட்ட கண்காணிப்பு',  desc: 'முக்கியமான இருதய தன்மைகளின் தொடர்ச்சியான கண்காணிப்பு அறுவை சிகிச்சையின் போது உகந்த மூளை இரத்த ஓட்டத்தை உறுதி செய்கிறது.' },
      { icon: 'ventilator',    iconBg: 'bg-primary/10',   iconColor: 'text-primary',   title: 'மேம்பட்ட சுவாச கருவிகள்',               desc: 'நனவு குறைந்த நோயாளிகள் உட்பட தீவிர நரம்பியல் அறுவை நோயாளிகளுக்கு துல்லியமான சுவாச ஆதரவு வழங்குகிறது.' },
    ],
    sidebar: {
      glanceTitle: 'பிரிவின் சுருக்கம்',
      stats: [
        { icon: 'schedule',       label: 'கிடைக்கும் நேரம்',   value: '24 / 7 / 365' },
        { icon: 'bed',            label: 'ICU படுக்கைகள்',     value: '3 படுக்கைகள்' },
        { icon: 'group',          label: 'அழைப்பில் நிபுணர்கள்', value: 'எப்போதும் உள்ளனர்' },
        { icon: 'local_hospital', label: 'மறுமொழி நேரம்',      value: '< 5 நிமிடங்கள்' },
      ],
      emergencyTitle: 'அவசர தொடர்பு',
      emergencyBody: 'உயிர் அச்சுறுத்தும் நரம்பியல் அவசரநிலைகளுக்கு, எங்கள் ICU நேரடி தொலைபேசியில் உடனே அழையுங்கள்.',
      whyTitle: 'எங்கள் ICU ஏன்?',
      whyPoints: [
        'தொடர்ச்சியான கண்காணிப்பு.',
        'முன்கூட்டிய மீட்புக்கு கவனம் செலுத்திய சிகிச்சை.',
        'நவீன சுவாச கருவி ஆதரவு.',
        'குடும்ப ஆலோசனை & உதவி',
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
      body: 'இயக்கம், வலிமை மற்றும் செயல்பாட்டை மீட்டெடுக்க தனிப்பயனாக்கப்பட்ட மறுவாழ்வு திட்டங்கள் — நோயாளிகள் விரைவாக குணமடைய மற்றும் சிறப்பாக வாழ உதவுகிறோம்.',
      call: 'இப்போது அழையுங்கள்',
    },
    services: [
      { icon: 'accessible',     title: 'பக்கவாதம் மறுவாழ்வு',               desc: 'பக்கவாதத்திற்குப் பிறகு நோயாளிகள் இயக்கம், பேச்சு மற்றும் சுதந்திரத்தை மீண்டும் பெற கவனம் செலுத்திய சிகிச்சை திட்டங்கள்.' },
      { icon: 'electric_bolt',  title: 'IFT (குறுக்கீடு சிகிச்சை)',          desc: 'வலியை குறைக்கவும் இரத்த ஓட்டத்தை மேம்படுத்தவும் நடுத்தர அதிர்வெண் மின்னோட்டங்கள் பயன்படுத்துகிறது.' },
      { icon: 'directions_run', title: 'MST (தசை தூண்டுதல் சிகிச்சை)',       desc: 'பலவீனமான அல்லது செயலிழந்த தசைகளை தூண்டவும் சிதைவை தடுக்கவும் மின் தூண்டுதல்கள் பயன்படுத்துகிறது.' },
      { icon: 'straighten',     title: 'தானியங்கி இழுவை',                   desc: 'வட்டுகள் மற்றும் நரம்புகளின் அழுத்தத்தை குறைக்க கட்டுப்படுத்தப்பட்ட முதுகெலும்பு நீட்டிப்பு வழங்குகிறது.' },
      { icon: 'sports_soccer',  title: 'விளையாட்டு மறுவாழ்வு',              desc: 'விளையாட்டு காயங்களில் இருந்து மீட்சி மற்றும் மறு காயம் தடுப்பை நோக்கமாக கொண்ட சிறப்பு சிகிச்சை.' },
      { icon: 'flash_on',       title: 'TENS',                              desc: 'வலி சமிக்ஞைகளை தடுக்கவும் எண்டோர்பின் வெளியீட்டை தூண்டவும் குறைந்த-மின்னழுத்த மின்னோட்டங்கள் வழங்குகிறது.' },
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
      body: 'நாள்பட்ட வலி மேலாண்மைக்கான விரிவான, ஆதார-அடிப்படையிலான அணுகுமுறை — துல்லியமான நோயறிதல் மற்றும் குறைந்தபட்ச ஆக்கிரமிப்பு சிகிச்சைகள் மூலம் நோயாளிகள் தங்கள் வாழ்க்கை தரத்தை மீட்க உதவுகிறோம்.',
      call: 'இப்போது அழையுங்கள்',
    },
    conditionsSection: {
      heading: 'நாம் சிகிச்சையளிக்கும் நாள்பட்ட நிலைமைகள்',
      items: [
        'நாள்பட்ட தலைவலி கோளாறுகள்',
        'சரிந்த வட்டு & சையாட்டிகா',
        'நரம்பியல் வலி',
        'மூட்டு மாற்று அறுவைக்கு பின் வலி',
        'ஃபைப்ரோமயல்ஜியா & மயோஃபேசியல் வலி',
        'அறுவை சிகிச்சைக்கு பின் வலி',
        'புற்றுநோய் வலி',
        'ட்ரைஜெமினல் நியூரால்ஜியா',
        'ஹெர்பெட்டிக் நியூரால்ஜியாவுக்கு பின்',
        'நாள்பட்ட தோள்பட்டை வலி',
        'நாள்பட்ட முழங்கால் வலி',
        'குதிகால் & பாதம் வலி',
        'இறுக்கம் மேலாண்மை',
      ],
    },
    techSection: {
      heading: 'மேம்பட்ட தொழில்நுட்பம்',
      items: [
        { title: 'தலைவலி மதிப்பீட்டு கருவி',                   desc: 'வெவ்வேறு தலைவலி கோளாறுகளை துல்லியமாக கண்டறிய எளிய, கட்டமைக்கப்பட்ட மருத்துவ ஆதரவு அமைப்பு. பயனுள்ள வலி மேலாண்மைக்கான விரைவான, நடைமுறை முடிவுகளை இயக்குகிறது.' },
        { title: 'ஃப்ளூரோஸ்கோபி & DSA வழிகாட்டிய நடைமுறைகள்', desc: 'மேம்பட்ட படிமக் கண்காணிப்பு வலி தலையீடுகளுக்கு துல்லியமான ஊசி வைப்பை உறுதி செய்கிறது. குறைந்தபட்ச ஆக்கிரமிப்பு வலி நடைமுறைகளின் பாதுகாப்பு மற்றும் செயல்திறனை மேம்படுத்துகிறது.' },
        { title: 'நரம்பியல் & தசை எலும்பு அல்ட்ராசவுண்ட்',     desc: 'நிகழ்நேர படிமக் கண்காணிப்பு தசை நாண் மற்றும் மூட்டு காயங்கள் போன்ற வலி நிலைமைகளை கண்டறிந்து சிகிச்சையளிக்க உதவுகிறது. ஊசி துல்லியத்தை மேம்படுத்துகிறது.' },
        { title: 'நரம்பு மட்டுப்படுத்தல் & ரேடியோஃப்ரீக்வென்சி', desc: 'வலி சமிக்ஞைகளை தடுக்க குறிப்பிட்ட நரம்புகளை குறிவைத்து நீண்டகால நிவாரணம் வழங்குகிறது. வழக்கமான சிகிச்சைகள் தோல்வியடையும்போது மிகவும் பயனுள்ளது.' },
        { title: 'மல்டிபயோலாஜிக் சென்ட்ரிஃப்யூஜ் (ஆர்தோபயாலாஜிக்ஸ்)', desc: 'குணமடைவதற்கான மீளுருவாக்க சிகிச்சைகளை உருவாக்க நோயாளியின் சொந்த உயிரியல் மாதிரிகளை செயலாக்குகிறது. இயற்கையான திசு சரிசெய்தலை ஊக்குவிக்கிறது.' },
        { title: 'கூர்மையான வலி சேவைகள்',                      desc: 'விரிவான வலி மேலாண்மை நெறிமுறைகள் அறுவை சிகிச்சைக்கு பின் வசதியான மீட்பை உறுதி செய்கின்றன. வலியை குறைக்க பிராந்திய மயக்கம் மற்றும் மருந்துகளை பயன்படுத்துகிறது.' },
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
    eyebrow: 'தொடங்க தயாரா?',
    heading: 'சிறப்பு மருத்துவ சிகிச்சையை அனுபவியுங்கள்',
    body: 'எங்கள் நிபுணர்கள் இரக்கம் மற்றும் நவீன தொழில்நுட்பத்துடன் உங்கள் மீட்பு பயணத்தில் வழிகாட்ட தயாராக இருக்கிறார்கள்.',
    call: 'இப்போது அழையுங்கள்',
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
      heading: 'Advanced Technology',
      items: [
        {
          title: 'Neurosurgical Microscope',
          desc: 'Provides high magnification and illumination for precise surgery on delicate brain and spinal structures. Enhances surgical safety by allowing accurate dissection and preservation of vital tissues.',
        },
        {
          title: 'Neuro Electrical Drill System',
          desc: 'High-speed drill system designed for precise bone cutting in neurosurgical procedures. Ensures efficiency and safety while minimizing trauma to surrounding tissues.',
        },
        {
          title: 'Fluoroscopy',
          desc: 'Real-time imaging guidance for minimally invasive procedures and accurate implant placement. Improves surgical precision while reducing complications and operative time.',
        },
        {
          title: 'Advanced Anaesthesia Workstation',
          desc: 'Delivers controlled and reliable anaesthesia tailored to complex neurosurgical procedures. Ensures patient safety with continuous monitoring and precise drug delivery.',
        },
        {
          title: 'Invasive Hemodynamic Monitoring',
          desc: 'Provides continuous, accurate measurement of cardiovascular parameters during surgery. Helps maintain optimal blood flow and prevents complications from fluid imbalance.',
        },
        {
          title: 'Patient Warming Device',
          desc: 'Maintains body temperature during surgery to prevent intra-operative hypothermia. Reduces complications, improves recovery, and enhances overall surgical outcomes.',
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
      body: 'மூளை, முதுகெலும்பு மற்றும் நரம்பு மண்டல நிலைமைகளுக்கான மேம்பட்ட அறுவை சிகிச்சை — துல்லியம், இரக்கம் மற்றும் நவீன தொழில்நுட்பத்துடன்.',
      call: 'இப்போது அழையுங்கள்',
    },
    techSection: {
      heading: 'மேம்பட்ட தொழில்நுட்பம்',
      items: [
        {
          title: 'நரம்பியல் அறுவை நுண்ணோக்கி',
          desc: 'மூளை மற்றும் முதுகெலும்பின் நுட்பமான அமைப்புகளில் துல்லியமான அறுவை சிகிச்சைக்கு உயர் உருப்பெருக்கம் மற்றும் ஒளி வழங்குகிறது. துணி பாதுகாப்பை மேம்படுத்துகிறது.',
        },
        {
          title: 'நரம்பியல் மின் துரப்பணம்',
          desc: 'நரம்பியல் அறுவை நடைமுறைகளில் துல்லியமான எலும்பு வெட்டுதலுக்கு வடிவமைக்கப்பட்ட அதிவேக துரப்பண அமைப்பு. சுற்றியுள்ள திசுக்களுக்கு காயம் குறைக்கிறது.',
        },
        {
          title: 'ஃப்ளூரோஸ்கோபி',
          desc: 'குறைந்தபட்ச ஆக்கிரமிப்பு நடைமுறைகள் மற்றும் துல்லியமான உள்வைப்பு வைப்பிற்கு நிகழ்நேர படிமக் கண்காணிப்பு. அறுவை சிகிச்சை துல்லியத்தை மேம்படுத்துகிறது.',
        },
        {
          title: 'மேம்பட்ட மயக்க நிலையம்',
          desc: 'சிக்கலான நரம்பியல் அறுவை நடைமுறைகளுக்கு ஏற்ற கட்டுப்படுத்தப்பட்ட மயக்கம் வழங்குகிறது. தொடர்ச்சியான கண்காணிப்புடன் நோயாளி பாதுகாப்பை உறுதி செய்கிறது.',
        },
        {
          title: 'ஆக்கிரமிப்பு இரத்த ஓட்ட கண்காணிப்பு',
          desc: 'அறுவை சிகிச்சையின் போது இருதயத் தன்மைகளை தொடர்ச்சியாகவும் துல்லியமாகவும் அளவிடுகிறது. உகந்த இரத்த ஓட்டத்தை பராமரிக்க உதவுகிறது.',
        },
        {
          title: 'நோயாளி வெப்பமூட்டும் சாதனம்',
          desc: 'அறுவை சிகிச்சையின் போது உடல் வெப்பநிலையை பராமரிக்கிறது. சிக்கல்களை குறைத்து, மீட்பை மேம்படுத்துகிறது.',
        },
      ],
    },
    services: [
      { icon: 'psychology',            title: 'எண்டோஸ்கோபிக் மூளை அறுவை',      desc: 'சிறிய திறப்புகள் மற்றும் மேம்பட்ட எண்டோஸ்கோப்கள் மூலம் ஆழமான மூளை பகுதிகளை குறைந்தபட்ச திசு இடையூறுடன் அணுகுகிறது. விரைவான மீட்பு மற்றும் குறைந்த வலி கிடைக்கும்.' },
      { icon: 'vertical_align_center', title: 'எண்டோஸ்கோபிக் முதுகெலும்பு அறுவை', desc: 'குறைந்தபட்ச தசை சேதத்துடன் முதுகெலும்பு பிரச்சினைகளை சிகிச்சையளிக்கும் சிறிய துவாரம் அணுகுமுறை. விரைவான மீட்பு மற்றும் சீக்கிரமான இயல்பு வாழ்க்கைக்கு திரும்புவது.' },
      { icon: 'biotech',               title: 'மைக்ரோநரம்பியல் அறுவை',          desc: 'நுட்பமான மூளை மற்றும் முதுகெலும்பு அமைப்புகளுக்கு அறுவை நுண்ணோக்கியின் கீழ் மேற்கொள்ளப்படும் உயர் துல்லிய அறுவை சிகிச்சை. முக்கியமான நரம்பியல் செயல்பாட்டை பாதுகாக்கிறது.' },
      { icon: 'neurology',             title: 'மூளை கட்டி அறுவை',               desc: 'மூளை மற்றும் முதுகெலும்பை பாதிக்கும் கட்டிகளை பாதுகாப்பாகவும் திறம்படவும் அகற்றுவதற்கான மேம்பட்ட அறுவை நுட்பங்கள். நரம்பியல் செயல்பாட்டை பாதுகாக்கிறது.' },
      { icon: 'cell_tower',            title: 'வலிப்பு நோய் அறுவை',             desc: 'மருந்துகளால் கட்டுப்படுத்தப்படாத வலிப்புகள் உள்ள நோயாளிகளுக்கான அறுவை சிகிச்சை சிகிச்சை. வலிப்புகளை குறைத்து அன்றாட செயல்பாட்டை மேம்படுத்துகிறது.' },
      { icon: 'child_care',            title: 'குழந்தை நரம்பியல் அறுவை',        desc: 'குழந்தைகளின் நரம்பியல் நிலைமைகளுக்கு சிறப்பு சிகிச்சை, பிறவி மற்றும் வளர்ச்சி கோளாறுகள் உட்பட. இயல்பான வளர்ச்சியை ஆதரிக்கும் மென்மையான, துல்லியமான சிகிச்சை.' },
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
      statsLabel: 'Years of Clinical Excellence',
      visionTitle: 'Our Vision',
      visionBody: 'Restoring lives through excellence in Neuro Spine and pain care.',
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
          role: 'Head of Pain Management & Critical Care',
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
      heading: 'நவீன சிகிச்சையை உங்கள் அருகில் கொண்டு வருகிறோம்.',
      body1: 'JP Neuro Spine Hospital and Pain Management Centre, நரம்பியல் மற்றும் முதுகெலும்பு சிகிச்சையை தேவைப்படும் ஒவ்வொருவருக்கும் எட்டும் தூரத்தில் கொண்டு வர வேண்டும் என்ற தெளிவான நோக்கத்துடன் நிறுவப்பட்டது. நிபுணத்துவமும் கண்டுபிடிப்பும் புவியியல் வரம்புகளால் கட்டுப்படுத்தப்படக்கூடாது என்று நம்புகிறோம்.',
      body2: 'எங்கள் அணுகுமுறை அதி நவீன தொழில்நுட்பத்தை துல்லியம், பாதுகாப்பு மற்றும் நீண்டகால மீட்புக்கு அர்ப்பணிக்கப்பட்ட நிபுணர் குழுவுடன் இணைக்கிறது. நோயறிதல் முதல் மறுவாழ்வு வரை, ஒவ்வொரு படியும் நோயாளிகளுக்கும் அவர்கள் குடும்பத்தினருக்கும் நம்பிக்கை, தெளிவு மற்றும் நலன் உறுதி செய்யும் வகையில் வடிவமைக்கப்பட்டுள்ளது.',
      quote: '"அறுவை சிகிச்சையில் துல்லியம், சிகிச்சையில் இரக்கம்."',
      quoteCaption: 'ஒவ்வொரு நோயாளி தொடர்பையும் வழிநடத்துகிறது.',
    },
    visionMission: {
      statsLabel: 'ஆண்டுகள் மருத்துவ சிறப்பு',
      visionTitle: 'எங்கள் தொலைநோக்கு',
      visionBody: 'நரம்பு-முதுகெலும்பு மற்றும் வலி சிகிச்சையில் சிறப்பின் மூலம் உயிர்களை மீட்டெடுத்தல்.',
      missionTitle: 'எங்கள் நோக்கம்',
      missionItems: [
        { icon: 'clinical_notes',      title: 'மருத்துவ சிறப்பு',    desc: 'நிரூபிக்கப்பட்ட சிகிச்சை, தொடர்ச்சியான கற்றல் மற்றும் முடிவு-சார் சிகிச்சை மூலம் மருத்துவ நடைமுறையின் உயர்ந்த தரங்களை நாங்கள் கடைப்பிடிக்கிறோம்.' },
        { icon: 'favorite',            title: 'இரக்கம் & கண்ணியம்',  desc: 'நரம்பியல் மற்றும் வலி கோளாறுகளின் உடல் மற்றும் உணர்ச்சி தாக்கத்தை உணர்ந்து, ஒவ்வொரு நோயாளியையும் அனுதாபம், மரியாதை மற்றும் உணர்திறனுடன் நடத்துகிறோம்.' },
        { icon: 'verified_user',       title: 'நேர்மை & நெறிமுறை',   desc: 'வெளிப்படையான தொடர்பு, நெறிமுறை முடிவெடுத்தல் மற்றும் எப்போதும் பொறுப்பான மருத்துவ நடைமுறைக்கு உறுதிபூண்டுள்ளோம்.' },
      ],
    },
    leadership: {
      heading: 'எங்கள் தலைமை',
      sub: 'நரம்பியல் அறுவை சிகிச்சை மற்றும் வலி மேலாண்மையில் தொலைநோக்கு வல்லுனர்களால் வழிநடத்தப்படுகிறது.',
      leaders: [
        {
          name: 'டாக்டர் ஜெயகுமார் பி',
          role: 'தலைமை ஆலோசனை நரம்பியல் அறுவை சிகிச்சை நிபுணர்',
          bio: 'சிக்கலான முதுகெலும்பு அறுவை சிகிச்சை மற்றும் நரம்பு காயம் சிகிச்சையில் இரண்டு தசாப்தங்களுக்கும் மேலான அனுபவத்துடன், டாக்டர் ஜெயகுமார் குறைந்தபட்ச ஆக்கிரமிப்பு நடைமுறைகளில் கவனம் செலுத்தி எங்கள் மருத்துவ சிறப்பு திட்டத்தை வழிநடத்துகிறார்.',
          image: 'https://ik.imagekit.io/glvwzrukg/JP%20Webiste/dr.%20jayakumar.jpeg',
        },
        {
          name: 'டாக்டர் பிரசன்ன வாணி வி',
          role: 'வலி மேலாண்மை & தீவிர சிகிச்சை பிரிவு தலைவர்',
          bio: 'டாக்டர் பிரசன்ன வாணி முழுமையான வலி நிவாரணம் மற்றும் தலையீட்டு வலி மருத்துவத்தில் நிபுணத்துவம் வாய்ந்தவர் — தனிப்பயன் மறுவாழ்வு திட்டங்கள் மூலம் நோயாளிகள் நிரந்தர நலன் அடைவதை உறுதி செய்கிறார்.',
          image: 'https://ik.imagekit.io/glvwzrukg/JP%20Webiste/dr.prasanna%20vani%20.jpeg',
        },
      ],
    },
    accreditation: {
      eyebrow: 'நம்பகத்தன்மை & இணக்கம்',
      heading: 'முழுமையாக உரிமம் பெற்றது, அங்கீகரிக்கப்பட்டது & உங்கள் பாதுகாப்பில் அர்ப்பணிக்கப்பட்டது',
      body: 'JP Neuro Spine Hospital and Pain Management Centre, Clinical Establishment Act நிர்ணயித்த மருத்துவ தரங்களுக்கு கண்டிப்பான இணக்கத்துடன் செயல்படுகிறது. ஒவ்வொரு சிகிச்சை முடிவும் சான்றிதழ் பெற்ற நிபுணர்கள், நவீன கண்டறியும் கருவிகள் மற்றும் நிரூபிக்கப்பட்ட நெறிமுறைகளால் ஆதரிக்கப்படுகிறது — நோயறிதல் முதல் மீட்பு வரை ஒவ்வொரு நோயாளியும் பாதுகாப்பான, துல்லியமான மற்றும் வெளிப்படையான சிகிச்சையை பெறுவதை உறுதி செய்கிறோம்.',
      license: 'CEA உரிம எண்: CEA-HOSP-2024-0012',
    },
    cta: {
      heading: 'சமரசமில்லா சிகிச்சையை அனுபவியுங்கள்',
      body: 'தொடர்ச்சியான வலிக்கான ஆலோசனையோ அல்லது சிறப்பு நரம்பியல் அறுவை சிகிச்சை அறிவுரையோ தேடுகிறீர்களா — உங்கள் மீட்பு பயணத்தை ஆதரிக்க எங்கள் குழு இங்கே இருக்கிறது.',
      emergency: 'அவசரநிலை: 04343 239923',
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
      ],
      advancedLabel: 'Advanced Mapping',
    },
  },
  ta: {
    hero: {
      heading1: 'விரிவான நோயாளர்',
      heading2: 'சேவைகள் & வசதிகள்',
      body: 'JP Neuro Spine Hospital and Pain Management Centre, அறுவை சிகிச்சை துல்லியத்தை இரக்கமான சிகிச்சையுடன் இணைத்து, சிக்கலான நரம்பியல் மற்றும் முதுகெலும்பு நிலைமைகளுக்கு முழுமையான குணமடையும் சூழலை வழங்குகிறோம்.',
    },
    opd: {
      eyebrow: 'வெளி நோயாளர் பிரிவு',
      heading: 'OPD ஆலோசனை நேரங்கள்',
      body: 'நேரடியாக வாருங்கள் அல்லது முன்பதிவு செய்யுங்கள் — எங்கள் நிபுணர்கள் வாரம் முழுவதும் பல அமர்வுகளில் கிடைக்கின்றனர்.',
      callBtn: 'நேரங்களுக்கு அழையுங்கள்',
      specialized: 'சிறப்பு',
      daily: 'தினசரி',
      monSat: 'திங்கள் – சனி',
      sunday: 'ஞாயிறு',
      monFriMorning: 'திங்கள் – வெள்ளி (காலை)',
      monFriEvening: 'திங்கள் – வெள்ளி (மாலை)',
      dailySession: 'தினசரி அமர்வு',
      neuroDesc: 'எங்கள் மூத்த நரம்பியல் அறுவை சிகிச்சை நிபுணரால் மூளை, முதுகெலும்பு மற்றும் நரம்பு நிலைமைகளுக்கான நிபுணர் ஆலோசனை.',
      painDesc: 'நாள்பட்ட மற்றும் கடுமையான வலி நிலைமைகளுக்கான சிறப்பு வலி மதிப்பீடு மற்றும் தலையீடு.',
      physioDesc: 'முதுகெலும்பு மீட்புக்காக வடிவமைக்கப்பட்ட மேம்பட்ட நரம்பியல் மறுவாழ்வு மற்றும் உடல் சிகிச்சை நெறிமுறைகள்.',
    },
    emergency: {
      heading: '24/7 அவசர சேவை & ஆதரவு',
      items: [
        { title: 'அவசர சிகிச்சை',  desc: '24 மணி நேரம். அவசரகால மருத்துவ மறுமொழி மற்றும் முக்கியமான காயங்களுக்கான உடனடி உதவி பிரிவு.' },
        { title: 'மருந்தகம்',       desc: '24 மணி நேரம். அறுவை சிகிச்சை மற்றும் தீவிர சிகிச்சை தேவைகளுக்கான முழுமையாக சேமிக்கப்பட்ட உள்-வீட்டு மருந்து மையம்.' },
        { title: 'ஆய்வக சேவைகள்', desc: '24 மணி நேரம். விரைவான முடிவுகள் மற்றும் நோயறிதலுக்கான மேம்பட்ட நோயியல் மற்றும் நோயறிதல் ஆய்வகம்.' },
      ],
    },
    inpatient: {
      eyebrow: 'தங்குமிட வசதி',
      heading: 'மேம்பட்ட உட்-நோயாளர் சிகிச்சை',
      items: [
        { title: 'வார்டு விருப்பங்கள்',      desc: 'பொதுவான அறை, தனியார் AC அல்லாத அறை மற்றும் தனியார் AC அறை — நோயாளரின் விருப்பங்களுக்கு ஏற்ப.' },
        { title: 'சிறப்பு ICU',               desc: 'முக்கியமான நரம்பு-முதுகெலும்பு மீட்பு மற்றும் அறுவை சிகிச்சைக்கு பிந்தைய கண்காணிப்புக்காக 3 படுக்கைகள் கொண்ட சிறப்பு தீவிர சிகிச்சை பிரிவு.' },
        { title: 'பகல் சிகிச்சை நடைமுறைகள்', desc: 'விரைவான வலி மேலாண்மை நடைமுறைகள் மற்றும் குறைந்தபட்ச ஆக்கிரமிப்பு தலையீடுகளுக்கான அர்ப்பணிக்கப்பட்ட அறை.' },
      ],
    },
    diagnostics: {
      badgeLabel: 'நோயறிதல் ஆய்வகம்',
      eyebrow: 'நோயறிதல்',
      heading: 'நரம்பு மின் நோயறிதல் சிறப்பு',
      body: 'எங்கள் நோயறிதல் பிரிவு நரம்பு செயல்பாட்டை துல்லியமாக வரைபடமாக்க அத்யாதுனிக தொழில்நுட்பத்துடன் அமைக்கப்பட்டுள்ளது, ஒவ்வொரு சிகிச்சை திட்டத்திற்கும் சரியான அடித்தளத்தை உறுதி செய்கிறது.',
      tests: [
        { label: 'EEG',  desc: 'மூளை மின்னலை படம்' },
        { label: 'EMG',  desc: 'தசை மின் பதிவு' },
        { label: 'NCS',  desc: 'நரம்பு கடத்தல்' },
        { label: 'BERA', desc: 'மூளைத்தண்டு மறுமொழி' },
        { label: 'VEP',  desc: 'காட்சி மறுமொழி' },
      ],
      advancedLabel: 'மேம்பட்ட வரைபடம்',
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
      opdLabel: 'OPD Availability',
      opdTimes: ['Mon – Sat · 10 AM – 1 PM', 'Mon – Sat · 4 PM – 9 PM'],
      bookBtn: 'Book Consultation',
    },
    prasanna: {
      specialty: 'Pain Medicine & Critical Care',
      name: 'Dr. Prasanna Vani V',
      quals: 'M.B.B.S., M.D.( Anaesthesiology, critical care and Pain), C.C.E.P.C., F.I.P.M, E.D.P.M.',
      yearsLabel: 'Years of\nExperience',
      academicLabel: 'Academic Merit',
      goldMedal: 'Gold Medalist',
      goldMedalSub: 'MD (Anaesthesiology)',
      pastTitle: 'Past Employment',
      membershipsTitle: 'Memberships',
      pastItems: [
        { label: 'Senior Resident', place: 'AIIMS, New Delhi' },
        { label: 'Asst. Professor', place: 'Cancer Institute, Adyar' },
      ],
      opdLabel: 'OPD Availability',
      opdTimes: ['Mon – Fri · 10 AM – 1 PM'],
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
      ],
    },
  },
  ta: {
    jayakumar: {
      specialty: 'நரம்பியல் அறுவை சிகிச்சை',
      name: 'டாக்டர் ஜெயகுமார் பி',
      quals: 'M.B.B.S., M. Ch. நரம்பியல் அறுவை சிகிச்சை (சென்னை மருத்துவக் கல்லூரி)',
      yearsLabel: 'ஆண்டுகள்\nஅனுபவம்',
      recognitionLabel: 'அங்கீகாரம்',
      awardTitle: 'சிறந்த மருத்துவர் விருது',
      awardPlace: 'தர்மபுரி மருத்துவக் கல்லூரி',
      backgroundTitle: 'தொழில் பின்னணி',
      pastLabel: 'முந்தைய பணி',
      pastText: 'உதவி பேராசிரியர், நரம்பியல் அறுவை சிகிச்சை நிறுவனம், சென்னை மருத்துவக் கல்லூரி',
      expertiseTitle: 'நிபுணத்துவ துறைகள்',
      expertise: ['மூளை கட்டி அறுவை', 'முதுகெலும்பு அறுவை', 'எண்டோஸ்கோபிக் நரம்பியல் அறுவை', 'காயம் அறுவை', 'புற நரம்பு அறுவை'],
      opdLabel: 'OPD கிடைக்கும் நேரம்',
      opdTimes: ['திங்கள் – சனி · காலை 10 – பகல் 1 மணி', 'திங்கள் – சனி · மாலை 4 – 9 மணி'],
      bookBtn: 'ஆலோசனை பதிவு',
    },
    prasanna: {
      specialty: 'வலி மருத்துவம் & தீவிர சிகிச்சை',
      name: 'டாக்டர் பிரசன்ன வாணி வி',
      quals: 'M.B.B.S., M.D. (மயக்கவியல், தீவிர சிகிச்சை மற்றும் வலி), C.C.E.P.C., F.I.P.M, E.D.P.M.',
      yearsLabel: 'ஆண்டுகள்\nஅனுபவம்',
      academicLabel: 'கல்வி சிறப்பு',
      goldMedal: 'தங்கப் பதக்கவிதர்',
      goldMedalSub: 'MD (மயக்கவியல்)',
      pastTitle: 'முந்தைய பணி',
      membershipsTitle: 'உறுப்பினர்கள்',
      pastItems: [
        { label: 'மூத்த குடியிருப்பாளர்', place: 'AIIMS, புது தில்லி' },
        { label: 'உதவி பேராசிரியர்', place: 'புற்றுநோய் நிறுவனம், அடையாறு' },
      ],
      opdLabel: 'OPD கிடைக்கும் நேரம்',
      opdTimes: ['திங்கள் – வெள்ளி · காலை 10 – பகல் 1 மணி'],
      bookBtn: 'ஆலோசனை பதிவு',
      awardsTitle: 'மதிப்புமிக்க விருதுகள்',
      awards: [
        '2014-ல் தமிழ்நாடு டாக்டர் M.G.R. மருத்துவ பல்கலைக்கழகம் நடத்திய M.D. மயக்கவியல் தேர்வில் தங்கப் பதக்கம்.',
        '2017-ல் செயின்ட் ஜான்ஸ் மருத்துவக் கல்லூரி நடத்திய சுகாதார ஆராய்ச்சி முறையியல் பட்டறையில் சிறந்த ஆராய்ச்சி கட்டுரை விருது.',
        '2024-ல் கிருஷ்ணகிரி ஹோசூர் CME-ல் சிறந்த கட்டுரை வழங்கல் விருது.',
        '2024-ல் Oncoanaesthesia மற்றும் பெரிஆபரேட்டிவ் கவலை சமூகத்தின் தேசிய மாநாட்டில் இளம் சொற்பொழிவாளர் விருது.',
        '2018-ல் ISACON தேசியத்தில் பெரிஆபரேட்டிவ் புற்றுநோய் சிகிச்சையில் புதிய எல்லைகள் பற்றிய குழுவில் பேனலிஸ்டாக அழைக்கப்பட்டனர்.',
        'தமிழ்நாடு மாநில ISA 2025-ல் நிபுணர் ஆசிரியர்.',
        '2025-ல் சென்னையில் நடைபெற்ற தேசிய மாநாட்டில் Oncoanaesthesia மற்றும் பெரிஆபரேட்டிவ் கவலை சமூகம் நடத்திய வலி பட்டறையில் நிபுணர் ஆசிரியர்.',
        '2024-ல் தஞ்சாவூரில் TN மாநில ISA கூட்டத்தில் அழைக்கப்பட்ட ஆசிரியர்.',
        '2025-ல் சிம்மி புற்றுநோய் நோயாளிகளில் முன்-மறுவாழ்வு திட்டத்திற்காக Rotary Cancer Research Foundation-ஆல் பாராட்டப்பட்டனர்.',
        '2026-ல் ஐதராபாதில் ISSPCON-ல் தலைவலி மருத்துவ முடிவு ஆதரவு கருவியை சரிபார்க்கும் ஆய்விற்கான சிறந்த கட்டுரைக்கு Annacharya Lokapur Foundation விருது.',
      ],
      publicationsTitle: 'வெளியீடுகள்',
      publications: [
        { num: '01', authors: 'Prasanna Vani Vanamail, Kalpana Balakrishnan.', title: 'எலும்பு கட்டிகளுக்கான குளிர்சிகிச்சையின் சாத்தியமான சிக்கலாக நைட்ரஜன் வாயு தகர்வு.', journal: 'Anaesthesia Cases/ 2017- 0244/ISSN 2396-8397' },
        { num: '02', authors: 'Sundararajan L, Vanamail Prasanna Vani.', title: 'குழந்தை சிகிச்சையில் கடல் வலி நிவாரணத்திற்கு levobupivacaine மற்றும் rac-bupivacaine ஒப்பீட்டு ஆய்வு.', journal: 'J. Evolution Med. Dent. Sci. 2018;7(11):0000-0000, DOI:10.14260/jemds/2018/0000' },
        { num: '03', authors: 'Vani Vanamail, P., & Balakrishnan, K.', title: 'bleomycin நுரையீரல் காயம் மற்றும் dabigatran சிகிச்சை பெறும் நோயாளியின் சுற்றுவட்ட நிண்ணீர் முடிச்சு அகற்றல்: வழக்கு அறிக்கை.', journal: 'Indian Journal of Case Reports, 5(3), 289-291.' },
        { num: '04', authors: 'Vanamail PV, Dash R, Balakrishnan K.', title: 'மேல் வயிற்று புற்றுநோய் அறுவைகளில் அறுவைக்கு பிந்தைய நிமோனியாவின் வழங்கல், முடிவுகள் மற்றும் தீவிரத்தின் தீர்மானிகள்: பின்நோக்கு பகுப்பாய்வு.', journal: 'Indian J Respir Care 2020;9:52-7' },
        { num: '05', authors: 'Prasanna Vani Vanamail, Radhika Dash, Kalpana Balakrishnan, & Thendral Edwin. (2021).', title: 'தீவிர சிஸ்டெக்டோமியின் போது மீண்டும் மீண்டும் நுரையீரல் இரத்த உறைவு: வழக்கு அறிக்கை.', journal: 'Indian Journal of Case Reports, 260-262.' },
        { num: '06', authors: 'Vanamail PV, Balakrishnan K, Prahlad S, Chockalingam P, Dash R, Soundararajan DK.', title: 'மேல் வயிற்று அறுவையில் உதரவிதான உத்வேக அலைப்பரப்பின் அல்ட்ராசோனிக் மதிப்பீடு மற்றும் அறுவைக்கு பிந்தைய நுரையீரல் சிக்கல்களுடன் தொடர்பு.', journal: 'Indian J Crit Care Med 2021; 25 (9):1031-1039.' },
      ],
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
      locationAddress: '9/1 Colony, West Link Road (35A), Co-operative Colony, Krishnagiri – 635001',
      phoneTitle: 'Direct Lines',
      phoneSub: 'Emergency: 24 / 7',
      digitalTitle: 'Digital Support',
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
            { days: 'Sunday',    time: '9 AM – 1 PM'  },
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
      body: 'நிபுணத்துவ நரம்பு-முதுகெலும்பு சிகிச்சை மற்றும் மேம்பட்ட வலி மேலாண்மை. ஆலோசனை அல்லது அவசர உதவிக்கு எங்கள் மருத்துவ குழுவை தொடர்பு கொள்ளுங்கள்.',
      specialtiesLabel: 'எங்கள் சிறப்பு துறைகள்',
      specialties: ['நரம்பியல் அறுவை', 'முதுகெலும்பு மேலாண்மை', 'நாள்பட்ட வலி', 'இயற்பியல் சிகிச்சை', 'அவசர சிகிச்சை'],
      accreditationsLabel: 'அங்கீகாரங்கள்',
      accreditations: [
        { icon: 'verified',          label: 'NABH அங்கீகரிக்கப்பட்டது' },
        { icon: 'workspace_premium', label: 'ISO 9001:2015' },
        { icon: 'emergency',         label: '24 / 7 அவசர சேவை' },
      ],
    },
    cards: {
      locationTitle: 'இடம்',
      locationAddress: '9/1 காலனி, வெஸ்ட் லிங்க் ரோடு (35A), கோ-ஆபரேட்டிவ் காலனி, கிருஷ்ணகிரி – 635001',
      phoneTitle: 'நேரடி தொலைபேசி',
      phoneSub: 'அவசர சேவை: 24 / 7',
      digitalTitle: 'டிஜிட்டல் ஆதரவு',
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
            { days: 'ஞாயிறு',        time: 'காலை 9 – பகல் 1'   },
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
      vision: 'Restoring lives through excellence in Neuro Spine and pain care',
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
      badges: ['NABH Standards', 'Surgical Safety Protocol', 'Infection Control Excellence'],
    },
  },

  ta: {
    hero: {
      eyebrow: 'JP Neuro Spine Hospital and Pain Management Centre',
      visionLabel: 'எங்கள் நோக்கு',
      vision: 'நரம்பு-முதுகெலும்பு மற்றும் வலி சிகிச்சையில் சிறப்பின் மூலம் வாழ்க்கையை மீட்டெடுத்தல்',
      missionLabel: 'எங்கள் நோக்கம்',
      mission: 'மருத்துவ சிறப்பு, மேம்பட்ட தொழில்நுட்பம் மற்றும் கரிசனமான சிகிச்சை மூலம் நெறிமுறை, ஆதாரம் சார்ந்த மற்றும் நோயாளி மையமான நரம்பு-முதுகெலும்பு மற்றும் வலி மேலாண்மை சேவைகளை வழங்குதல்.',
      cta: 'அழைத்து சந்திப்பு பதிவு செய்க',
      cta2: 'எங்கள் சேவைகள்',
      quote: '"ஒவ்வொரு அறுவையிலும் சிறப்பு, ஒவ்வொரு தொடர்பிலும் இரக்கம்."',
      facilities: [
        { icon: 'emergency',        label: 'தீவிர சிகிச்சை' },
        { icon: 'neurology',        label: 'மூளை & முதுகெலும்பு அறுவை' },
        { icon: 'medical_services', label: 'வலி மேலாண்மை' },
        { icon: 'self_improvement', label: 'இயற்பியல் சிகிச்சை' },
      ],
      valuesLabel: 'முக்கிய மதிப்பீடுகள்',
      values: [
        { icon: 'workspace_premium', title: 'மருத்துவ சிறப்பு', body: 'ஆதாரம் சார்ந்த சிகிச்சை, தொடர்ச்சியான கற்றல் மற்றும் விளைவு சார்ந்த சிகிச்சை மூலம் மருத்துவ நடைமுறையின் உயர்ந்த தரங்களை நாங்கள் கடைப்பிடிக்கிறோம்.' },
        { icon: 'volunteer_activism', title: 'கரிசனம் & மரியாதை', body: 'நரம்பு மற்றும் வலி கோளாறுகளின் உடல் மற்றும் உணர்வு தாக்கத்தை அங்கீகரித்து, ஒவ்வொரு நோயாளியையும் பச்சாதாபம், மரியாதை மற்றும் உணர்திறனுடன் நடத்துகிறோம்.' },
        { icon: 'verified_user', title: 'நேர்மை & நெறிமுறை', body: 'வெளிப்படையான தகவல் தொடர்பு, நெறிமுறை முடிவெடுத்தல் மற்றும் எல்லா நேரத்திலும் பொறுப்பான மருத்துவ நடைமுறைக்கு நாங்கள் உறுதிப்படுத்தப்பட்டுள்ளோம்.' },
        { icon: 'person_check', title: 'நோயாளி மையமான சிகிச்சை', body: 'சிறந்த முடிவுகளை உறுதி செய்ய தனிப்பயன் சிகிச்சை திட்டங்கள், தகவலறிந்த ஒப்புதல் மற்றும் கூட்டு முடிவெடுத்தலை முன்னுரிமைப்படுத்துகிறோம்.' },
        { icon: 'lightbulb', title: 'கண்டுபிடிப்பு & தொடர்ச்சியான மேம்பாடு', body: 'நோயாளி பாதுகாப்பு மற்றும் மீட்பை தொடர்ச்சியாக மேம்படுத்த மேம்பட்ட தொழில்நுட்பம் மற்றும் மாறும் மருத்துவ நெறிமுறைகளை நாங்கள் பின்பற்றுகிறோம்.' },
        { icon: 'groups', title: 'குழுப்பணி & ஒத்துழைப்பு', body: 'ஒவ்வொரு நோயாளிக்கும் தடையற்ற, ஒருங்கிணைந்த சிகிச்சை வழங்க பல்துறை குழுப்பணி, பரஸ்பர மரியாதை மற்றும் ஒன்றிணைந்த நோக்கத்தின் கலாச்சாரத்தை வளர்க்கிறோம்.' },
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
      heading: 'உலகத்தரமான சிறப்பு சேவைகள்',
      body: 'எங்கள் சிறப்பின் முக்கிய தூண்கள் கூர்மையான அறுவை சிகிச்சை தலையீட்டிலிருந்து சிறப்பு வலி மீட்புவரை தடையற்ற மாற்றத்தை வழங்குகின்றன.',
      neuro: {
        title: 'நரம்பியல் அறுவை சிகிச்சை',
        body: 'நரம்பு வழிசெலுத்தல் தொழில்நுட்பம் பயன்படுத்தி மைக்ரோ-டிஸ்கெக்டோமி, மூளை கட்டி அகற்றல் மற்றும் சிக்கலான முதுகெலும்பு கருவி வைப்பில் நிபுணத்துவம்.',
        list: ['முதுகெலும்பு காயம் சிகிச்சை', 'மூளை மற்றும் நரம்பு கோளாறுகள்', 'குழந்தை நரம்பியல் அறுவை சிகிச்சை'],
        cta: 'துறையை ஆராயுங்கள்',
      },
      pain: {
        title: 'வலி மருத்துவம்',
        body: 'நாள்பட்ட வலிக்கான பல்துறை அணுகுமுறை — தலையீட்டு நடைமுறைகள், இயற்பியல் சிகிச்சை மற்றும் மருந்தியல் மேலாண்மை நெறிமுறைகளைப் பயன்படுத்துகிறது.',
        list: ['தலையீட்டு வலி சிகிச்சை', 'மீளுருவாக்க சிகிச்சைகள்', 'உடல் மறுவாழ்வு'],
        cta: 'துறையை ஆராயுங்கள்',
      },
    },
    testimonials: {
      heading: 'குணமடைந்த கதைகள்',
      sub: 'எங்கள் நோயாளிகளின் நன்றி மற்றும் மீட்பின் குரல்கள்.',
      items: [
        {
          initials: 'P',
          name: 'பிரபா',
          role: 'முதுகெலும்பு அறுவை சிகிச்சை நோயாளி',
          quote: 'பல வருட கொடுமையான முதுகுவலிக்குப் பிறகு, JP Neuro Spine Hospital and Pain Management Centre குழு என் வாழ்க்கையை திரும்பி தந்தது. அறுவை சிகிச்சையின் துல்லியம் மற்றும் மீட்பு காலத்தில் கிடைத்த சிகிச்சை உலகத்தரமானது.',
        },
        {
          initials: 'S',
          name: 'ஷினு',
          role: 'நாள்பட்ட வலி மேலாண்மை',
          quote: 'இங்குள்ள மருத்துவர்கள் நிபுணர்கள் மட்டுமல்ல, இரக்கத்துடன் கேட்பவர்களும் கூட. என் நிலைமையை எளிய வார்த்தைகளில் விளக்கி, எல்லா பொறுமையுடனும் வலி மேலாண்மையில் வழிகாட்டினார்கள்.',
        },
        {
          initials: 'JV',
          name: 'ஜே விஜய்',
          role: 'குடும்பத்தினர்',
          quote: 'அவசர நரம்பியல் சிகிச்சை என் சகோதரனின் உயிரை காப்பாற்றியது. 24/7 கிடைக்கும் தன்மையும் உடனடி பதிலளிப்பு நேரமும் முக்கியமான காரணிகளாக இருந்தன. நாங்கள் என்றும் நன்றியுள்ளவர்கள்.',
        },
      ],
    },
    accreditation: {
      badge: 'CEA உரிமம்',
      badgeSub: 'மருத்துவமனை பதிவு',
      heading: 'அங்கீகரிக்கப்பட்ட மருத்துவ சிறப்பு',
      body: 'JP Neuro Spine Hospital and Pain Management Centre Clinical Establishment Act (CEA) உரிமம் பெற்ற மருத்துவமனை. இந்த உரிமம் மருத்துவ நெறிமுறைகள், பாதுகாப்பு நெறிமுறைகள் மற்றும் நோயாளி சிகிச்சை உள்கட்டமைப்பில் உயர்ந்த தரத்தை பராமரிப்பதற்கான எங்கள் அர்ப்பணிப்பு ஆகும்.',
      badges: ['NABH தரநிலைகள்', 'அறுவை சிகிச்சை பாதுகாப்பு நெறிமுறை', 'தொற்று கட்டுப்பாடு சிறப்பு'],
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
