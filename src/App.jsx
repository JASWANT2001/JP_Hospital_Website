import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

import Navbar from './Component/Navbar';
import ScrollToTop from './Component/ScrollToTop';
import Home from './Page/Home';
import Footer from './Component/Footer';
import AboutUs from './Page/AboutUs';
import Neurosurgery from './Page/Departments/Neurosurgery';
import PainMedicine from './Page/Departments/PainMedicine';
import CriticalCare from './Page/Departments/CriticalCare';
import Physiotherapy from './Page/Departments/Physiotherapy';
import Doctors from './Page/Docters';
import PatientServices from './Page/PatientServices';
import Contacts from './Page/Contact';
import Emergency from './Page/Emergency';
import Appointment from './Page/Appoinment';
import PrivacyPolicy from './Page/PrivacyPolicy';

import BlogListing from './Page/BlogListing';
import BlogDetail from './Page/BlogDetail';
import BlogAdmin from './Page/BlogAdmin';

function App() {
  return (
    <LanguageProvider>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/department-services" element={<Navigate to="/departments/neurosurgery" replace />} />
        <Route path="/departments/neurosurgery" element={<Neurosurgery />} />
        <Route path="/departments/pain-medicine" element={<PainMedicine />} />
        <Route path="/departments/critical-care" element={<CriticalCare />} />
        <Route path="/departments/physiotherapy" element={<Physiotherapy />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/patient-services" element={<PatientServices />} />
        <Route path="/contact-us" element={<Contacts />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/book-appoinment" element={<Appointment />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Redirect old patient-education URL to blog */}
        <Route path="/patient-education" element={<Navigate to="/blog" replace />} />

        {/* Blog routes — admin MUST come before :slug */}
        <Route path="/blog" element={<BlogListing />} />
        {/* <Route path="/blog/admin-prasanna" element={<BlogAdmin />} /> */}
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </Router>
    </LanguageProvider>
  );
}

export default App;
