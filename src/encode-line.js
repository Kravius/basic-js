const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let arrStr = str.split('');
	let newStr = '';
	let count = 1;

	for (let i = 0; i < arrStr.length; i++){
		if (arrStr[i] === arrStr[i+1]){
			count++;
		}else {
			newStr +=  (count > 1 ? count : '') + arrStr[i] ;
			count = 1;
		}
	}
	return newStr
 }

module.exports = {
  encodeLine
};
