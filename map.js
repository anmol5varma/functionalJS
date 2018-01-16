function doubleAll(numbers){
	let a = Array.prototype.map;
	let result = a.call(numbers, function(num){
		return num * 2;
	}
	);
	return result;
}
module.exports = doubleAll;
let arr = [1, 2, 3, 4, 5];
console.log(doubleAll(arr));
console.log(doubleAll(arr.slice(1,3)));
console.log(doubleAll([]));
