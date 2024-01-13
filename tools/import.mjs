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

const createDirectoryIfNotExists = directory => {
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
  const regexToReplace = /!\[\[(.*?)\]\]/g;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const images =
    fileContent
      .match(regexToGetValue)
      ?.map(image => image.replace(regexToReplace, "")) || [];
  const splitedFilePath = filePath.split("/");
  const directoryName = splitedFilePath[splitedFilePath.lenght - 2];

  console.log(images);
  if (images.length) {
    let modifiedContent = fileContent;
    images.forEach(image => {
      modifiedContent = modifiedContent.replace(
        `![[${image}]]`,
        `![${image.split(".")[0]}](/assets/${directoryName}/${image})`,
      );
    });
    fs.writeFileSync(filePath, modifiedContent, "utf-8");
  }
};

const copyFilesFromDirectory = (sourceDir, targetDir) => {
  createDirectoryIfNotExists(targetDir);

  const files = fs.readdirSync(sourceDir);
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    if (fs.statSync(sourcePath).isDirectory()) {
      copyFilesFromDirectory(sourcePath, targetPath);
    } else {
      normalizeImagesToAstroMd(sourcePath);
      copyFile(sourcePath, targetPath);
    }
  });
};

const watchAndCopyFiles = (sourceDir, targetDir) => {
  copyFilesFromDirectory(sourceDir, targetDir);

  fs.watch(sourceDir, { recursive: true }, (eventType, filename) => {
    const sourcePath = path.join(sourceDir, filename);
    const targetPath = path.join(targetDir, filename);

    if (fs.existsSync(sourcePath)) {
      if (fs.statSync(sourcePath).isDirectory()) {
        copyFilesFromDirectory(sourcePath, targetPath);
      } else {
        normalizeImagesToAstroMd(sourcePath);
        copyFile(sourcePath, targetPath);
      }
    } else {
      // Handle file deletion here if needed
      console.log(`File deleted: ${targetPath}`);
    }
  });

  console.log(`Watching for changes in ${sourceDir}...`);
};

watchAndCopyFiles(postsDir, contentDir);

watchAndCopyFiles(imagesDir, assetsDir);
