const tinify = require("tinify");
const toast = require("@/utils/toast");
const getFileSign = require("@/utils/getFileSign");
const getMatchFiles = require("@/utils/getMatchFiles");
const getAccount = require("@/utils/account/getAccount");
const createProgress = require("@/utils/createProgress");
const getTinifyConfig = require("@/utils/usually/getTinifyConfig");
const readLocalRecord = require("@/utils/record/readLocalRecord");


module.exports = async () => {
  try {
    const configs = getTinifyConfig();
    const accountInfo = await getAccount();
    tinify.key = accountInfo.SecretKey;
    const localRecord = await readLocalRecord();
    const matchFiles = await getMatchFiles(configs);
    const masterTask = matchFiles.map(async (filePath) => {
      try {
        const fileSign = await getFileSign(filePath);
        return localRecord[fileSign] ? false : { filePath, fileSign };
      } catch (error) {
        throw error;
      };
    });
    const afterFilter = (await Promise.all(masterTask)).filter(Boolean);
    const oProgress = createProgress({ total: afterFilter.length });
    toast.succeed(["共匹配到(", afterFilter.length, ")个文件"].join(""));
    return { matchFiles: afterFilter, progress: oProgress };
  } catch (error) {
    throw error;
  };
};