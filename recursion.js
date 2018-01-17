function fn(prev, curr, index, arr){
  if(arr.length===0){
    initial[curr]++;
  }
  else{
    fu(prev, curr, index, arr);
  }
}
module.exports = function reduce(arr, fn, initial){
};
