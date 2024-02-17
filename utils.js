import * as path from "path";
import * as fs from "fs";

const generateFolderWithSelectedComponents = (newFolderName, selectedComponents, baseDir) => {
  const baseProjectPath = path.resolve(path.join(baseDir, "templates", "app-router-components"));
  const CURR_DIR = process.cwd();
  const folderPath = path.join(CURR_DIR, newFolderName);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  selectedComponents.forEach((component) => {
    fs.copyFileSync(`${baseProjectPath}/${component}.tsx`, `${folderPath}/${component}.tsx`);
  });
};

export default generateFolderWithSelectedComponents;
