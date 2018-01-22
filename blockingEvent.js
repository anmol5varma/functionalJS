function repeat(operation, num) {
  operation();
  if(num % 2 === 0)
    setTimeout(function(){
      repeat(operation, --num);
    }, 10);
  else {
    repeat(operation, --num);
  }
  if (num <= 0) return;
  // //operation();
  // return repeat(operation, --num);
}

module.exports = repeat;
