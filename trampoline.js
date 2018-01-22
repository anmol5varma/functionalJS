function operation() {
  for(let i=0;i<100;i++);
}
function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  return function(){
    if (num <= 0) return;
    operation();
    return repeat(operation, --num);
  };
}

function trampoline(fn) {
  while(fn && typeof fn === 'function'){
    fn = fn();
    console.log(fn.toString());// for test case to see a function object is returned
  }
  return fn;
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  //trampoline(operation);
  trampoline(function(){
    return repeat(operation, num);
  });
};


trampoline(function(){
  return repeat(operation, 5);
});
