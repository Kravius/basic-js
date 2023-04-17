const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
	let reName = [];
	let objNameCount = {};

	names.forEach((elem,index) => {
		if (!reName.includes(elem)) {
			reName.push(elem);
			objNameCount[elem] = 0;
		}else {
			objNameCount[elem]++
			let newName = `${elem}(${objNameCount[elem]})`;
			while (reName.includes(newName)) {
				objNameCount[elem]++;
				newName = `${elem}(${objNameCount[elem]})`;
			}
			reName.push(newName);
			objNameCount[newName]= 0;
		}
	})
	return reName
 }

module.exports = {
  renameFiles
};
