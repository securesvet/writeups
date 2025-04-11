import MagneticText from "../components/ui/MagneticText/index.tsx";
import Blob from "../components/ui/Blob/index.tsx";
import MountTransition from "../components/transitions/MountTransition.tsx";
import Projects from "../Projects/index.tsx";

const Index = () => {
  const githubImageUrl = "https://github.com/securesvet.png";
  const githubUrl = "https://github.com/securesvet";
  return (
    <>
    <section id="greet">
      <div className="flex justify-center items-center h-screen">
        <MountTransition>
          <Greeting />
        </MountTransition>
        <div className="w-xs aspect-square hover:opacity-80 transition-opacity duration-300">
          <a href={githubUrl} target="_blank">
            <MountTransition>
              <Blob imageUrl={githubImageUrl} />
            </MountTransition>
          </a>
        </div>
      </div>
</section>
      <section id="projects">
        {/* <Projects /> */}
      </section>
    </>
  );
};

const Greeting = () => {
  return (
    <>
      <h1 className="text-3xl">
        Hi, my name is
        <br /> <MagneticText text="Sviatoslav" />{" "}
        <MagneticText text="Murzin" startBold />
      </h1>
    </>
  );
};

export default Index;
