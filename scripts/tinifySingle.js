const tinify = require("tinify");
const { yellow } = require("colors");

module.exports = async (filePath, progress) => {
  try {
    await tinify.fromFile(filePath).toFile(filePath);
    progress.tick({ pathName: yellow(filePath) });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};