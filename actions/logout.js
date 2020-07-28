const toast = require("@/utils/toast");
const clearAccount = require("@/utils/account/clearAccount");

module.exports = async () => {
  try {
    await clearAccount();
    toast.succeed("登出成功!");
  } catch (error) {
    toast.succeed("失败!");
    throw error;
  };
};