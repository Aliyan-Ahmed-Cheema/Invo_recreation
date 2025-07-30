import React from 'react';

// Import Components
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Testimonials from './components/Testimonials';
import DiscussIdea from './components/DiscussIdea';
import AwardsBanner from './components/AwardsBanner'; // <-- Import
import EngagementModels from './components/EngagementModels'; // <-- Import
import Industries from './components/Industries'; // <-- Import
import CaseStudies from './components/CaseStudies'; // <-- Import
import TechStack from './components/TechStack'; // <-- Import
import ContactForm from './components/ContactForm'; // <-- Import
import Footer from './components/Footer'; // Assuming you have a Footer component from the first step

// Import global styles if you have them, e.g., for fonts
import './App.css'; 

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Partners />
        <Services />
        <CallToAction />
        <DiscussIdea/>
        <Testimonials />
        <AwardsBanner />       
        <EngagementModels /> 
        <Industries /> 
        <CaseStudies />     
        <TechStack />        
        <ContactForm />      
      </main>
      <Footer />
    </>
  );
}

export default App;