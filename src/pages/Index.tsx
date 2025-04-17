
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SocialProof from '@/components/SocialProof';
import Services from '@/components/Services';
import About from '@/components/About';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SocialProof />
      <Services />
      <About />
      <ContactSection />
      <Footer />
      <WhatsAppButton text="WhatsApp" fixed={true} />
    </div>
  );
};

export default Index;
