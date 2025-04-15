import Markdown from "https://esm.sh/react-markdown@10";
import { LayoutHeader } from "../../Header/index.tsx";
import resume from "../../assets/resume.md?raw";
import resumePDFurl from "/resume.pdf?url";

const Resume = () => {
  return (
    <LayoutHeader>
      <h2 className="text-center">Resume</h2>
      <div className="text-center mb-6">
        <a href={resumePDFurl}>PDF</a>
      </div>
      <div className="flex justify-center">
        <article className="prose dark:prose-invert">
          <Markdown>
            {resume}
          </Markdown>
        </article>
      </div>
    </LayoutHeader>
  );
};

export default Resume;
