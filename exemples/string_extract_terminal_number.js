
/**
 * Extract terminal number of a string
 */
const str = "folder_10"
const number = str.match(/\d+$/)[0]
console.log(Number(number))