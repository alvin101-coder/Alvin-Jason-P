import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const Services = () => {
  const text = `I build secure, high-performance full-stack apps
    with smooth UX to drive growth 
    not headaches.`;

  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); // 768px

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;
      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);

  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={"Service"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="sticky px-4 sm:px-6 md:px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex flex-col gap-6 font-light">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl">{service.title}</h2>
            <p className="text-base sm:text-lg lg:text-2xl leading-relaxed tracking-widest text-white/70 text-pretty">
              {service.description}
            </p>

            <div className="flex flex-col gap-2 text-lg sm:text-xl lg:text-3xl text-white/80">
              {service.items.map((item, itemIndex) => (
                <div key={`item-${index}-${itemIndex}`}>
                  <h3 className="flex">
                    <span className="mr-6 sm:mr-12 text-sm sm:text-lg text-white/30">
                      0{itemIndex + 1}
                    </span>
                    {item.title}
                  </h3>

                  {/* Each tech keyword with hover icon */}
                  <p className="ml-[2rem] sm:ml-[3.5rem] text-sm sm:text-base text-white/50 flex flex-wrap gap-3 sm:gap-6">
                    {item.tech?.map((t) => (
                      <span
                        key={t.name}
                        className="relative group cursor-pointer"
                      >
                        {t.name}
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Icon icon={t.icon} className="text-xl sm:text-2xl" />
                        </span>
                      </span>
                    ))}
                  </p>

                  {itemIndex < service.items.length - 1 && (
                    <div className="w-full h-px my-2 bg-white/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
