import Markdown from "https://esm.sh/react-markdown@10";
import { LayoutHeader } from "../../Header/index.tsx";
import resume from "../../assets/resume.md?raw";
const Resume = () => {
  return (
    <LayoutHeader>
      <h1 className="text-center">Resume</h1>
      <Markdown>{resume}</Markdown>
    </LayoutHeader>
  );
};

export default Resume;
