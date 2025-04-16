import { Link } from "react-router-dom";
import { LayoutHeader } from "../../Header/index.tsx";
import writeupsJson from "../../assets/writeups.json" with { type: "json" };

const sortedWriteups = writeupsJson.directories.sort(
  (a, b) => new Date(b.birthtime).getTime() - new Date(a.birthtime).getTime(),
);

function Writeups() {
  return (
    <LayoutHeader>
      <div className="max-w-3xl mx-auto">
        <h2 className="mb-6 text-center">Writeups</h2>
        <nav className="flex flex-col gap-4">
          {sortedWriteups.map((writeup) => (
            <Link
              key={writeup.id}
              to={`/writeups/${writeup.id}`}
              className="block rounded-lg border border-gray-200 p-4 hover:bg-gray-400 transition"
            >
              <p className="text-sm text-gray-500">{writeup.birthtime}</p>
              <h3 className="text-xl font-semibold">{writeup.title}</h3>
              {writeup.description && (
                <p className="text-sm text-gray-600">{writeup.description}</p>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </LayoutHeader>
  );
}

export default Writeups;
