// Building writeups JSON in order to use it statically
import getGitHubDates from "./libs/getGithubDates.ts";

type ResultJSON = {
  directories: DirectoryWithMarkdown[];
};

type DirectoryWithMarkdown = {
  id: number;
  author: string;
  title: string;
  isMDX: boolean;
  name: string;
  content: string;
  description: string;
  birthtime: string;
  lastEdited: string;
};

type FrontmatterType = {
  title: string;
};

function getFrontmatter(text: string): Partial<FrontmatterType> {
  const lines = text.split("\n");
  const frontmatter: Record<string, string> = {};
  let isFrontmatter = false;

  for (const line of lines) {
    if (line === "---") {
      isFrontmatter = !isFrontmatter;
      continue;
    }

    if (isFrontmatter) {
      const [key, value] = line.split(": ");
      frontmatter[key] = value;
    } else {
      break;
    }
  }
  return frontmatter as FrontmatterType;
}

function getMarkdownNoFrontmatter(text: string): string {
  const lines = text.split("\n");
  let isFrontmatter = false;

  let i = 0;
  for (; i < lines.length; i++) {
    if (lines[i] === "---") {
      isFrontmatter = !isFrontmatter;
      continue;
    }

    if (isFrontmatter) {
      continue;
    } else {
      break;
    }
  }

  return lines.slice(i).join("\n");
}

const basePath = "./docs/";

const markdownDirectories = Deno.readDir(basePath);

if (!markdownDirectories) {
  console.log("No writeups found");
}

const directories: DirectoryWithMarkdown[] = [];

for await (const markdownDirectory of markdownDirectories) {
  if (markdownDirectory.isDirectory) {
    const textMd = await Deno.readTextFile(
      `${basePath}${markdownDirectory.name}/index.md`,
    );

    const { created: birthtime, updated: ctime, author } = await getGitHubDates(
      "securesvet",
      "writeups",
      "docs/" + markdownDirectory.name + "/index.md",
    );

    const textNoFronmatter = getMarkdownNoFrontmatter(textMd);
    directories.push({
      id: directories.length + 1,
      title: getFrontmatter(textMd).title ?? markdownDirectory.name,
      isMDX: false,
      name: markdownDirectory.name,
      content: textNoFronmatter,
      description: textNoFronmatter.substring(0, 100),
      birthtime: birthtime,
      lastEdited: ctime,
      author,
    });
  }
}

const result: ResultJSON = {
  directories,
};

const writeupsJson = JSON.stringify(result);
Deno.writeTextFileSync("./src/assets/writeups.json", writeupsJson);
