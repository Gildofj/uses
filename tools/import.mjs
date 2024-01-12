import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url.replace("/tools", ""));
const __dirname = path.dirname(__filename);
const home = "/home/gildofj/";

const postsDir = path.join(home, "obsidian-vault/Uses/Posts");
const imagesDir = path.join(home, "~/obsidian-vault/Uses/Images");
const contentDir = path.join(__dirname, "src/content/posts");
const assetsDir = path.join(__dirname, "src/assets");

const copyFile = (source, target) => {
  fs.copyFileSync(source, target);
  console.log(`Copied ${source} to ${target}`);
};

const copyFilesFromDirectory = (sourceDir, targetDir) => {
  const files = fs.readdirSync(sourceDir);
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    if (fs.statSync(sourcePath).isDirectory()) {
      copyFilesFromDirectory(sourcePath, targetPath);
    } else {
      copyFile(sourcePath, targetPath);
    }
  });
};

copyFilesFromDirectory(postsDir, contentDir);

copyFilesFromDirectory(imagesDir, assetsDir);
