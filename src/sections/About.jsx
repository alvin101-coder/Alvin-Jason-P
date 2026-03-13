import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;

  const aboutIntro = `Obsessed with building fast, intuitive apps—from pixel-perfect React UIs to bulletproof serverless backends. Every line of code is a promise: quality that users feel.
  Beyond the code:`;

  const hobbies = [
    {
      icon: "emojione-monotone:basketball",
      text: "Playing basketball — teamwork, rhythm, and strategy",
    },
    {
      icon: "line-md:spotify",
      text: "Listening to music — curating vibes that inspire creativity",
    },
    {
      icon: "material-symbols:nature-people-sharp",
      text: "Nature walks — finding clarity and fresh ideas outdoors",
    },
    {
      icon: "glyphs:laptop-code-bold",
      text: "Experimenting with new tech stacks — always exploring fresh tools and frameworks",
    },
  ];

  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Code with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/ma.jpg"
          alt="man"
          className="w-md rounded-3xl"
        />
        <div className="w-full space-y-6">
          <AnimatedTextLines text={aboutIntro} className={"w-full"} />
          <div className="space-y-6">
            {hobbies.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Icon
                  icon={item.icon}
                  width="48"
                  height="48"
                  style={{ fontWeight: "bold" }}
                />
                <span className="text-white">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="mt-6">
            Faith, family, and innovation fuel my journey—because software isn’t
            just built, it’s lived.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;