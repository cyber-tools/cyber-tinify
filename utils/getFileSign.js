const fs = require("fs");
const md5 = require("md5");
const { promisify } = require("es6-promisify");

module.exports = async (filePath) => {
  try {
    const imageContent = await promisify(fs.readFile)(filePath, { encoding: "utf-8" });
    return md5(imageContent);
  } catch (error) {
    throw error;
  };
};