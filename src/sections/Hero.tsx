import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { MouseEventHandler, UIEventHandler } from "react";

const Hero = () => {
  const menuItems = [
    { label: "WORK", link: "#" },
    { label: "ABOUT", link: "#" },
    { label: "NEWS", link: "#" },
    { label: "THINKING", link: "#" },
    { label: "CAREERS", link: "#" },
    { label: "CONTACT", link: "#" },
  ];

  useGSAP(() => {
    gsap.to(".hero-menu-item", {
      y: 0,
      stagger: 0.1,
      ease: "back"
    });
  }, []);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const cursorSizePx = 128;

    gsap.to(".hero-cursor", {
      x: e.pageX - cursorSizePx / 2,
      y: e.pageY - cursorSizePx / 2,
      ease: "power2"
    });
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (_e) => {
    gsap.to(".hero-cursor", {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      ease: "expo.out",
    });
  };
  
  const handleScroll: UIEventHandler = (e) => {
    console.log(e);
  }

  return (
    <div
      className="h-screen bg-black relative cursor-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onScroll={handleScroll}
    >
      <video
        autoPlay
        muted
        loop
        src='https://cdn.sanity.io/files/8nn8fua5/production/c6fb986a862cbe643c40cbdd0318ebc495efb187.mp4'
        className="h-full w-full top-0 object-cover absolute"
      />


      <div className="w-32 h-32 bg-white absolute rounded-full hero-cursor" />

      <header className="relative p-10 w-full flex justify-between text-white">
        <a href="#" className="w-32">
          <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.3 27.7"><path d="M0 24.1h11.7c5.5 0 8.7-2.3 8.7-6.8 0-2.8-1.7-4.5-4.1-5.3 2-.9 3.4-2.6 3.4-5.3 0-3.5-2.2-5.9-7.5-5.9H0zM13.1 7.9c0 1.6-1 2.4-3.2 2.4H6.4V5.5h3.5c2.2 0 3.2.8 3.2 2.4m.7 9c0 1.7-1 2.4-3.3 2.4H6.4v-4.9h4.2c2.2 0 3.2.8 3.2 2.5M38.2 24.1h6.7L36.8.7h-8.4l-8.1 23.4h6.5l1.2-3.8h9.1zM32.5 5.9l2.9 9.5h-5.9zM55.1 24.5c6.3 0 10.3-3 10.3-7.7 0-3.8-2.5-5.8-6.5-6.6l-5.1-1c-2-.4-2.6-1-2.6-2.1S52.4 5 54.5 5c2.4 0 4.1 1 4.2 3.1H65C65 2.5 60.3.3 54.5.3c-5.6 0-9.7 2.8-9.7 7.3 0 3.8 2.5 5.8 6.5 6.6l5.1 1c2 .4 2.6 1 2.6 2.1 0 1.5-1.4 2.3-3.7 2.3-2.6 0-4.5-1.3-4.6-3.8h-6.3c.2 5.5 3.7 8.7 10.7 8.7M67.3 24.1h6.4V.7h-6.4zM82 12.4c0-3.9 2.1-6.8 5.6-6.8 2.9 0 4.7 1.7 5.1 3.7h6.7C98.8 3.2 93.6.2 87.7.2 80 .2 75.4 5 75.4 12.3s4.5 12.1 12.3 12.1c6 0 11.2-2.9 11.8-9.1h-6.7c-.4 2.1-2.1 3.7-5.1 3.7-3.6.2-5.7-2.7-5.7-6.6M113.7 0h-5.2l-10 27.7h5.2zM137.8 12.4c0-6.6-3.6-11.7-12.8-11.7h-9.8v23.4h9.8c9.2 0 12.8-5.1 12.8-11.7m-6.6 0c0 4.6-2.6 6.3-6.2 6.3h-3.3V6.1h3.3c3.6 0 6.2 1.7 6.2 6.3M139.5 24.1H158v-5.3h-12.2v-4h10.7V9.7h-10.7V6.1h11.9V.7h-18.2zM180 8.9c0-5.9-3.8-8.1-9.6-8.1h-10.1v23.4h6.4V17h3.8c5.7 0 9.5-2.2 9.5-8.1m-6.6 0c0 2.3-1.1 3.2-3.7 3.2h-3.1V5.6h3.1c2.6 0 3.7 1 3.7 3.3M181 6.2h7.4v17.9h6.4V6.2h7.4V.7H181zM203.5 23.7c-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8s4.8 2.1 4.8 4.8c0 2.6-2.2 4.8-4.8 4.8m0-8.8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4"></path><path d="M204 17.2h-1.4v1.6h1.4c.5 0 .7-.3.7-.8s-.3-.8-.7-.8m-.1-.8c1.2 0 1.8.5 1.8 1.6 0 .6-.3 1.1-.9 1.3l1.2 1.8h-1.2l-1.1-1.6h-1.2v1.6h-1.1v-4.7z"></path></svg>
        </a>
        <nav className="flex gap-10 text-sm font-bold">
          {menuItems.map(({label, link}) => (
            <a
              href={link}
              className="hero-menu-item -translate-y-16"
              key={label}
            >
              {label}
            </a>
          ))}
        </nav>
        <button>
          ...
        </button>
      </header>
    </div>
  );
};

export default Hero;
