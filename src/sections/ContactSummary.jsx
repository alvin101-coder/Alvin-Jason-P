import { useRef } from "react";
import SimpleMarquee from "../components/SimpleMarquee"; // swapped in
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);

  const items = [
    "Creativity",
    "Craftsmanship",
    "Reliability",
    "Partnership",
    "Impact",
  ];

  const items2 = [
    "Contact me",
    "Let’s connect",
    "Reach out",
    "Say hello",
    "Work together",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      {/* First marquee */}
      <SimpleMarquee items={items} speed={25} />

      {/* Center text */}
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “ Let’s craft a <br />
          <span className="font-normal">impactful</span> &{" "}
          <span className="italic">beautiful</span> <br />
          digital experience <span className="text-gold">together</span> “
        </p>
      </div>

      {/* Second marquee, reversed */}
      <SimpleMarquee
        items={items2}
        reverse={false}
        speed={30}
        className="text-black bg-transparent border-y-2 text-2xl md:text-3xl"
        iconClassName="stroke-gold stroke-2 text-primary w-6 h-6 md:w-8 md:h-8"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
