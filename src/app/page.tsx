import { Hero } from '@/components/home';
import About from '@/components/about';
import Sponsors from '@/components/sponsors';
export default function Home() {
  return (
    <div className="pt-[100px]">
      <Hero />
      <About />
      <Sponsors />
    </div>
  );
}
