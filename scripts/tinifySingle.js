const path = require("path");
const tinify = require("tinify");
const { yellow } = require("colors");
const getFileSign = require("@/utils/getFileSign");


module.exports = async ({ filePath, originFileSign }, progress) => {
  const relativeFilePath = path.relative(process.cwd(), filePath);
  let afterFileSign, result, errorMessage;
  try {
    await tinify.fromFile(filePath).toFile(filePath);
    progress.tick({ pathName: yellow(filePath) });
    afterFileSign = await getFileSign(filePath);
    result = true;
  } catch (error) {
    if (err instanceof tinify.AccountError) {
      errorMessage = "AccountError";
    } else if (error instanceof tinify.ClientError) {
      errorMessage = "ClientError";
    } else if (error instanceof tinify.ServerError) {
      errorMessage = "ServerError";
    } else if (error instanceof tinify.ConnectionError) {
      errorMessage = "ConnectionError";
    } else {
      errorMessage = error.message;
    }
    afterFileSign = originFileSign;
    result = false;
  }
  return { afterFileSign, result, originFileSign, relativeFilePath };
};