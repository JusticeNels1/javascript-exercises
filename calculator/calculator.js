function add (x,y) {
	return x + y;
}

function subtract (x,y) {
	return x - y;
}

function sum (arr) {return arr.reduce((total,num) => (total + num),0)}

function multiply (arr) {return arr.reduce((total,num) => (total * num),1)}
	

function power(x,y) {
	return Math.pow(x,y)
}

function factorial(x) {
    if (x == 0) {return 1}
	const arr = []
	let i = 1
	while(i <= x){arr.push(i);i++};
    return arr.reduce((total,num) =>(total * num))
}


module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}