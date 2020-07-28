const open = require("open");
const exists = require("path-exists");
const setAccount = require("@/utils/account/setAccount");
const { localAccountFile } = require("@/utils/account/configs");

module.exports = async function viewAccount() {
  try {
    if (await exists(localAccountFile)) {
      await open(localAccountFile);
    } else {
      await setAccount();
      await viewAccount();
    };
  } catch (error) {
    throw error;
  };
};