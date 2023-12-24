//  1(1)  0(1)   0(2)   0(3)   1(2)                      1(3)
// 'STRING PLUS 00PLUS 00PLUS **STRING PLUS00PLUS00PLUS **STRING PLUS00PLUS00PLUS'

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

console.log(
  repeater("REPEATABLE_STRING", {
    repeatTimes: 2,
    addition: "ADDITION",
    additionRepeatTimes: 3,
  })
);

// console.log("1234".slice(0, -(length-1)));123
// REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION
