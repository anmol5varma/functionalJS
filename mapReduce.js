let slice = Array.prototype.slice;
function arrayMap(arr, fn) {
  return arr.reduce(function(prev, curr){
    return fn.call(prev,curr);
  },[]);
}
module.exports = arrayMap;
//if fn return is x*2 then 2,4,6,8
