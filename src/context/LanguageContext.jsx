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
      { to: '/blog', label: 'Blog' },
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
      { to: '/blog', label: 'கட்டுரைகள்' },
      { to: '/contact-us', label: 'தொடர்பு' },
    ],
    emergency: 'அவசரநிலை',
    bookAppointment: 'சந்திப்பு பதிவு செய்க',
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
        { icon: 'bed',             label: 'ICU Beds',            value: '12 Beds' },
        { icon: 'group',           label: 'Specialists On-Call', value: 'Always Present' },
        { icon: 'local_hospital',  label: 'Response Time',       value: '< 5 Minutes' },
      ],
      emergencyTitle: 'Emergency Line',
      emergencyBody: 'For life-threatening neurological emergencies, call our dedicated ICU hotline immediately.',
      whyTitle: 'Why Our ICU',
      whyPoints: [
        'Board-certified neurointensivists',
        'State-of-the-art ventilator support',
        'Dedicated neuro-monitoring lab',
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
        { icon: 'bed',            label: 'ICU படுக்கைகள்',     value: '12 படுக்கைகள்' },
        { icon: 'group',          label: 'அழைப்பில் நிபுணர்கள்', value: 'எப்போதும் உள்ளனர்' },
        { icon: 'local_hospital', label: 'மறுமொழி நேரம்',      value: '< 5 நிமிடங்கள்' },
      ],
      emergencyTitle: 'அவசர தொடர்பு',
      emergencyBody: 'உயிர் அச்சுறுத்தும் நரம்பியல் அவசரநிலைகளுக்கு, எங்கள் ICU நேரடி தொலைபேசியில் உடனே அழையுங்கள்.',
      whyTitle: 'எங்கள் ICU ஏன்?',
      whyPoints: [
        'சான்றிதழ் பெற்ற நரம்பியல் தீவிர சிகிச்சை நிபுணர்கள்',
        'நவீன சுவாச கருவி ஆதரவு',
        'அர்ப்பணிக்கப்பட்ட நரம்பு கண்காணிப்பு ஆய்வகம்',
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
      body1: 'JP Neuro-Spine Hospital was founded with a clear purpose to make advanced neurological and spine care accessible to every individual who needs it. We believe that expertise and innovation should not be limited by geography, and that every patient deserves access to world-class treatment.',
      body2: 'Our approach combines cutting-edge technology with a team of highly skilled specialists who are dedicated to precision, safety, and long-term recovery. From diagnosis to rehabilitation, every step is designed to ensure confidence, clarity, and comfort for our patients and their families.',
      quote: '"Precision in surgery, compassion in care."',
      quoteCaption: 'Guiding every patient interaction.',
    },
    visionMission: {
      statsLabel: 'Years of Clinical Excellence',
      visionTitle: 'Our Vision',
      visionBody: 'Restoring lives through excellence in neuro-spine and pain care.',
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
      body: 'JP Neuro-Spine Hospital operates under strict compliance with medical standards. We are proud to be a CEA Licensed facility, ensuring the highest level of safety and operational integrity for our patients.',
      license: 'CEA License No: CEA-HOSP-2024-0012',
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
      body1: 'JP Neuro-Spine மருத்துவமனை, நரம்பியல் மற்றும் முதுகெலும்பு சிகிச்சையை தேவைப்படும் ஒவ்வொருவருக்கும் எட்டும் தூரத்தில் கொண்டு வர வேண்டும் என்ற தெளிவான நோக்கத்துடன் நிறுவப்பட்டது. நிபுணத்துவமும் கண்டுபிடிப்பும் புவியியல் வரம்புகளால் கட்டுப்படுத்தப்படக்கூடாது என்று நம்புகிறோம்.',
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
      heading: 'முழுமையாக உரிமம் பெற்றது & அங்கீகரிக்கப்பட்டது',
      body: 'JP Neuro-Spine மருத்துவமனை மருத்துவ தரங்களுக்கு கண்டிப்பான இணக்கத்துடன் செயல்படுகிறது. CEA உரிமம் பெற்ற நிறுவனமாக, நோயாளிகளுக்கு உயர்ந்த பாதுகாப்பு மற்றும் செயல்பாட்டு ஒழுங்கமைப்பை உறுதி செய்கிறோம்.',
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
      body: 'At JP Neuro-Spine, we blend surgical precision with compassionate care, providing a holistic healing environment for complex neurological and spine conditions.',
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
      dailySession: 'Daily Session',
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
        { title: 'Specialized ICU',       desc: '3-bed specialized intensive care unit equipped for critical neuro-spine recovery and post-operative monitoring.' },
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
      body: 'JP Neuro-Spine-ல், நாங்கள் அறுவை சிகிச்சை துல்லியத்தை இரக்கமான சிகிச்சையுடன் இணைத்து, சிக்கலான நரம்பியல் மற்றும் முதுகெலும்பு நிலைமைகளுக்கு முழுமையான குணமடையும் சூழலை வழங்குகிறோம்.',
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
      opdTimes: ['Mon – Sat · 4 PM – 9 PM', 'Sun · 9 AM – 1 PM'],
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
      opdTimes: ['திங்கள் – சனி · மாலை 4 – 9 மணி', 'ஞாயிறு · காலை 9 – பகல் 1 மணி'],
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
      body: 'Expert neuro-spine care and advanced pain management. Reach out to our clinical team for consultations or emergency assistance.',
      specialtiesLabel: 'Our Specialties',
      specialties: ['Neuro Surgery', 'Spine Management', 'Chronic Pain', 'Physiotherapy', 'Emergency Care'],
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
      heading: 'Hospital Hours',
      sub: 'Operational timings',
      rows: [
        { label: 'Outpatient (OPD)', time: '9 AM – 8 PM',      icon: 'local_hospital', sub: 'Mon – Sat',       highlight: false },
        { label: 'Emergency',        time: '24 Hrs / 7 Days',  icon: 'emergency',      sub: 'Always open',     highlight: true  },
        { label: 'Surgery',          time: 'By Appointment',   icon: 'calendar_month', sub: 'Pre-booked only', highlight: false },
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
      heading: 'மருத்துவமனை நேரங்கள்',
      sub: 'செயல்பாட்டு நேரங்கள்',
      rows: [
        { label: 'வெளி நோயாளர் (OPD)', time: 'காலை 9 – இரவு 8',  icon: 'local_hospital', sub: 'திங்கள் – சனி',      highlight: false },
        { label: 'அவசர சிகிச்சை',      time: '24 மணி / 7 நாள்',  icon: 'emergency',      sub: 'எப்போதும் திறந்தது', highlight: true  },
        { label: 'அறுவை சிகிச்சை',     time: 'முன்பதிவு மட்டும்', icon: 'calendar_month', sub: 'முன்பதிவு அவசியம்',  highlight: false },
      ],
    },
  },
};

// ─── Home page translations ───────────────────────────────────────────────────
export const homeTranslations = {
  en: {
    hero: {
      eyebrow: 'JP Neuro-Spine Hospital & Pain Management Centre',
      visionLabel: 'Our Vision',
      vision: 'Restoring lives through excellence in neuro-spine and pain care',
      missionLabel: 'Our Mission',
      mission: 'To deliver ethical, evidence-based, and patient-centric neuro-spine and pain management services through clinical excellence, advanced technology, and compassionate care.',
      cta: 'Call to Book Appointment',
      cta2: 'Our Services',
      quote: '"Excellence in every incision, compassion in every interaction."',
      facilities: [
        { icon: 'emergency',        label: 'Critical Care' },
        { icon: 'neurology',        label: 'Brain & Spine Surgery' },
        { icon: 'medical_services', label: 'Pain Management' },
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
          quote: 'After years of debilitating back pain, the team at JP Neuro-Spine gave me my life back. The precision of the surgery and the care during recovery was world-class.',
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
      body: 'JP Neuro-Spine Hospital and Pain Management Centre is a Clinical Establishment Act (CEA) licensed hospital. This license is our commitment to maintaining the highest standards of medical ethics, safety protocols, and patient care infrastructure.',
      badges: ['NABH Standards', 'Surgical Safety Protocol', 'Infection Control Excellence'],
    },
  },

  ta: {
    hero: {
      eyebrow: 'JP நரம்பு-முதுகெலும்பு மருத்துவமனை & வலி மேலாண்மை மையம்',
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
          quote: 'பல வருட கொடுமையான முதுகுவலிக்குப் பிறகு, JP Neuro-Spine குழு என் வாழ்க்கையை திரும்பி தந்தது. அறுவை சிகிச்சையின் துல்லியம் மற்றும் மீட்பு காலத்தில் கிடைத்த சிகிச்சை உலகத்தரமானது.',
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
      body: 'JP Neuro-Spine மருத்துவமனை மற்றும் வலி மேலாண்மை மையம் Clinical Establishment Act (CEA) உரிமம் பெற்ற மருத்துவமனை. இந்த உரிமம் மருத்துவ நெறிமுறைகள், பாதுகாப்பு நெறிமுறைகள் மற்றும் நோயாளி சிகிச்சை உள்கட்டமைப்பில் உயர்ந்த தரத்தை பராமரிப்பதற்கான எங்கள் அர்ப்பணிப்பு ஆகும்.',
      badges: ['NABH தரநிலைகள்', 'அறுவை சிகிச்சை பாதுகாப்பு நெறிமுறை', 'தொற்று கட்டுப்பாடு சிறப்பு'],
    },
  },
};
