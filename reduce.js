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
console.log(countWords(list));
console.log(countWords(list1));
module.exports = countWords;
