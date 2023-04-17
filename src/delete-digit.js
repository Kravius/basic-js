const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
	let max = 0;
	let stringNum = num.toString().split('')
	for (let i = 0; i < stringNum.length; i++){
		let cuatLetter = stringNum.slice(i,i+1).toString();

		stringNum.splice(i, 1);
		console.log(stringNum)

		if (stringNum.join('') > max){
			max = stringNum.join('');
		}
		stringNum.splice(i, 0, cuatLetter)
	}
	return +max
}

module.exports = {
  deleteDigit
};
