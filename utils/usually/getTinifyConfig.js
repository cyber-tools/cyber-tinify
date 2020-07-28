const path = require("path");

module.exports = () => {
  const defaultConfig = require("@/configs/tinify.config");
  const tinifyConfigResolve = require.resolve("./tinify.config.js", {
    paths: [process.cwd(), path.resolve(__dirname, "../../configs/")]
  });
  const customerConfig = require(tinifyConfigResolve);
  return Object.assign({}, defaultConfig, customerConfig);
};