import mursvet from "/projects/mursvet.png";
import heroed from "/projects/heroed.png";
import tbank from "/projects/tbank.png";
import { LayoutHeader } from "../../Header/index.tsx";

const Projects = () => {
  const data = [
    {
      name: "mursvet site",
      image: mursvet,
      href: "https://github.com/securesvet/mursvet",
    },
    {
      name: "Heroed",
      image: heroed,
      href: "https://github.com/securesvet/heroed",
    },
    {
      name: "Design T-Bank",
      image: tbank,
      href: "https://design.tbank.ru",
    },
  ];

  return (
    <LayoutHeader>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold">Projects</h1>
        <p className="text-gray-600 mt-2">{data.length} Project{data.length > 1 && "s"}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-12">
        {data.map((el, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <a href={el.href} target="_blank" rel="noopener noreferrer">
              <img
                src={el.image}
                alt={el.name}
                className="w-full h-80 object-cover rounded-t-2xl hover:opacity-80 transition-opacity"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{el.name}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </LayoutHeader>
  );
};

export default Projects;
