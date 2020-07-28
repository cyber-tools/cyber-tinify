const fs = require("fs");
const path = require("path");
const { promisify } = require("es6-promisify");

const toast = require("@/utils/toast");
const hasConfigFile = require("@/utils/usually/hasConfigFile");

module.exports = async () => {
  if (await hasConfigFile()) {
    toast.warn("当前文件夹已经存在tinify.config.js文件");
    return false;
  };
  try {
    toast.start("正在拷贝文件... ...");
    const destination = path.resolve(process.cwd(), "./tinify.config.js");
    const source = path.resolve(__dirname, "../configs/tinify.config.js");
    await promisify(fs.copyFile)(source, destination);
    toast.succeed("创建成功!");
  } catch (error) {
    toast.fail("创建失败!");
    throw error;
  }
};