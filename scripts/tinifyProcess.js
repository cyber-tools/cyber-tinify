const toast = require("ora")();
const tinify = require("tinify");
const { yellow } = require("colors");

const getAccount = require("@/utils/account/getAccount");
const createProgress = require("@/utils/createProgress");


module.exports = async (matchFiles = []) => {
  const accountInfo = await getAccount();
  tinify.key = accountInfo.SecretKey;
  const oProgress = createProgress({ total: matchFiles.length });
  try {
    toast.succeed(["共匹配到(", matchFiles.length, ")个文件"].join(""));
    const masterTask = matchFiles.map(async (filePath) => {
      try {
        const relativePath = filePath.replace(process.cwd(), "");
        await tinify.fromFile(filePath).toFile(filePath);
        oProgress.tick({ pathName: yellow(relativePath) });
      } catch (error) {
        throw error;
      };
    });
    await Promise.all(masterTask);
    toast.succeed("complate!");
  } catch (error) {
    throw error;
  }
};