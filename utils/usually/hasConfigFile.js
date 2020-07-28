const path = require("path");
const pathExists = require("path-exists")


module.exports = async () => {
  try {
    const configFile = path.resolve(process.cwd(), "tinify.config.js");
    const hasConfigFile = await pathExists(configFile);
    return hasConfigFile;
  } catch (error) {
    throw error;
  };
};