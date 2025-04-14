import { ReactNode, useState } from "react";
import Markdown from "https://esm.sh/react-markdown@10";
import { LayoutHeader } from "../../Header/index.tsx";
import writeupsJson from "../../writeups.json" with { type: "json" };

function Writeups() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedWriteup = writeupsJson.directories.find((w) => w.id === selectedId);

  const sortedWriteups = writeupsJson.directories.sort((a, b) => new Date(b.birthtime).getTime() - new Date(a.birthtime).getTime());
  const markdown = selectedWriteup?.markdown || "";

  return (
    <LayoutHeader>
      <div className="grid grid-cols-1 gap-6 p-4">
        {/* Sidebar */}
        {
          !selectedId && (
        <center className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Writeups</h2>
          <nav className="flex flex-col gap-3 border-l-2 border-gray-200 pl-4 max-h-[var(--screen-no-header)] overflow-auto">
            {sortedWriteups.map((writeup) => (
              <button
              type="button"
                key={writeup.id}
                onClick={() => setSelectedId(writeup.id)}
                className={`text-left rounded-lg p-2 h-20 hover:cursor-pointer transition-colors border border-transparent hover:border-gray-300 ${
                  selectedId === writeup.id
                    ? "font-semibold border-gray-300"
                    : ""
                }`}
              >
                <SmallText>{writeup.birthtime}</SmallText>
                <h3 className="text-lg">{writeup.name}</h3>
                <SmallText>{writeup.description}</SmallText>
              </button>
            ))}
          </nav>
        </center>
          )
        }

        {
          selectedId && (
        <section className="md:col-span-3 overflow-auto max-w-none">
          <h1 className="text-3xl font-bold mb-4">{selectedWriteup?.name}</h1>
          <Markdown>{markdown}</Markdown>
        </section>
          )
        }
      </div>
    </LayoutHeader>
  );
}

const SmallText = ({ children }: { children: ReactNode }) => {
  return (
  <p className="text-sm font-normal text-gray-500 text-ellipsis overflow-hidden">{children}</p>
  )
};

export default Writeups;
