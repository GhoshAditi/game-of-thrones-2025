import { Hero } from '@/components/home';
import About from '@/components/about';
import Sponsors from '@/components/sponsors';
import { Wrapper } from '@/components/common/Wrapper';
import Events from '@/components/events';
export default function Home() {
  return (
    <div className="pt-[100px]">
      <Hero />
      <Wrapper>
        <About />
        <Events />
      </Wrapper>
      <Sponsors />
    </div>
  );
}
