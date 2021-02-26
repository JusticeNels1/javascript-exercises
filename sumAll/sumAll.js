const sumAll = function(a,b) {
    let sum = 0;
    if (!((a >= 0) && Number.isInteger(a)) || !((b >= 0) && Number.isInteger(b))) {
        return "ERROR";
    }
    if (a > b) {
        for (let i = b; i <= a; i++){
            sum = sum + i;
        }
    }
    else {
        for (let i = a; i <= b; i++){
            sum = sum + i;
        }
    }
    return sum;
}

module.exports = sumAll
