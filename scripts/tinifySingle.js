const tinify = require("tinify");
const { yellow } = require("colors");
const getFileSign = require("@/utils/getFileSign");


module.exports = async (filePath, progress) => {
  try {
    await tinify.fromFile(filePath).toFile(filePath);
    progress.tick({ pathName: yellow(filePath) });
    const afterFilePath = await getFileSign(filePath);
    return { afterFilePath, result: true };
  } catch (error) {
    console.log(error);
    return false;
  }
};