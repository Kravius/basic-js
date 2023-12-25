const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct) {
    this.alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    this.arrNumAlphabet = [];
    this.arrNumCode = [];
    if (direct !== undefined) this._direct = direct;
  }
  encrypt(str, code) {
    if (!str || !code) {
      throw new Error("Incorrect arguments!");
    }

    let arrStr = str.split("");
    let arrCode = code.split("");
    let codeLength = arrCode.length;
    console.log(this.alphabet.length);
    // arr with string number
    arrStr.forEach((letter) => {
      if (
        letter.toLowerCase().charCodeAt(0) >= 97 &&
        letter.charCodeAt(0) <= 122
      ) {
        this.arrNumAlphabet.push(this.alphabet.indexOf(letter.toLowerCase()));
      } else {
        this.arrNumAlphabet.push(letter);
      }
    });

    // arr with code number
    arrCode.forEach((letter) => {
      if (
        letter.toLowerCase().charCodeAt(0) >= 97 &&
        letter.charCodeAt(0) <= 122
      ) {
        this.arrNumCode.push(this.alphabet.indexOf(letter.toLowerCase()));
      } else {
        this.arrNumCode.push(letter);
      }
    });

    let resetCodeLength = 0;
    let newStrCode = [];
    for (let i = 0; i < this.arrNumAlphabet.length; i++) {
      let numOfSum = 0;

      if (resetCodeLength >= codeLength) {
        resetCodeLength = 0;
      }
      if (typeof this.arrNumAlphabet[i] === "number") {
        numOfSum = this.arrNumAlphabet[i] + this.arrNumCode[resetCodeLength++];
        if (numOfSum >= 26) {
          numOfSum = numOfSum - 26;
        }
        newStrCode.push(numOfSum);
      } else {
        newStrCode.push(this.arrNumAlphabet[i]);
      }
    }

    // use new sumNumber from str code to create string
    let newArrEncode = newStrCode.map((num) => {
      return typeof num === "number" ? this.alphabet[num].toUpperCase() : num;
    });

    this.arrNumAlphabet = [];
    this.arrNumCode = [];
    return this._direct === false
      ? newArrEncode.reverse().join("").toUpperCase()
      : newArrEncode.join("").toUpperCase();
  }

  decrypt(str, code) {
    if (!str || !code) {
      throw new Error("Incorrect arguments!");
    }

    let arrStr = str.split("");
    let arrCode = code.split("");
    let codeLength = arrCode.length;
    console.log(this.alphabet.length);
    // arr with string number
    arrStr.forEach((letter) => {
      if (
        letter.toLowerCase().charCodeAt(0) >= 97 &&
        letter.charCodeAt(0) <= 122
      ) {
        this.arrNumAlphabet.push(this.alphabet.indexOf(letter.toLowerCase()));
      } else {
        this.arrNumAlphabet.push(letter);
      }
    });

    // arr with code number
    arrCode.forEach((letter) => {
      if (
        letter.toLowerCase().charCodeAt(0) >= 97 &&
        letter.charCodeAt(0) <= 122
      ) {
        this.arrNumCode.push(this.alphabet.indexOf(letter.toLowerCase()));
      } else {
        this.arrNumCode.push(letter);
      }
    });

    let resetCodeLength = 0;
    let newStrCode = [];
    for (let i = 0; i < this.arrNumAlphabet.length; i++) {
      let numOfSum = 0;

      if (resetCodeLength >= codeLength) {
        resetCodeLength = 0;
      }
      if (typeof this.arrNumAlphabet[i] === "number") {
        numOfSum = this.arrNumAlphabet[i] - this.arrNumCode[resetCodeLength++];
        if (numOfSum < 0) {
          numOfSum = numOfSum + 26;
        }
        newStrCode.push(numOfSum);
      } else {
        newStrCode.push(this.arrNumAlphabet[i]);
      }
    }

    // use new sumNumber from str code to create string
    let newArrEncode = newStrCode.map((num) => {
      return typeof num === "number" ? this.alphabet[num] : num;
    });

    this.arrNumAlphabet = [];
    this.arrNumCode = [];
    return this._direct === false
      ? newArrEncode.reverse().join("").toUpperCase()
      : newArrEncode.join("").toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
