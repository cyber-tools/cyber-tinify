const getMatchFiles = require("@/scripts/getMatchFiles");
const initialTinify = require("@/scripts/initialTinify");
const tinifyProcess = require("@/scripts/tinifyProcess");
const getTinifyConfig = require("@/utils/getTinifyConfig");


module.exports = async () => {
  try {
    const configs = getTinifyConfig();
    await initialTinify(configs);
    const matchFiles = await getMatchFiles(configs);
    await tinifyProcess(matchFiles);
  } catch (error) {
    throw error;
  };
};