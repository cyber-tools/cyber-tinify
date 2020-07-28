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
  .action(require("@/actions/initialConfig"));

program
  .command("view")
  .description("登录到tinipng")
  .action(require("@/actions/viewAccount"));


program
  .command("login")
  .description("登录到tinipng")
  .action(require("@/actions/login"));

program
  .command("logout")
  .description("登出tinipng")
  .action(require("@/actions/logout"));

program
  .command("start")
  .description("开始压缩图片")
  .action(require("@/actions/startTinify"))

program.parse(process.argv);


