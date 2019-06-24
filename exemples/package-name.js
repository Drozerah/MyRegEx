//   Check string size and allowed characters
// - the string must be less than or equal to 124 characters
// - the string can’t start with a dot or an underscore
// - the string must not have uppercase letters
// - the string can’t contain any non-URL-safe characters
// - the string can contain hyphens (-) or underscores (_)
// - the string can't contain white space

const regex = /^[a-z]{1}[a-z-_]{0,123}$/
//const result = regex.test(test_0) // false
/**
 * false cases
 */
// start with a dot <= 124
const test_0 = '.aaaaa' //false
// start with an underscore <= 124
const test_1 = '_aaaaa' //false
// string length <= 124
const test_2 = 'azertyuiopqsdfghjklmazertyuiopqsdfghjklmazertyuiopqsdfghjklmazertyuiopqsdfghjklmazertyuiopqsdfghjklmazertyuiopqsdfghjklmxxxxw' // invalid 125 is > than 124
// string with uppercase letters <= 124
const test_3 = 'AAAAAA' //false
// string with white spaces <= 124
const test_4 = 'aa aaa' //false
// string with non-URL-safe characters <= 124
const test_5 = 'a@aaaa' //false
/**
 * true cases
 */
// string with only lowercase <= 124
const test_6 = 'aaaaaa' //true
// string with hyphens and lowercases <=124
const test_7 = 'a-a-a-' //true
// string with underscores <= 124
const test_8 = 'a_a_a_' //true


for (let idx = 0; idx <= 8; idx++) {
    
    console.log(`${eval('test_'+ idx)} => ${regex.test(eval('test_'+ idx)) ? 'valid' : 'invalid'}`)
    if (idx == 2) {
        console.log(`=> string.length = ${test_2.length}`)
    } 

}