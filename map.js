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
console.log(doubleAll(arr).toString() === [2,4,6,8,10].toString());
console.log(doubleAll(arr.slice(1,3)).toString() === [4,6].toString());
console.log(doubleAll([]).toString() === '');
