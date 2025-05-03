import fs from "fs";
import path from "path";

const assetsDir = "./dist/assets";
const files = fs.readdirSync(assetsDir);
const cssFile = files.find((f) => f.endsWith(".css"));

if (!cssFile) {
  console.error("❌ No CSS file found in dist/assets.");
  process.exit(1);
}

fs.copyFileSync(path.join(assetsDir, cssFile), "./dist/styles.css");

console.log(`✅ CSS extracted to dist/styles.css from ${cssFile}`);
