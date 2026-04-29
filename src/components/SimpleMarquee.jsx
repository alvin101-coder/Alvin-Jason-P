import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const SimpleMarquee = ({
  items,
  className = "text-white bg-black text-2xl md:text-3xl",
  icon = "mdi:star-four-points",
  iconClassName = "w-6 h-6 md:w-8 md:h-8",
  reverse = false,
  speed = 30, 
}) => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const direction = reverse ? "+=" : "-=";

    gsap.to(track, {
      xPercent: direction + "50", 
      duration: speed,
      ease: "none",
      repeat: -1,
    });
  }, [reverse, speed]);

  return (
    <div
      className={`overflow-hidden w-full h-20 md:h-[100px] flex items-center font-light uppercase whitespace-nowrap ${className}`}
    >
      <div ref={trackRef} className="flex">
        
        {[...items, ...items].map((text, index) => (
          <span
            key={index}
            className="flex items-center px-8 gap-x-12"
          >
            {text} <Icon icon={icon} className={iconClassName} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default SimpleMarquee;
