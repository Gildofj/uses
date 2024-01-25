import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url.replace("/tools", ""));
const __dirname = path.dirname(__filename);
const home = "/home/gildofj/";

const postsDir = path.join(home, "obsidian-vault/Uses/Posts");
const imagesDir = path.join(home, "obsidian-vault/Uses/Images");
const contentDir = path.join(__dirname, "src/content/posts");
const assetsDir = path.join(__dirname, "public/assets");

const normalizePath = path => path.replace(/ /g, "-").toLowerCase();

const createDirectoryIfNotExists = directory => {
  console.log(directory);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`Created directory: ${directory}`);
  }
};

const copyFile = (source, target) => {
  fs.copyFileSync(source, target);
  console.log(`Copied ${source} to ${target}`);
};

const normalizeImagesToAstroMd = filePath => {
  const regexToGetValue = /!\[\[([^[\]]*)\]\]/g;
  const regexToReplace = /[!\[\]]/g;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const s = filePath.split("/");
  const directoryName = normalizePath(s[s.length - 1].replace(".md", ""));

  const images =
    fileContent
      .match(regexToGetValue)
      ?.map(image => image.replace(regexToReplace, "")) || [];

  if (images.length) {
    let modifiedContent = fileContent;
    images.forEach(image => {
      const normalizedImage = normalizePath(image);
      modifiedContent = modifiedContent.replace(
        `![[${image}]]`,
        `![${
          image.split(".")[0]
        }](/uses/assets/${directoryName}/${normalizedImage})`,
      );
    });
    return modifiedContent;
  }
  return fileContent;
};

const verifyFileTypeAndCopy = (sourcePath, targetPath) => {
  if (targetPath.includes("untitled")) return;
  if (fs.statSync(sourcePath).isDirectory()) {
    copyFilesFromDirectory(sourcePath, targetPath);
  } else {
    if (sourcePath.includes("Posts")) {
      const newContent = normalizeImagesToAstroMd(sourcePath);
      fs.writeFileSync(targetPath, newContent, "utf-8");
      console.log(`Rewritten file to target ${targetPath}`);
    } else {
      copyFile(sourcePath, targetPath);
    }
  }
};

const copyFilesFromDirectory = (sourceDir, targetDir) => {
  createDirectoryIfNotExists(targetDir);

  const files = fs.readdirSync(sourceDir);
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, normalizePath(file));

    verifyFileTypeAndCopy(sourcePath, targetPath);
  });
};

const watchAndCopyFiles = (sourceDir, targetDir) => {
  copyFilesFromDirectory(sourceDir, targetDir);

  fs.watch(sourceDir, { recursive: true }, (_, filename) => {
    const sourcePath = path.join(sourceDir, filename);
    const targetPath = path.join(targetDir, normalizePath(filename));

    if (fs.existsSync(sourcePath)) {
      verifyFileTypeAndCopy(sourcePath, targetPath);
    } else {
      // fs.remo
      console.log(`File deleted: ${targetPath}`);
    }
  });

  console.log(`Watching for changes in ${sourceDir}...`);
};

watchAndCopyFiles(postsDir, contentDir);
watchAndCopyFiles(imagesDir, assetsDir);
