import MagneticText from "../components/ui/MagneticText/index.tsx";
import Blob from "../components/ui/Blob/index.tsx";
import MountTransition from "../components/transitions/MountTransition.tsx";

const Index = () => {
  const githubImageUrl = "https://github.com/securesvet.png";
  const githubUrl = "https://github.com/securesvet";
  return (
    <>
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
      <div className="h-screen"></div>
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
