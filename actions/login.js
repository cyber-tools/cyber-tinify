const toast = require("@/utils/toast");
const setAccount = require("@/utils/account/setAccount");

module.exports = async () => {
  try {
    await setAccount();
    toast.succeed("登录成功!");
  } catch (error) {
    toast.fail("登录失败!");
    throw error;
  };
};