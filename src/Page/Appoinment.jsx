import { useState } from 'react';

// OPD schedule: day index (0=Sun … 6=Sat) → available slots with exact times
const DOCTOR_SCHEDULE = {
  'Dr. Jayakumar P': {
    0: [{ slot: 'Morning Slot', time: '9:00 AM – 1:00 PM' }],
    1: [{ slot: 'Evening Slot', time: '4:00 PM – 9:00 PM' }],
    2: [{ slot: 'Evening Slot', time: '4:00 PM – 9:00 PM' }],
    3: [{ slot: 'Evening Slot', time: '4:00 PM – 9:00 PM' }],
    4: [{ slot: 'Evening Slot', time: '4:00 PM – 9:00 PM' }],
    5: [{ slot: 'Evening Slot', time: '4:00 PM – 9:00 PM' }],
    6: [{ slot: 'Evening Slot', time: '4:00 PM – 9:00 PM' }],
  },
  'Dr. Prasanna Vani V': {
    0: [],
    1: [{ slot: 'Morning Slot', time: '10:00 AM – 1:00 PM' }],
    2: [{ slot: 'Morning Slot', time: '10:00 AM – 1:00 PM' }],
    3: [{ slot: 'Morning Slot', time: '10:00 AM – 1:00 PM' }],
    4: [{ slot: 'Morning Slot', time: '10:00 AM – 1:00 PM' }],
    5: [{ slot: 'Morning Slot', time: '10:00 AM – 1:00 PM' }],
    6: [],
  },
};

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DEFAULT_TIMES = { 'Morning Slot': '9:00 AM – 1:00 PM', 'Evening Slot': '4:00 PM – 9:00 PM' };
const ALL_SLOTS = ['Morning Slot', 'Evening Slot'];

export default function Appoinment() {
  const [formData, setFormData] = useState({
    patientName: '',
    countryCode: '+91',
    phoneNumber: '',
    department: '',
    specialist: '',
    preferredDate: '',
    timeSlot: '',
    reason: ''
  });

  const DEPARTMENT_SPECIALIST = {
    'Neurosurgery': 'Dr. Jayakumar P',
    'Pain Medicine': 'Dr. Prasanna Vani V',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updates = { [name]: value };
    if (name === 'department') {
      updates.specialist = DEPARTMENT_SPECIALIST[value] || '';
      updates.timeSlot = '';
    }
    if (name === 'preferredDate') updates.timeSlot = '';
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const getSlotInfo = () => {
    if (!formData.specialist) {
      return ALL_SLOTS.map(slot => ({ slot, available: true, time: DEFAULT_TIMES[slot], reason: '' }));
    }

    const schedule = DOCTOR_SCHEDULE[formData.specialist];

    if (!formData.preferredDate) {
      const slotMap = {};
      Object.values(schedule).flat().forEach(({ slot, time }) => { slotMap[slot] = time; });
      return ALL_SLOTS.map(slot => ({
        slot,
        available: !!slotMap[slot],
        time: slotMap[slot] || DEFAULT_TIMES[slot],
        reason: slotMap[slot] ? '' : "Not in this specialist's schedule",
      }));
    }

    const day = new Date(formData.preferredDate + 'T12:00:00').getDay();
    const daySlots = schedule[day] || [];
    const daySlotMap = {};
    daySlots.forEach(({ slot, time }) => { daySlotMap[slot] = time; });
    const docFirstName = formData.specialist.split(' ')[1];

    return ALL_SLOTS.map(slot => ({
      slot,
      available: !!daySlotMap[slot],
      time: daySlotMap[slot] || DEFAULT_TIMES[slot],
      reason: daySlotMap[slot] ? '' :
        daySlots.length === 0
          ? `Dr. ${docFirstName} is not available on ${DAY_NAMES[day]}s`
          : `No ${slot.toLowerCase()} on ${DAY_NAMES[day]}s`,
    }));
  };

  const getDateLabel = () => {
    if (!formData.preferredDate) return null;
    const day = new Date(formData.preferredDate + 'T12:00:00').getDay();
    return { dayName: DAY_NAMES[day], isWeekend: day === 0 || day === 6 };
  };

  const slotInfo = getSlotInfo();
  const dateLabel = getDateLabel();

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    if (!formData.patientName || !formData.phoneNumber || !formData.department || !formData.timeSlot) {
      alert('Please fill in Patient Name, Phone Number, Department, and Preferred Time');
      return;
    }

    const message = `
 *NEW APPOINTMENT REQUEST*

 *Patient Details:*
Name: ${formData.patientName}
Phone: ${formData.countryCode} ${formData.phoneNumber}

 *Department:* ${formData.department}
${formData.specialist ? ` *Preferred Specialist:* ${formData.specialist}` : ''}

 *Preferred Date:* ${formData.preferredDate || 'Not specified'}
 *Preferred Time:* ${formData.timeSlot || 'Not specified'}

 *Reason for Consultation:*
${formData.reason || 'Not provided'}
    `.trim();

    const clinicWhatsAppNumber = '919585221288';
    const whatsappURL = `https://wa.me/${clinicWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');

    setFormData({
      patientName: '',
      countryCode: '+91',
      phoneNumber: '',
      department: '',
      specialist: '',
      preferredDate: '',
      timeSlot: '',
      reason: ''
    });
  };

  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col mt-16 sm:mt-20">
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-8 sm:pt-12 pb-6">

        {/* Left: Form Section */}
        <section className="lg:col-span-8">
          <header className="mb-7 sm:mb-10">
            <h1 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-primary mb-2 sm:mb-3">
              Book Your Consultation
            </h1>
            <p className="text-on-surface-variant text-base sm:text-lg max-w-2xl">
              Secure your appointment with our leading specialists in
              neurosurgery and pain management. Our team is committed to your
              recovery journey.
            </p>
          </header>

          <div className="bg-white rounded-xl p-5 sm:p-8 md:p-10 shadow-[0_20px_40px_rgba(20,37,136,0.04)] border border-outline-variant/10">
            <form className="space-y-6 sm:space-y-8" onSubmit={handleWhatsAppSubmit}>
              {/* Patient Identity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="font-headline text-xs sm:text-sm font-bold text-primary tracking-wide uppercase">
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    placeholder="Enter Full Name"
                    className="bg-surface-container-high border-b-2 border-outline-variant focus:border-primary focus:bg-surface-container outline-none p-3 sm:p-4 rounded-t-lg font-medium text-on-surface transition-all duration-200 text-sm sm:text-base"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-headline text-xs sm:text-sm font-bold text-primary tracking-wide uppercase">
                    Phone Number *
                  </label>
                  <div className="flex">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="bg-surface-container-high border-b-2 border-r-2 border-outline-variant/20 focus:border-primary outline-none w-20 sm:w-24 p-3 sm:p-4 rounded-tl-lg font-medium transition-all duration-200 text-sm"
                    >
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                    </select>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Mobile Number"
                      className="bg-surface-container-high border-b-2 border-outline-variant focus:border-primary focus:bg-surface-container outline-none flex-grow p-3 sm:p-4 rounded-tr-lg font-medium transition-all duration-200 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Department & Specialist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="font-headline text-xs sm:text-sm font-bold text-primary tracking-wide uppercase">
                    Department *
                  </label>
                  <div className="relative">
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-high border-b-2 border-outline-variant focus:border-primary outline-none p-3 sm:p-4 pr-10 rounded-t-lg font-medium transition-all duration-200 appearance-none cursor-pointer text-sm sm:text-base"
                      required
                    >
                      <option disabled value="">Select Department</option>
                      <option>Neurosurgery</option>
                      <option>Pain Medicine</option>
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary text-base">expand_more</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-headline text-xs sm:text-sm font-bold text-primary tracking-wide uppercase">
                    Specialist
                  </label>
                  <div className={`flex items-center gap-3 p-3 sm:p-4 rounded-t-lg border-b-2 transition-all duration-200 ${formData.specialist ? 'bg-primary/5 border-primary' : 'bg-surface-container-high border-outline-variant/30'}`}>
                    <span className="material-symbols-outlined text-base text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                    <span className={`font-medium text-xs sm:text-sm ${formData.specialist ? 'text-primary font-bold' : 'text-on-surface-variant/50'}`}>
                      {formData.specialist || 'Auto-assigned on department selection'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Scheduling */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="font-headline text-xs sm:text-sm font-bold text-primary tracking-wide uppercase">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="bg-surface-container-high border-b-2 border-outline-variant focus:border-primary focus:bg-surface-container outline-none p-3 sm:p-4 rounded-t-lg font-medium transition-all duration-200 text-sm sm:text-base"
                  />
                  {dateLabel && (
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full w-fit ${dateLabel.isWeekend ? 'bg-tertiary-fixed/40 text-tertiary' : 'bg-primary-fixed/40 text-primary'}`}>
                      {dateLabel.isWeekend ? '☀ Weekend' : '◈ Weekday'} — {dateLabel.dayName}
                    </span>
                  )}
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-headline text-xs sm:text-sm font-bold text-primary tracking-wide uppercase">
                    Preferred Time *
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {slotInfo.map(({ slot, available, time, reason }) => (
                      <label key={slot} className={available ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}>
                        <input
                          type="radio"
                          name="timeSlot"
                          value={slot}
                          checked={formData.timeSlot === slot}
                          onChange={handleInputChange}
                          disabled={!available}
                          className="sr-only peer"
                        />
                        <div className={`p-2.5 sm:p-3 text-center rounded-lg border-2 transition-all select-none
                          ${!available
                            ? 'border-outline-variant/20 bg-surface-container-high/50'
                            : 'border-outline-variant/30 peer-checked:border-primary peer-checked:text-primary peer-checked:bg-primary/5'
                          }`}
                        >
                          <p className={`text-xs sm:text-sm font-bold ${!available ? 'text-on-surface-variant/40' : 'text-on-surface-variant peer-checked:text-primary'}`}>
                            {slot}
                          </p>
                          <p className={`text-[9px] sm:text-[10px] font-semibold mt-0.5 ${!available ? 'text-on-surface-variant/30' : 'text-primary/70'}`}>
                            {available ? time : reason}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reason */}
              <div className="flex flex-col space-y-2">
                <label className="font-headline text-xs sm:text-sm font-bold text-primary tracking-wide uppercase">
                  Brief Reason for Consultation
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Describe your symptoms or reason for visit..."
                  className="bg-surface-container-high border-b-2 border-outline-variant focus:border-primary focus:bg-surface-container outline-none p-3 sm:p-4 rounded-t-lg font-medium resize-none transition-all duration-200 text-sm sm:text-base"
                />
              </div>

              {/* CTA */}
              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  className="w-full text-white py-4 sm:py-5 rounded-lg font-headline font-bold text-base sm:text-lg tracking-wide uppercase hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_10px_20px_rgba(20,37,136,0.15)] flex items-center justify-center gap-3"
                  style={{
                    background: "linear-gradient(135deg, #142588 0%, #303f9f 100%)",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    chat
                  </span>
                  Book Appointment
                </button>
                <p className="text-center mt-3 sm:mt-4 text-xs text-on-surface-variant font-medium flex items-center justify-center gap-2">
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    lock
                  </span>
                  Secure &amp; Confidential Patient Portal
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* Right: Sidebar — appears after form on mobile, beside on lg+ */}
        <aside className="lg:col-span-4 space-y-5 sm:space-y-6 lg:mt-32">
          {/* Emergency Support */}
          <div className="bg-tertiary-fixed p-6 sm:p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-5xl sm:text-6xl text-tertiary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                medical_services
              </span>
            </div>
            <h3 className="font-headline font-extrabold text-tertiary-container text-lg sm:text-xl mb-2 flex items-center gap-2">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                emergency
              </span>
              Emergency Helpline
            </h3>
            <p className="text-on-tertiary-fixed-variant text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Available 24/7 for critical trauma and neuro emergencies.
            </p>
            <div className="text-2xl sm:text-3xl font-black text-tertiary-container tracking-tighter">
              04343-239923
            </div>
          </div>

          {/* OPD Hours */}
          <div className="bg-surface-container-low p-6 sm:p-8 rounded-xl">
            <h3 className="font-headline font-bold text-primary text-base sm:text-lg mb-5 sm:mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">schedule</span>
              OPD Consulting Hours
            </h3>
            <div className="space-y-5 sm:space-y-6">
              <div className="border-l-4 border-secondary pl-4 py-1">
                <div className="font-bold text-on-surface text-sm sm:text-base">Dr. Jayakumar P</div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-secondary mt-1">
                  Neurosurgery
                </div>
                <div className="text-xs sm:text-sm text-on-surface-variant mt-2 flex justify-between">
                  <span>Mon - Sat</span>
                  <span className="font-semibold">4:00 PM - 9:00 PM</span>
                </div>
                <div className="text-xs sm:text-sm text-on-surface-variant mt-1 flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">9:00 AM - 1:00 PM</span>
                </div>
              </div>
              <div className="border-l-4 border-primary-container pl-4 py-1">
                <div className="font-bold text-on-surface text-sm sm:text-base">Dr. Prasanna Vani V</div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary-container mt-1">
                  Pain Medicine
                </div>
                <div className="text-xs sm:text-sm text-on-surface-variant mt-2 flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="font-semibold">10:00 AM - 1:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
            {[
              {
                icon: "verified_user",
                title: "Secure & Confidential",
                desc: "Your health data is encrypted and safe.",
              },
              {
                icon: "workspace_premium",
                title: "Clinical Excellence",
                desc: "Led by world-class neuro specialists.",
              },
              {
                icon: "privacy_tip",
                title: "Patient Privacy Guaranteed",
                desc: "We strictly follow HIPAA compliance.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3 sm:gap-4 group">
                <div className="bg-secondary-container/30 p-2.5 sm:p-3 rounded-full group-hover:bg-secondary-container transition-colors flex-shrink-0">
                  <span
                    className="material-symbols-outlined text-secondary text-base sm:text-xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {icon}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-on-surface">{title}</div>
                  <p className="text-xs text-on-surface-variant">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
