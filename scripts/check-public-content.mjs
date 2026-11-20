import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const forbidden = [".env", "private", "internal", "roadmap", "secret"];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const location = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(location);
    else if (entry.isFile()) {
      const relative = path.relative(root, location).toLowerCase();
      if (forbidden.some((term) => relative.includes(term))) {
        throw new Error(`Public content must not contain private material: ${relative}`);
      }
    }
  }
}

walk(path.join(root, "content"));
console.log("Public content boundary check passed.");
