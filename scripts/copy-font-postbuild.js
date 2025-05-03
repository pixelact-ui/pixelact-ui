import fs from "fs";
import path from "path";

const fromDir = "src/assets/fonts";
const toDir = "dist/fonts";

fs.mkdirSync(toDir, { recursive: true });

fs.readdirSync(fromDir).forEach((file) => {
  const src = path.join(fromDir, file);
  const dest = path.join(toDir, file);
  fs.copyFileSync(src, dest);
});

console.log(`✅ Fonts copied from ${fromDir} to ${toDir}`);
