import { InteriorGallery } from "@/components/sections/InteriorGallery";
import { About } from "@/components/sections/home/About";
import { Process } from "@/components/sections/home/Process";
import { Services } from "@/components/sections/home/Services";
import { Features } from "@/components/sections/home/Features";
import { Team } from "@/components/sections/home/Team";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { Pricing } from "@/components/sections/home/Pricing";
import { Location } from "@/components/sections/home/Location";
import { Blog } from "@/components/sections/home/Blog";

export function HomeContent() {
  return (
    <>
      <About />
      <Process />
      <Services />
      <Features />

      <InteriorGallery />

      <Team />
      <Testimonials />
      <Pricing />
      <Location />
      <Blog />
    </>
  );
}
