function fn(prev, curr, index, arr){
  return prev + curr;
}

function reduce(arr, fn, initial){
  let result = initial;
  if(arr.length === 0){
    return result;
  }
  else{
    result = fn(initial, arr[0], 0, arr);
    return reduce(arr.slice(1),fn,result);
  }
}

console.log(reduce([1,2,3,5,6], fn, 2) === 19);

console.log(reduce([], fn, 0) === 0);

console.log(fn(1,2,3) === 3);
module.exports = reduce;
