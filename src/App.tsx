import Engagements from "./sections/Engagements";
import Hero from "./sections/Hero";
import Resume from "./sections/Resume";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";

const App = () => {
  gsap.registerPlugin(useGSAP);

  return (
    <div>
      <Hero />
      <Resume />
      <Engagements />
    </div>
  );
};

export default App;
