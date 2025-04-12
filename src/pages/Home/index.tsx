import MagneticText from "../../components/ui/MagneticText/index.tsx";
import Blob from "../../components/ui/Blob/index.tsx";
import MountTransition from "../../components/transitions/MountTransition.tsx";
import Projects from "../Projects/index.tsx";
import { useState } from "react";

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const githubImageUrl = "https://github.com/securesvet.png";
  const githubUrl = "https://github.com/securesvet";
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <>
      <section id="greet">
        <div className="flex justify-center items-center h-screen">
          <MountTransition>
            <Greeting />
          </MountTransition>
          <div className={`w-xs aspect-square hover:opacity-80 transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}>
              <a href={githubUrl} target="_blank">
                  <Blob
                    imageUrl={githubImageUrl}
                    imgProps={{ onLoad: handleImageLoad }}
                  />
              </a>
          </div>
        </div>
      </section>
      <section id="projects">{/* <Projects /> */}</section>
    </>
  );
};

const Greeting = () => {
  return (
    <h1>
      Hi, my name is
      <br /> <MagneticText text="Sviatoslav" />{" "}
      <MagneticText text="Murzin" startBold />
    </h1>
  );
};

export default Home;
