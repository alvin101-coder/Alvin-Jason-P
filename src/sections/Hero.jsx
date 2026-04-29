import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { Stars } from "@react-three/drei";


const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const text = `I help brands and startups unlock growth
through premium, results-driven web and mobile apps.`;

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection
        subTitle={"200 OK — Code Delivered"} 
        title={"Alvin Jason"}
        text={text}
        textColor={"text-black"}
      />
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
  shadows
  camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
>
  {/* Global ambient light */}
  <ambientLight intensity={0.5} />

  {/* Directional light for crisp shadows */}
  <directionalLight
    castShadow
    position={[5, 10, 5]}
    intensity={1.2}
    shadow-mapSize-width={1024}
    shadow-mapSize-height={1024}
    shadow-camera-far={50}
    shadow-camera-left={-10}
    shadow-camera-right={10}
    shadow-camera-top={10}
    shadow-camera-bottom={-10}
  />

  {/* Floating planet */}
  <Float speed={0.5}>
    <Planet
      scale={isMobile ? 0.7 : 1}
      castShadow
      receiveShadow
    />
  </Float>

  {/* Cosmic background */}
  <Environment preset="sunset" resolution={256} />

  {/* Optional starfield for extra depth */}
  <Stars
    radius={100}
    depth={50}
    count={5000}
    factor={4}
    saturation={0}
    fade
  />
</Canvas>

      </figure>
    </section>
  );
};

export default Hero;