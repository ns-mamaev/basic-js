const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  checkArguments(...args) {
    const checkRes = args.length === 2 && args.every(arg => typeof arg === 'string');
    if (!checkRes) {
      throw new Error('Incorrect arguments!');
    }
  }

  getCodes(str) {
    return str.toUpperCase()
    .split('')
    .map(char => {
      const charCode = char.charCodeAt(0);
      return charCode >= 65 && charCode <= 90 ? charCode : char; 
    });
  }

  getMessageWithKey(message, key, type = 'encrypt') {
    this.checkArguments(message, key)

    const textCodes = this.getCodes(message);
    const keyCodes = this.getCodes(key);

    const res = [];

    let keyIndex = 0;
    for (const textCode of textCodes) {
      if (typeof textCode === 'number') {
        const keyCode = keyCodes[keyIndex];
        keyIndex = (keyIndex + 1) % (keyCodes.length);
        
        let secretCode;

        if (type === 'decrypt') {
          const codesDelta = textCode - keyCode;
          secretCode = codesDelta < 0 ? codesDelta + 91 : codesDelta + 65;
        } else {
          secretCode = (keyCode + textCode - 130) % 26 + 65;
        }

        const secretChar = String.fromCharCode(secretCode);
        res.push(secretChar);
      } else {
        res.push(textCode)
      }
    }

    return res;
  }

  getStringFromArr(arr) {
    return this.isDirect ? arr.join('') : arr.reverse().join('');
  }

  encrypt(message, key) {
    const encrypted = this.getMessageWithKey(message, key, 'encrypt');
    return this.getStringFromArr(encrypted);
  };


  decrypt(encriptedMessage, key) {
    const decrypted = this.getMessageWithKey(encriptedMessage, key, 'decrypt');
    return this.getStringFromArr(decrypted);
  }
}

module.exports = {
  VigenereCipheringMachine
};
