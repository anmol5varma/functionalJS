function duckCount(){
  // console.log(arguments[0]);
  // arguments.filter
  let count = 0;
  // console.log(arguments);
  Array.prototype.map.call(arguments, function(arg){
    //console.log(arg,'##');
    if(Object.hasOwnProperty.call(arg, 'quack')){
      count++;
      // console.log(arg,'**');
    }
    //console.log(arg,'##');
  });
  // console.log(count,'$$');
  return count;
}
//console.log(duckCount({},{},{},{},{},{},{},{},{},{quack: undefined}) === 1);
//
// let obj1 = {
//   name: 'Anmol'
// };
// let obj2 = {
//   quack: undefined
// };
console.log(duckCount(null));
let obj3 = Object.create({quack: true});
// console.log(duckCount(obj1) === 0);
// console.log(duckCount(obj2) === 1);
// console.log(duckCount(obj1,obj2) === 1);
console.log(duckCount(obj3));
module.exports = duckCount;
