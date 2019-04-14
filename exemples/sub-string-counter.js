// sub-string-counter.js

/**
 * Return the frequency of a substring in a string
 * @param {string} string - The string.
 * @param {string} string - The substring to count.
 * @returns {number} number - The frequency.
 * 
 * @author Drozerah https://gist.github.com/Drozerah/2b8e08d28413d66c3e63d7fce80994ce
 * @see https://stackoverflow.com/a/55670859/9370788
 */
const subStringCounter = (string, subString) => {

    let count = 0
    string.replace(new RegExp(subString, 'gi'), () => count++)
    return count
}

const string = " foofoofoo";
const subString = "foo"

const result = subStringCounter(string, subString)

console.log(result)

// subStringCounter("foofoofoo", "bar"); //0
// subStringCounter("foofoofoo", "foo"); //3