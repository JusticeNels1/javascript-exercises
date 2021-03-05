const fibonacci = function(x) {

    if (x < 0) return "OOPS"
	const arr = [1,1]
	let i = 1
	while(i <= x){arr.push(arr[i] + arr[i -1]);i++};
	
	return arr[arr.length - 3];
}

module.exports = fibonacci
