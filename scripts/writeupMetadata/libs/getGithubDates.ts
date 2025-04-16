import "jsr:@std/dotenv/load";

async function getGitHubDates(
  owner: string,
  repo: string,
  path: string,
): Promise<{ created: string; updated: string; author: string }> {
  const token = Deno.env.get("TOKEN_GITHUB");
  const headers = {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
    "X-GitHub-Api-Version": "2022-11-28",
  };

  const url =
    `https://api.github.com/repos/${owner}/${repo}/commits?path=${path}`;

  const res = await fetch(url, { headers });
  console.log(res);
  if (!res.ok) {
    console.error(`GitHub API error for ${path}:`, res.statusText);
    return { created: "", updated: "", author: "" };
  }

  const commits = await res.json();

  console.log(commits);

  const created = commits.at(-1)?.commit?.author?.date ?? "";
  const updated = commits[0]?.commit?.author?.date ?? "";
  const author = commits[0]?.commit?.author?.name ?? "";

  return {
    created: new Date(created).toDateString(),
    updated: new Date(updated).toDateString(),
    author,
  };
}

export default getGitHubDates;
