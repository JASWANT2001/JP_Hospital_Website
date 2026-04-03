import React from 'react';
import { Calendar, Clock, Users, Activity, Brain, Zap, Award, MapPin, Phone, Mail } from 'lucide-react';

export default function NeuroSpineWebsite() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className="w-8 h-8 text-blue-900" />
              <span className="text-2xl font-bold text-blue-900">JF Neuro-Spine</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">About Us</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Departments</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Doctors</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Patient Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Contact</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                <div className="font-semibold">EMERGENCY 24/7</div>
                <div className="text-blue-900 font-bold">+62492 73910212</div>
              </div>
              <button className="bg-blue-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide">
                <Activity className="w-4 h-4 inline mr-2" />
                CSR LICENSED INSTITUTIONS
              </div>
              
              <div className="text-sm text-gray-600 uppercase tracking-wider font-semibold">
                NEURO-SPINE NEUROSURGERY & PAIN MANAGEMENT CENTRE
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight">
                Precision Care<br />
                For Your <span className="text-orange-500">Spine &<br />Mind.</span>
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                Combining neurosurgical excellence with compassionate pain management, JF Neuro-Spine isn't just treat symptoms—we restore quality of life to every advanced surgical intervention to specialized pain recovery.
              </p>
              
              <div className="flex items-center space-x-4 pt-4">
                <button className="bg-blue-900 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </button>
                <button className="text-blue-900 px-6 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center space-x-2">
                  <span>Our Services</span>
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-80 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  <div className="text-center space-y-4 relative z-10">
                    <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                      <Activity className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-white font-medium">Operating Room Excellence</div>
                  </div>
                </div>
                <div className="mt-6 bg-white rounded-xl p-4 shadow-lg">
                  <p className="text-sm text-gray-700 italic">
                    "Excellence in every decision, compassion in every interaction."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">24/7 Services</h3>
            <p className="text-gray-600 leading-relaxed">
              Round-the-clock emergency neurosurgical support and critical care available round the clock for urgent interventions.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Expert Care</h3>
            <p className="text-gray-600 leading-relaxed">
              Led by world consultants with decades of experience in complex spine surgeries and neurological care.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Patient-Centric</h3>
            <p className="text-gray-600 leading-relaxed">
              Personalized recovery pathways designed around your comfort, lifestyle, and long-term wellness.
            </p>
          </div>
        </div>
      </section>

      {/* World-Class Specializations */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">World-Class Specializations</h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Our core pillars of excellence provide a seamless transition from acute surgical intervention to specialized pain recovery.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Neurosurgery Card */}
          <div className="bg-blue-900 rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all">
            <div className="h-64 bg-gradient-to-br from-blue-800 to-blue-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <Brain className="w-20 h-20 text-white/80 mx-auto mb-4" />
                  <div className="text-white/60 text-sm uppercase tracking-wider">Advanced Imaging</div>
                </div>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Neurosurgery</h3>
              </div>
              
              <p className="text-blue-100 leading-relaxed">
                Specialised for in neuro-disorders, brain tumor excisions, and complex spinal interventions using state-of-the-art neuro-navigation and minimally invasive techniques.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center text-blue-100">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                  <span>Spine Trauma Care</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                  <span>Brain & Nerve Disorders</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                  <span>Pediatric Neurosurgery</span>
                </div>
              </div>
              
              <button className="text-orange-500 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all">
                <span>Explore Department</span>
                <span>→</span>
              </button>
            </div>
          </div>
          
          {/* Pain Medicine Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group hover:shadow-3xl transition-all">
            <div className="h-64 bg-gradient-to-br from-teal-400 to-teal-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <Zap className="w-20 h-20 text-white/80 mx-auto mb-4" />
                  <div className="text-white/80 text-sm uppercase tracking-wider">Advanced Pain Therapy</div>
                </div>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Pain Medicine</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Multidisciplinary approach to chronic pain, utilizing interventional procedures, regenerative medicine, and pharmacological management protocols.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                  <span>Interventional Pain Care</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                  <span>Regenerative Therapies</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                  <span>Physical Rehabilitation</span>
                </div>
              </div>
              
              <button className="text-orange-500 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all">
                <span>Explore Department</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Healing Stories - Testimonials */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Healing Stories</h2>
            <p className="text-blue-200 text-lg">Voices of recovery and gratitude from our patients.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-orange-400 text-4xl mb-4">"</div>
              <p className="text-white leading-relaxed mb-6 italic">
                "After years of debilitating back pain, I've been at JP Neuro-Spine gave me my life back. The precision of the surgery and the compassion of the team were second to none."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  I
                </div>
                <div>
                  <div className="text-white font-semibold">Indira</div>
                  <div className="text-blue-300 text-sm">Chennai, Tamil Nadu</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-orange-400 text-4xl mb-4">"</div>
              <p className="text-white leading-relaxed mb-6 italic">
                "The doctors here are not just experts; they are compassionate healers. They explained my condition in simple terms and the pain management with immense patience."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <div className="text-white font-semibold">Sthnu</div>
                  <div className="text-blue-300 text-sm">Madurai, Tamil Nadu</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-orange-400 text-4xl mb-4">"</div>
              <p className="text-white leading-relaxed mb-6 italic">
                "Emergency neuro-care saved my brother's life. The 24/7 availability and immediate response time were critical factors. We are forever grateful."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  V
                </div>
                <div>
                  <div className="text-white font-semibold">J Vijay</div>
                  <div className="text-blue-300 text-sm">Trichy, Tamil Nadu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognized Clinical Excellence */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Recognized Clinical Excellence</h2>
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-12">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-900">CSR LICENSED</div>
                <div className="text-gray-600">Regulated, Trusted Partner</div>
              </div>
            </div>
            
            <div className="text-center md:text-left max-w-2xl">
              <p className="text-gray-700 leading-relaxed">
                JF Neuro-Spine is certified by the Clinical Establishment Act (CEA) and licensed hospital. This license is our commitment to maintaining the highest standards of medical ethics, safety protocols, and patient care infrastructure.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-orange-200">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-semibold text-gray-700">NABH Healthcare</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-semibold text-gray-700">Surgical Safety Protocol</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-semibold text-gray-700">Infection Control Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Activity className="w-6 h-6" />
                <span className="text-xl font-bold">JF Neuro-Spine</span>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                JF Neuro-Spine Neurosurgery and Pain Management Centre, Thiagarar Salai, Madurai - 625001
              </p>
            </div>
            
            {/* Contact Us */}
            <div>
              <h3 className="font-bold text-lg mb-4">CONTACT US</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="text-blue-200">Address: 123 Chest Mw, Bravdozo, GSA 54210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-blue-200">Phone: +6142-239813</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-blue-200">Email: mail@neurospine.com</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-blue-200 hover:text-white transition-colors">Departments</a>
                <a href="#" className="block text-blue-200 hover:text-white transition-colors">Our Doctors</a>
                <a href="#" className="block text-blue-200 hover:text-white transition-colors">Patient Guide</a>
                <a href="#" className="block text-blue-200 hover:text-white transition-colors">Visitor Information</a>
                <a href="#" className="block text-blue-200 hover:text-white transition-colors">Google Maps</a>
              </div>
            </div>
            
            {/* Accreditation */}
            <div>
              <h3 className="font-bold text-lg mb-4">ACCREDITATION</h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-4">
                © 2025 JF Neuro-Spine Hospital, GSA Licensed
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-300">
              © 2025 JF Neuro-Spine. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
