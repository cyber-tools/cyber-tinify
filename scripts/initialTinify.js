const tinify = require("tinify");


module.exports = async (configs) => {
  tinify.key = configs.key;
};