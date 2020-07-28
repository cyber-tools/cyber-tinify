const ProgressBar = require("progress");


module.exports = ({ total }) => {
  const progressStyle = "[:bar] (:current/:total) :pathName";
  const oProgress = new ProgressBar(progressStyle, { total });
  return oProgress;
};
