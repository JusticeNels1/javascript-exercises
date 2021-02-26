const reverseString = function(str,num) {
    let retStr = [];

    for (let i = str.length - 1; i >= 0; i--) {
        retStr = retStr + str[i];
    }
    return retStr.toString();
}

module.exports = reverseString
 