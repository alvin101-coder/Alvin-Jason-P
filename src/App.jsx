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

  useEffect(() => {
    if (progress === 100) {
      // Delay hiding so greetings cycle a bit longer
      setTimeout(() => setIsReady(true), 5000);
    }
  }, [progress]);

  // cycle greetings quickly until loading is complete
  useEffect(() => {
    if (!isReady) {
      const interval = setInterval(() => {
        setGreetingIndex(prev => (prev + 1) % greetings.length);
      }, 300); // cycle every 0.5s
      return () => clearInterval(interval);
    }
  }, [isReady, greetings.length]);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          {/* Greetings above with fade effect */}
          <p
            key={greetingIndex} // forces re-render for fade
            className="mb-2 text-2xl font-bold tracking-widest animate-pulse transition-opacity duration-500 opacity-100"
          >
            {greetings[greetingIndex]}
          </p>
          {/* Loading percentage below */}
          <p className="mb-4 text-xl tracking-widest animate-pulse">
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
        } transition-opacity duration-1000`}
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
