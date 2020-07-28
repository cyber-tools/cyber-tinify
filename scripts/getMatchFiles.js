const path = require("path");
const glob = require("glob");
const { promisify } = require("es6-promisify");

module.exports = async ({ root, ext, ignore }) => {
  const pattern = path.resolve(root, `./**/*.{${ext.join(",")}}`);
  const computedIgnore = ["**/node_modules/**/*"].concat(ignore);
  const matchFiles = await promisify(glob)(pattern, { ignore: computedIgnore });
  return matchFiles;
};