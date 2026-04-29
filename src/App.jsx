import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import { useProgress } from "@react-three/drei";

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  const greetings = [
    "Hello!",
    "Bonjour!",
    "Hola!",
    "Jambo!",
    "Ciao!",
    "Namaste!",
    "Konnichiwa!",
    "Salam!"
  ];
  const [greetingIndex, setGreetingIndex] = useState(0);

  // mark ready shortly after hitting 100%
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setIsReady(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // cycle greetings in a loop until ready
  useEffect(() => {
    if (!isReady) {
      const interval = setInterval(() => {
        setGreetingIndex(prev => (prev + 1) % greetings.length);
      }, 2000); // change every 2s for smoother flow
      return () => clearInterval(interval);
    }
  }, [isReady]);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white font-light">
          {/* Greetings with fade loop */}
          <p
            className="mb-2 text-2xl font-bold tracking-widest transition-opacity duration-1000 opacity-100"
          >
            {greetings[greetingIndex]}
          </p>
          {/* Loading percentage */}
          <p className="mb-4 text-xl tracking-widest">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-700`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <ContactSummary />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;
