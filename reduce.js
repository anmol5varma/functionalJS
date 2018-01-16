function countWords( inputWords ){
	return inputWords.reduce(function (fruits, fruit){
		if(fruit in fruits){
			fruits[fruit]++;
		}
		else{
			fruits[fruit] = 1;
		}
	return fruits;
	},{});
}

let list = ['anmol','anmol','parth','shubham'];
let list1 = ['','','',''];
let result = {'anmol': 2,
							'parth': 1,
							'shubham': 1};
let result1 = {'': 3};
console.log();
console.log(result);
console.log( JSON.stringify(countWords(list)) === JSON.stringify(result) );
console.log( JSON.stringify(countWords(list1)) === JSON.stringify(result1) );
module.exports = countWords;
