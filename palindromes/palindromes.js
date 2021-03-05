const palindromes = function(str) {
    const strArr = str.split("")

    
    const onlyLetters = strArr.map(char => {
        char = char.toLowerCase();
        if ((char.charCodeAt() <= 97 && char.charCodeAt() <= 122)) {
            return 
        }
        return char.toLowerCase()
    })

    if (onlyLetters.join("") == onlyLetters.reverse().join("")) {
        return true
    }

    return false;
}

module.exports = palindromes
