function solution(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            result += ' ' + string[i];
        } else {
            result += string[i];
        }
    }
    return result;
}

const solution2 = function(string) {
    const chars = string.split('');
    const result = [];
    chars.forEach(char => {
        if (char === char.toUpperCase()) {
            result.push(' ', char);
        } else {
            result.push(char);
        }
    });
    return result.join('');
};