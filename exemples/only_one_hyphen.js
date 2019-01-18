// match strings with exactly one hyphen
let string = 'il fera bé-au a-t-il et aa-bb-cc-dd peut être mi-juîllet Test-- abc-t abc-de trt--tt !'

let words = string.split(' ')

// RegEx to match strings with exactly one hyphen

//> testing this regex tool https://regex101.com/r/W7mbJd/2
/*
    / regex open tag
        ^ start of the string
        [ open class character
            \w matches any word character (equal to [a-zA-Z0-9_])
            àâçéèêëîïôûùüÿñæœ french accented characters
        ] close class character
        * Quantifier — Matches between zero and unlimited times
        - matches one time the character - literally (case insensitive)
        [ open class character
            \w matches any word character (equal to [a-zA-Z0-9_])
            àâçéèêëîïôûùüÿñæœ french accented characters
        ] close class character
        + Quantifier — Matches between one and unlimited times
        [ open class character
            ^ matches any character except
            \s whitespace character 
            - matches one time the character - literally (case insensitive)
        ] close class character
        $ asserts position at the end of the string
    / regex close tag
    g modifier: global. All matches (don't return after first match)
    i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
*/
const regex_one_hyphen = /^[\wàâçéèêëîïôûùüÿñæœ]*-[\wàâçéèêëîïôûùüÿñæœ]+[^\s-]$/gi

// [extra] match strings with exactly two hyphens
const regex_two_hyphens = /^[\wàâçéèêëîïôûùüÿñæœ]*-[\wàâçéèêëîïôûùüÿñæœ]+-[\wàâçéèêëîïôûùüÿñæœ]+[^\s-]$/gi

const one_hyphen_words = words.filter(element => element.match(regex_one_hyphen) !== null)

console.log(one_hyphen_words)




