const {caesarCipher} = require('./ceasarCipher');
const {Transform} = require('stream');
const {upperCaseLetter} = require('./dictionaries');
const {lowerCaseLetter} = require('./dictionaries');
const modifyData = (chunk, shift) => {
    let result = chunk.toString().split('').map((letter) => {
        if (upperCaseLetter.includes(letter)) {
            return caesarCipher(upperCaseLetter, letter, shift);
        }
        else if (lowerCaseLetter.includes(letter)) {
            return caesarCipher(lowerCaseLetter, letter, shift);
        }
        else {
            return letter;
        }
    });

    return result.join('');
}

const caesarStream = (shift, action) => {
    const numberOfShifts = action === 'decode' ? shift * (-1) : shift;

    return new Transform({
        transform(chunk, enc, cb) {
            const data = modifyData(chunk, numberOfShifts);
            cb(null, data);
        }
    })
}
 module.exports = {caesarStream};