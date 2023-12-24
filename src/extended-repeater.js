const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let normalStr = str + "";
  console.log(normalStr);
  if (options.separator === undefined) options.separator = "+";
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.addition !== undefined && typeof options.addition !== "string") {
    options.addition = options.addition + "";
  }
  if (options.addition && options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.addition && options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }

  let strRepeater = "";
  for (let i = 1; i <= options.repeatTimes; i++) {
    strRepeater += normalStr;
    if (options.addition) {
      for (let j = 1; j <= options.additionRepeatTimes; j++) {
        console.log(12);
        strRepeater += options.addition + (options.additionSeparator || "");
        if (j === options.additionRepeatTimes && options.additionSeparator) {
          strRepeater = strRepeater.slice(0, -options.additionSeparator.length);
        }
      }
    }
    strRepeater += options.separator;
    if (i === options.repeatTimes) {
      strRepeater = strRepeater.slice(0, -options.separator.length);
    }
  }
  return strRepeater;
}

module.exports = {
  repeater,
};
