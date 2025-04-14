import Markdown from "https://esm.sh/react-markdown@10";
import { LayoutHeader } from "../../Header/index.tsx";
import resume from "../../assets/resume.md?raw";

const Resume = () => {
  const markdown = "# HELLO";
  return (
    <LayoutHeader>
      <h1 className="text-center text-3xl font-bold mb-6">Resume</h1>
        <div className="flex justify-center">
      <article className="prose dark:prose-invert">
        <Markdown>{resume}</Markdown>
      </article>
</div>
    </LayoutHeader>
  );
};

export default Resume;
