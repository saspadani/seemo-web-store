import Favorite from '@/components/home/favorite';
import HeroSection from '@/components/home/hero-section';
import LatestMachine from '@/components/home/latest-machine';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Favorite />
      <LatestMachine />
    </div>
  );
}
