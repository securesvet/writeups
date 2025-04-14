// deno-lint-ignore-file jsx-key
import mursvet from "/projects/mursvet.png";
import heroed from "/projects/heroed.png";
import tbank from "/projects/tbank.png";
import { LayoutHeader } from "../../Header/index.tsx";
import Card, { CardProps } from "../../components/ui/Card/index.tsx";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import ViteSvg from "../../assets/images/vite.svg?react";
import ReduxSvg from "../../assets/images/redux.svg?react";
import { SiDeno } from "react-icons/si";
import { ReactNode } from "react";
import { IconContext } from "react-icons";

const ReactColorIcon = () => {
  return (
    <IconContext.Provider value={{ color: "#61DAFB" }}>
      <FaReact />
    </IconContext.Provider>
  );
};
const NodeJsColorIcon = () => {
  return (
    <IconContext.Provider value={{ color: "#68a063" }}>
      <FaNodeJs />
    </IconContext.Provider>
  );
};

const DenoColorIcon = () => {
  return (
    <IconContext.Provider value={{ color: "#000000" }}>
      <SiDeno />
    </IconContext.Provider>
  );
};

const ViteSvgColorIcon = () => {
  return <ViteSvg width={20} height={20} />;
};

const ReduxSvgColorIcon = () => {
  return <ReduxSvg width={20} height={20} />;
};

const Projects = () => {
  const data = [
    {
      name: "mursvet site",
      image: mursvet,
      description: "This website hosted on Github Pages",
      href: "https://securesvet.github.io/writeups/",
      githubUrl: "https://github.com/securesvet/writeups",
      stack: [<ReactColorIcon />, <DenoColorIcon />, <ViteSvgColorIcon />],
    },
    {
      name: "Heroed",
      image: heroed,
      description: "D&D helper",
      href: "https://securesvet.github.io/heroed/",
      githubUrl: "https://github.com/securesvet/heroed",
      stack: [
        <ReactColorIcon />,
        <NodeJsColorIcon />,
        <ViteSvgColorIcon />,
        <ReduxSvgColorIcon />,
      ],
    },
    {
      name: "Design T-Bank",
      image: tbank,
      href: "https://design.tbank.ru",
      description: "Design guidelines for T-Bank",
    },
  ];

  return (
    <LayoutHeader>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
          Projects
        </h1>
        <p className="text-gray-300 mt-2 text-lg">
          {data.length} Project{data.length > 1 && "s"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-12">
        {data.map((el, index) => (
          <ProjectCard
            key={index}
            href={el.href}
            image={el.image}
            name={el.name}
            description={el.description}
            githubUrl={el.githubUrl}
            stack={el.stack}
          />
        ))}
      </div>
    </LayoutHeader>
  );
};

const ProjectCard = ({
  githubUrl,
  stack,
  ...props
}: { githubUrl?: string; stack?: ReactNode[] } & CardProps) => {
  return (
    <Card {...props}>
      {githubUrl ? (
        <a
          href={githubUrl}
          target="_blank"
          className="mt-2 inline-block hover:underline items-center"
        >
          <div className="flex items-center gap-2 justify-center">
            <FaGithub className="inline" /> Github
          </div>
        </a>
      ) : (
        <p>Closed source</p>
      )}
      <div className="flex justify-center items-center gap-2">{stack}</div>
    </Card>
  );
};

export default Projects;
