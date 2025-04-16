import MagneticText from "../../components/ui/MagneticText/index.tsx";
import Blob from "../../components/ui/Blob/index.tsx";
import MountTransition from "../../components/transitions/MountTransition.tsx";
import me from '/me.webp?url'

const Home = () => {
  return (
    <section id="greet">
      <div className="flex justify-center items-center h-[var(--screen-no-header-no-footer)]">
        <MountTransition>
          <Greeting />
        </MountTransition>
        <div
          className={`w-xs aspect-square hover:opacity-80 transition-opacity duration-300`}
        >
          <Avatar />
        </div>
      </div>
    </section>
  );
};

const Avatar = () => {
  const githubUrl = "https://github.com/securesvet";
  return (
    <a href={githubUrl} target="_blank">
      <Blob imageUrl={me} />
    </a>
  );
};

const Greeting = () => {
  return (
    <>
      <p className="text-3xl">Hi, my name is</p>
      <h2>
        <MagneticText text="Sviatoslav" />
      </h2>
      <h2>
        <MagneticText text="Murzin" startBold />
      </h2>
    </>
  );
};

export default Home;
