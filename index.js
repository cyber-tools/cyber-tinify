#!/usr/bin/env node
require("./utils/initial");
const { program } = require("commander");
const json = require("@/package.json");


program
  .usage("cyber-tinify command")
  .version(json.version);

program
  .command("init")
  .description("初始化配置文件")
  .action(require("@/actions/initial-config"));

program
  .command("start")
  .description("开始压缩图片")
  .action(require("@/actions/start-tinify"))

program.parse(process.argv);


