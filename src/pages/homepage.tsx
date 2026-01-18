import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhatSetsUsApartSection from '@/components/WhatSetsUsApartSection';
import ContactSection from '@/components/ContactSection';
import QueryFormSection from '@/components/QueryFormSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhatSetsUsApartSection />
        <ContactSection />
        <QueryFormSection />
      </main>
      <Footer />
    </div>
  );
}
