const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	//   throw new NotImplementedError('Not implemented');
	if(typeof members === null || typeof members === 'undefined' || !Array.isArray(members) || members.length === 0) {
		return false
	}
	const shifr = [];
	members.filter(name => typeof name === 'string')
	.forEach((name) =>
	shifr.push(name.trim().slice(0,1).toUpperCase()));
	return shifr.sort().join('');
	}

module.exports = {
  createDreamTeam
};
