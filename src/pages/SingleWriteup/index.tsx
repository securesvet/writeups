import { useParams } from "react-router-dom";
import Markdown from "https://esm.sh/react-markdown@10";
import { LayoutHeader } from "../../Header/index.tsx";
import { FaEdit } from "react-icons/fa";
import writeupsJson from "../../../public/writeups.json" with { type: "json" };

function SingleWriteup() {
  const { id } = useParams();
  const writeup = writeupsJson.directories.find((w) => String(w.id) === id);

  if (!writeup) {
    return (
      <LayoutHeader>
        <div className="p-4 text-center text-red-600 font-semibold">
          Writeup not found.
        </div>
      </LayoutHeader>
    );
  }

  return (
    <LayoutHeader>
      <div className=" p-6 max-w-4xl mx-auto">
        <h1>{writeup.name}</h1>
        <p className="text-sm text-gray-400">{writeup.birthtime}</p>
        <div className="prose dark:prose-invert">
          <Markdown>{writeup.markdown}</Markdown>
        </div>
        <div className="flex w-full justify-end">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-400">
              Last edited on {writeup.lastEdited}
            </p>
            <a
              className="hover:underline text-sm text-gray-400 flex justify-end items-center gap-1"
              href={`https://github.com/securesvet/writeups/edit/main/docs/${writeup.name}/index.md`}
            >
              <FaEdit className="text-gray-400" />
              Edit
            </a>
          </div>
        </div>
      </div>
    </LayoutHeader>
  );
}

export default SingleWriteup;
