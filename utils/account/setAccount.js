const { writeFile } = require("jsonfile");
const inputAccountInfo = require("@/utils/account/inputAccountInfo");
const { localAccountFile } = require("./configs");

module.exports = async function setSecret() {
  try {
    const AccountInfo = await inputAccountInfo();
    await writeFile(localAccountFile, AccountInfo, { spaces: 2, EOL: "\r\n" });
  } catch (error) {
    throw error;
  };
};