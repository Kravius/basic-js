const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arrChain: [],
  getLength() {
    return this.arrChain.length;
  },
  addLink(value) {
    this.arrChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position <= 0 ||
      position > this.arrChain.length ||
      !Number.isInteger(position)
    ) {
      this.arrChain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arrChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arrChain.reverse();
    return this;
  },
  finishChain() {
    const result = this.arrChain.join("~~");
    this.arrChain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
