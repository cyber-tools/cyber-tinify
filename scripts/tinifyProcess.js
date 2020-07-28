const toast = require("ora")();
const tinify = require("tinify");
const { yellow } = require("colors");
const ProgressBar = require("progress");

const getAccount = require("@/utils/account/getAccount");

module.exports = async (matchFiles = []) => {
  const progressStyle = "[:bar] (:current/:total) :pathName";
  const oProgress = new ProgressBar(progressStyle, { total: matchFiles.length });
  const accountInfo = await getAccount();
  tinify.key = accountInfo.SecretKey;
  try {
    toast.succeed(["共匹配到(", matchFiles.length, ")个文件"].join(""));
    const taskList = matchFiles.map(async (filePath) => {
      try {
        const relativePath = filePath.replace(process.cwd(), "");
        await tinify.fromFile(filePath).toFile(filePath);
        oProgress.tick({ pathName: yellow(relativePath) });
      } catch (error) {
        throw error;
      };
    });
    await Promise.all(taskList);
    toast.succeed("complate!");
  } catch (error) {
    throw error;
  }
};