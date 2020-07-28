const exists = require("path-exists");
const { readFile } = require("jsonfile");
const { localRecordFilePath } = require("@/configs/runtime.config");

// 获取当前项目的压缩记录
module.exports = async () => {
  try {
    if (await exists(localRecordFilePath)) {
      const content = await readFile(localRecordFilePath);
      return content;
    };
    return {};
  } catch (error) {
    throw error;
  };
};