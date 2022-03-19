const OutputJSON = require("./output.json");
const { default: fillVariable } = require("./main");
const _ = require("lodash");

const evaluatedJSON = fillVariable();
if (_.isEqual(evaluatedJSON, OutputJSON)) {
  console.log("Passed");
} else {
  console.log("Failed");
}
