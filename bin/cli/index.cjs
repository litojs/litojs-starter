#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(error.message);
    return false;
  }

  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/litojs/litojs-starter ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning litojs-starter to ${repoName}...`);

const gitCheckoutSuccess = runCommand(gitCheckoutCommand);
if (!gitCheckoutSuccess) {
  process.exit(1);
}

console.log(`Installing dependencies...`);
const installDepsSuccess = runCommand(installDepsCommand);
if (!installDepsSuccess) {
  process.exit(1);
}

console.log(`Done!`);
console.log(`cd ${repoName} && bun start`);
