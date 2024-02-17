#!/usr/bin/env node

import yargs from "yargs";
import inquirer from "inquirer";
import { hideBin } from "yargs/helpers";
import { dirname } from "path";
import { fileURLToPath } from "url";
import generateFolderWithSelectedComponents from "./utils.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const baseDir = __dirname;

const argv = yargs(hideBin(process.argv)).alias("h", "help").argv;
console.log("argv:", argv);

if (argv._.length === 0) {
  yargs(hideBin(process.argv)).showHelp();
} else {
  const newFolderName = argv._[0];
  const pageComponentOptions = ["page", "layout", "error", "loading", "not-found"];
  const defaultComponent = ["page", "layout"];

  inquirer
    .prompt([
      {
        type: "checkbox",
        name: "components",
        message: "Select the components you want to create",
        default: defaultComponent,
        choices: pageComponentOptions,
      },
    ])
    .then((answers) => {
      generateFolderWithSelectedComponents(newFolderName, answers.components, baseDir);
    });
}
