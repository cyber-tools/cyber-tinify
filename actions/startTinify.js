const getMatchFiles = require("@/scripts/getMatchFiles");
const tinifyProcess = require("@/scripts/tinifyProcess");
const getTinifyConfig = require("@/utils/getTinifyConfig");


module.exports = async () => {
  try {
    const configs = getTinifyConfig();
    const matchFiles = await getMatchFiles(configs);
    await tinifyProcess(matchFiles);
  } catch (error) {
    throw error;
  };
};