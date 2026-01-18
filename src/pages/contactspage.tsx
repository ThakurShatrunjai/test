import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import QueryFormSection from '@/components/QueryFormSection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function ContactUsPage() {
  useEffect(() => {
    document.title = 'Contact Us - DP Globals';
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="pt-20 md:pt-24">
        <ContactSection />
        <QueryFormSection />
      </main>
      <Footer />
    </div>
  );
}
