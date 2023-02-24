function caesar(text, shift) {
    return text
        .split('')
        .map(char => {
            if (char.match(/[a-z]/i))
                return caesar_char(char, shift)
            else
                return char;
        })
        .join('')
}

function caesar_char(char, shift) {
    let code = char.charCodeAt(0);

    if ((code >= 65) && (code <= 90)) {
        // A-Z
        code = (code + shift) % 91
        code = code < 65 ? 65 + code : code > 90 ? code - 91 : code;
        return String.fromCharCode(code);
    }
    else if ((code >= 97) && (code <= 122)) {
        // a-z
        code = (code + shift) % 123
        code = code < 96 ? 97 + code : code > 122 ? code - 123 : code;
        return String.fromCharCode(code);
    }
}


export { caesar, caesar_char };