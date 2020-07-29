const toast = require("@/utils/toast");
const { fromPairs } = require("lodash");
const beforeTinify = require("@/scripts/beforeTinify");
const tinifySingle = require("@/scripts/tinifySingle");
const writeLocalRecord = require("@/utils/record/writeLocalRecord");


module.exports = async () => {
  try {
    toast.start("正在压缩... ...");
    const { matchFiles, progress } = await beforeTinify();
    const masterTask = matchFiles.map(async ({ filePath, originFileSign }) => {
      try {
        const { afterFilePath, result } = await tinifySingle(filePath, progress)
        return [afterFilePath, result];
      } catch (error) {
        throw error;
      };
    });
    const masterTaskResult = fromPairs(await Promise.all(masterTask));
    await writeLocalRecord(masterTaskResult);
    toast.succeed("压缩完成!");
  } catch (error) {
    throw error;
  };
};