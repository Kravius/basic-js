const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
	let count = 0;
	let obj = {};
	for (let i = 0; i < str1.length; i++) {
		if(!obj[str1[i]]){
			obj[str1[i]] = 1;
		}else {
			obj[str1[i]]++
		}
	}
	for (let j = 0; j < str2.length; j++){
		if (obj[str2[j]] && obj[str2[j]] > 0){
			count++;
			obj[str2[j]]--
		}
	}
	return count
}

module.exports = {
	getCommonCharacterCount
};
