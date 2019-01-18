// Count whitespace 
let string = " Lorem ipsum dolor sit amet ";
// set conter
let count = 0;
// set regular expression
const regex = /\s/gi

string = string.trim().replace(regex, () => {
    ++count
    return ' '
});

console.log(`The string "${string}" contains ${count} whitespaces`);
