const repeatString = function(str,num) {
    strRet = "";
    if (num < 0) {return "ERROR"};

    for (let i = 0; i < num; i++) {
        strRet = str + strRet;
    }

    return strRet;
}

module.exports = repeatString
