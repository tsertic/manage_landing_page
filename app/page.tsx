import {
  PatternMiddleDesktop,
  PatternMiddleMobile,
  PatternTop,
} from "./_components/esthetics/";
import { About, Hero, Testimonials } from "./_components/pageSections";
export default function Home() {
  return (
    <main className="">
      <section className="pt-[111px] lg:pt-[220px] mb-[93px] lg:mb-[132px]">
        <PatternTop />
        <Hero />
        <PatternMiddleMobile />
      </section>
      <section className="relative mb-[146px]">
        <About />
        <PatternMiddleDesktop />
      </section>
      <section className="mb-[42px] lg:mb-[180px]">
        <Testimonials />
      </section>
    </main>
  );
}
