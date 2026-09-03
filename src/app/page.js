import HeroBanner from '@/components/HeroBanner';
import TrustBar from '@/components/TrustBar';
import ImpactStats from '@/components/ImpactStats';
import EnergyPulseStrip from '@/components/EnergyPulseStrip';
import QuickActions from '@/components/QuickActions';
import SectionWave from '@/components/SectionWave';
import Home from '@/views/Home';

export default function Page() {
  return (
    <div className="home-page" id="home-content">
      <HeroBanner />
      <TrustBar />
      <ImpactStats />
      <EnergyPulseStrip />
      <SectionWave variant="light" />
      <QuickActions />
      <Home />
    </div>
  );
}
