import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import HowItWorks from '@/components/HowItWorks';

import FeaturesShowcase from '@/components/FeaturesShowcase';
import DashboardShowcase from '@/components/DashboardShowcase';
import IntegrationsSection from '@/components/IntegrationsSection';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', overflowX: 'hidden' }}>
      <Header />
      <HeroSection />
      <TrustBar />
      <HowItWorks />

      <FeaturesShowcase />
      <DashboardShowcase />
      <IntegrationsSection />
      <Testimonials />
      <FaqSection />
      <FinalCta />
      <Footer />
      <ScrollReveal />
    </div>
  );
}
