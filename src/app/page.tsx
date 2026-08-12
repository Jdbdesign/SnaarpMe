import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import HowItWorks from '@/components/HowItWorks';
import PricingBanner from '@/components/PricingBanner';
import WorkflowConnected from '@/components/WorkflowConnected';
import FeatureDeepDive from '@/components/FeatureDeepDive';
import DashboardShowcase from '@/components/DashboardShowcase';
import IntegrationsSection from '@/components/IntegrationsSection';
import UseCaseTabs from '@/components/UseCaseTabs';
import Testimonials from '@/components/Testimonials';
import PricingSection from '@/components/PricingSection';
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
      <PricingBanner />
      <WorkflowConnected />
      <FeatureDeepDive />
      <DashboardShowcase />
      <IntegrationsSection />
      <Testimonials />
      <PricingSection />
      <FaqSection />
      <FinalCta />
      <Footer />
      <ScrollReveal />
    </div>
  );
}
