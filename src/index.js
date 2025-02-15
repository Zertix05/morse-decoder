const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';

    for (let i = 0; i < expr.length; i += 10) {
        let encodedLetter = expr.slice(i, i + 10);

        if (encodedLetter === '**********') {
            result += ' '; // Пробел
        } else {
            let morseCode = encodedLetter
                .replace(/10/g, '.') // 10 → .
                .replace(/11/g, '-') // 11 → -
                .replace(/0/g, '');  // Убираем лишние 0

            result += MORSE_TABLE[morseCode]; // Декодируем букву
        }
    }
    return result;
}

module.exports = {
    decode
}