const os = require("os");
const path = require("path");

exports.localAccountFile = path.resolve(os.homedir(), "./tinify.account.json");