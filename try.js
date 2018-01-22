// setTimeout(fn){
//     return fn();
// }

function bingo(){
  let users = [];
  for(let i=0; i< 5; i++){
    users.push(async function ( i ){
      return await x;
    });
  }
  return users;
}

console.log(bingo());
