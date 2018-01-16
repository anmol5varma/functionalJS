let c = 0;
function operation(){
  console.log('global counter value is: ', c);
  return 1;
}

function repeat(operation, num){
  c=0;
  for(let i= 0; i < num; i++){
    c++;
    operation();
  }
}
module.exports = repeat;

console.log(operation());
repeat(operation, 5);
console.log('************');
repeat(operation, -1);
console.log('************');
repeat(operation, 3);
//console.log(c);
