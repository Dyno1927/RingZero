import fs from "node:fs";
import path from "node:path";

const docsRoot = path.resolve("src/content/docs");
const distRoot = path.resolve("dist");
const errors = [];

function collectMdx(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectMdx(entryPath);
    return entry.isFile() && entry.name.endsWith(".mdx") ? [entryPath] : [];
  });
}

function resolveSitePath(sitePath) {
  const pathname = decodeURIComponent(sitePath.split(/[?#]/, 1)[0]);
  const resolved = path.resolve(distRoot, `.${pathname}`);
  if (resolved !== distRoot && !resolved.startsWith(`${distRoot}${path.sep}`))
    return null;
  if (path.extname(pathname)) return resolved;
  return path.join(resolved, "index.html");
}

function checkLinks(filePath, content) {
  const references = [
    ...content.matchAll(/\]\((\/[^\s)#]+)(?:#[^\s)]*)?\)/g),
    ...content.matchAll(/\bhref=["'](\/[^"'#?]+)(?:[?#][^"']*)?["']/g),
  ];

  for (const [match, target] of references) {
    const resolved = resolveSitePath(target);
    if (!resolved || !fs.existsSync(resolved)) {
      const line = content.slice(0, match.index).split("\n").length;
      errors.push(
        `${path.relative(process.cwd(), filePath)}:${line}: missing ${target}`,
      );
    }
  }
}

for (const filePath of collectMdx(docsRoot)) {
  checkLinks(filePath, fs.readFileSync(filePath, "utf8"));
}

const llmsPath = path.resolve("public/llms.txt");
checkLinks(llmsPath, fs.readFileSync(llmsPath, "utf8"));

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    "All authored internal links resolve to generated pages or static assets.",
  );
}
