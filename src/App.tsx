import Blob from "./components/ui/Blob/index.tsx";
import Footer from "./Footer/Footer.tsx";
import Header from "./Header/Header.tsx";
import MagneticText from "./components/ui/MagneticText/index.tsx";

function App() {
  const githubImageUrl = "https://github.com/securesvet.png";
  const githubUrl = "https://github.com/securesvet";
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <Greeting />
        <div className="w-xs aspect-square hover:opacity-80 transition-opacity duration-300">
          <a href={githubUrl} target="_blank">
            <Blob imageUrl={githubImageUrl} />
          </a>
        </div>
      </div>
      <div className="h-screen"></div>
      <Footer />
    </>
  );
}

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

export default App;
