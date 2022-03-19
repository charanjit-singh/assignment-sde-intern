const InputJSON = require("./input.json");
const { default: fillVariable } = require("./main");
const _ = require("lodash");

const OutputJSON = fillVariable();
if (_.isEqual(InputJSON, OutputJSON)) {
  console.log("Passed");
} else {
  console.log("Failed");
}
