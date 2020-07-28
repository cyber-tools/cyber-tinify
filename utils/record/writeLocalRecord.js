const path = require("path");
const exists = require("path-exists");
const { writeFile } = require("jsonfile");

const { localRecordFilePath } = require("@/configs/runtime.config");
const readLocalRecord = require("@/utils/record/readLocalRecord");

module.exports = async (tinifiyResult) => {
  try {
    if (await exists(localRecordFilePath)) {
      const localRecord = await readLocalRecord();
      const assignRecord = Object.assign({}, localRecord, tinifiyResult);
      await writeFile(localRecordFilePath, assignRecord, { spaces: 2, EOL: "\r\n" });
    } else {
      await writeFile(localRecordFilePath, tinifiyResult, { spaces: 2, EOL: "\r\n" });
    };
  } catch (error) {
    throw error;
  };
};