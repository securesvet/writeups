import MagneticText from "../components/ui/MagneticText/index.tsx";
import Blob from "../components/ui/Blob/index.tsx";

const Index = () => {
  const githubImageUrl = "https://github.com/securesvet.png";
  const githubUrl = "https://github.com/securesvet";
  return (
    <>
      <div className="flex justify-center items-center h-[var(--screen-no-header)] max-w-screen">
        <Greeting />
        <div className="w-xs aspect-square hover:opacity-80 transition-opacity duration-300">
          <a href={githubUrl} target="_blank">
            <Blob imageUrl={githubImageUrl} />
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
