const { writeFile } = require("jsonfile");
const { localAccountFile } = require("@/configs/runtime.config");
const inputAccountInfo = require("@/utils/account/inputAccountInfo");


module.exports = async function setSecret() {
  try {
    const AccountInfo = await inputAccountInfo();
    await writeFile(localAccountFile, AccountInfo, { spaces: 2, EOL: "\r\n" });
  } catch (error) {
    throw error;
  };
};