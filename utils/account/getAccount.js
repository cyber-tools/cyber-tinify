const pathExists = require("path-exists");
const { readFile } = require("jsonfile");

const setAccount = require("@/utils/account/setAccount");
const { localAccountFile } = require("@/configs/runtime.config");

module.exports = async function getAccount() {
  try {
    if (await pathExists(localAccountFile)) {
      const account = await readFile(localAccountFile);
      return account;
    } else {
      await setAccount();
      const account = await getAccount();
      return account;
    };
  } catch (error) {
    throw error;
  };
};