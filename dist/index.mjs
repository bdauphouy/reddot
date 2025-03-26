#!/usr/bin/env node

// scripts/index.ts
import { execSync } from "node:child_process";
var args = process.argv.slice(2);
if (args.length < 2 || args[0] !== "add") {
  console.log("Usage: npx reddot-ui add [...packages]");
  process.exit(1);
}
var packageNames = args.slice(1);
for (const packageName of packageNames) {
  if (!packageName.trim()) {
    continue;
  }
  console.log(`Adding ${packageName} component...`);
  const url = new URL(`registry/${packageName}`, "https://reddot.bdau.fr");
  execSync(`npx shadcn@latest add ${url.toString()}`);
}
