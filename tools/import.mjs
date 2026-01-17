import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import os from "node:os";

const __filename = fileURLToPath(import.meta.url.replace("/tools", ""));
const __dirname = path.dirname(__filename);
const home = os.homedir();

const findObsidianVault = () => {
  const possibleLocations = [
    path.join(home, "obsidian-vault"),
    path.join(home, "Documents", "obsidian-vault"),
    "./obsidian-vault-sync", // For CI/CD
  ];

  for (const location of possibleLocations) {
    if (fs.existsSync(location)) {
      console.log(`Found obsidian-vault at: ${location}`);
      return location;
    }
  }

  console.error("Obsidian vault not found in expected locations.");
  process.exit(1);
};

const vaultPath = findObsidianVault();
const postsDir = path.join(vaultPath, "Uses/Posts");
const imagesDir = path.join(vaultPath, "Uses/Images");
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

const normalizeImagesToAstroMd = filePath => {
  console.log(`normalizeImagesToAstroMd -> init for ${filePath}`);

  const regexToGetValue = /!\[\[([^[\]]*)\]\]/g;
  const regexToReplace = /[!\[\]]/g;
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const pathsParts = filePath.split(/[/\\]/);
  const directoryName = normalizePath(
    pathsParts[pathsParts.length - 1].replace(".md", ""),
  );

  console.log(`normalizeImagesToAstroMd -> directoryName: ${directoryName}`);

  const images =
    fileContent
      .match(regexToGetValue)
      ?.map(image => image.replace(regexToReplace, "")) || [];

  if (images.length) {
    console.log("normalizeImagesToAstroMd -> has images to normalize");
    let modifiedContent = fileContent;
    images.forEach(image => {
      const imageName = path.basename(image);
      const normalizedImage = normalizePath(imageName);
      const imageAlt = imageName.split(".")[0];
      modifiedContent = modifiedContent.replace(
        `![[${image}]]`,
        `![${imageAlt}](/uses/assets/${directoryName}/${normalizedImage})`,
      );
    });
    return modifiedContent;
  }

  console.log(`normalizeImagesToAstroMd -> end for ${filePath}`);
  return fileContent;
};

const verifyFileTypeAndCopy = (sourcePath, targetPath) => {
  if (targetPath.includes("untitled")) return;

  if (fs.statSync(sourcePath).isDirectory()) {
    syncFilesBetweenDirectories(sourcePath, targetPath);
  } else {
    if (sourcePath.includes("Posts")) {
      const newContent = normalizeImagesToAstroMd(sourcePath);
      fs.writeFileSync(targetPath, newContent, "utf-8");
      console.log(`Normalized and wrote: ${targetPath}`);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Copied ${sourcePath} -> ${targetPath}`);
    }
  }
};

const deleteUnusedFiles = (sourceDir, targetDir) => {
  if (!fs.existsSync(targetDir)) return;

  const sourceFiles = fs
    .readdirSync(sourceDir)
    .map(file => normalizePath(file));
  const targetFiles = fs.readdirSync(targetDir);

  targetFiles.forEach(file => {
    const targetPath = path.join(targetDir, file);

    if (!sourceFiles.includes(file)) {
      fs.rmSync(targetPath, { recursive: true, force: true });
      console.log(`Deleted (sync): ${targetPath}`);
    }
  });
};

const syncFilesBetweenDirectories = (sourceDir, targetDir) => {
  if (!fs.existsSync(sourceDir)) {
    console.warn(`Source directory does not exist: ${sourceDir}`);
    return;
  }

  createDirectoryIfNotExists(targetDir);

  const files = fs.readdirSync(sourceDir);
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, normalizePath(file));

    verifyFileTypeAndCopy(sourcePath, targetPath);
  });

  deleteUnusedFiles(sourceDir, targetDir);
};

const isCI = process.env.CI === "true" || process.env.GITHUB_ACTIONS === "true";

if (isCI) {
  console.log("Running in CI environment. Performing one-time sync.");
  syncFilesBetweenDirectories(postsDir, contentDir);
  syncFilesBetweenDirectories(imagesDir, assetsDir);
  console.log("Sync completed.");
} else {
  const watchAndCopyFiles = (sourceDir, targetDir) => {
    syncFilesBetweenDirectories(sourceDir, targetDir);

    fs.watch(sourceDir, { recursive: true }, (_, filename) => {
      const sourcePath = path.join(sourceDir, filename);
      const targetPath = path.join(targetDir, normalizePath(filename));

      if (fs.existsSync(sourcePath)) {
        verifyFileTypeAndCopy(sourcePath, targetPath);
      } else {
        if (fs.existsSync(targetPath)) {
          fs.rmSync(targetPath, { recursive: true, force: true });
          console.log(`Deleted: ${targetPath}`);
        }
      }
    });

    console.log(`Watching for changes in ${sourceDir}...`);
  };

  watchAndCopyFiles(postsDir, contentDir);
  watchAndCopyFiles(imagesDir, assetsDir);
}
