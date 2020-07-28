const colors = require("colors");
const prompt = require("prompt");
const { promisify } = require("es6-promisify");


module.exports = async () => {
  try {
    console.log(colors.yellow("tinipng秘钥信息查询:"), colors.yellow("https://tinypng.com/dashboard/api"));
    console.log(colors.blue("秘钥信息将会储存在本地,可使用view命令查看"));
    prompt.message = undefined;
    prompt.delimiter = "";
    prompt.start();
    const { SecretKey } = await promisify(prompt.get)([{
      name: "SecretKey",
      required: true,
      message: colors.red("SecretKey必须填写!"),
      description: colors.white("请输入SecretKey")
    }]);
    return { SecretKey };
  } catch (error) {
    if (error.message === "canceled") {
      process.exit(0);
    };
    throw error;
  };
};