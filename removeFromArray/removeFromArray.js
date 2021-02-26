const removeFromArray = function(arr,a,b,c,d,e) {
    let remLs = [a,b,c,d,e];

    for (const value of remLs) {
        for (let i = arr.length - 1; i >= 0; i--) { 
            if (arr[i] === value) {
                arr.splice(i,1);
            }
        }
    }
   return arr;

}

module.exports = removeFromArray
