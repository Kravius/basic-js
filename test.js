//  1(1)  0(1)   0(2)   0(3)   1(2)                      1(3)
// 'STRING PLUS 00PLUS 00PLUS **STRING PLUS00PLUS00PLUS **STRING PLUS00PLUS00PLUS'

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
      return typeof num === "number" ? this.alphabet[num] : num;
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

const directMachine = new VigenereCipheringMachine();

// const reverseMachine = new VigenereCipheringMachine(false);

// console.log(directMachine.encrypt("Samelengthkey", "Samelengthkey"));
// PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.'

console.log(directMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));
// //  'ATTACK AT DAWN!'

// console.log(reverseMachine.encrypt("attack at dawn!", "alphonse"));
// //  '!ULLD XS XQHIEA'

// console.log(reverseMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));
// //  '!NWAD TA KCATTA'

// console.log(isNaN(+" "));
