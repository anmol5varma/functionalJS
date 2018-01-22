
function printHelper(first, second) {
  console.log(first,second);
}
function logger(namespace) {
  // SOLUTION GOES HERE
  // if(namespace === null)
  //   namespace = '';
  // function toBind(){
  // return function(){
  //   console.log(namespace, slice.call(arguments).join(' '));};
  // }
  // return toBind.bind(namespace);
  // return console.log.bind(console.log, namespace);

  let inter = printHelper.bind(null,namespace);
  //console.log(inter);
  return inter;
}

logger('Hello')('Anmol');
let t1 = logger('Heyyyy');
console.log(t1);//verify function is returned
t1('arpita');// Heyyy arpita
t1('anmol');//Heyyy anmol
logger('Hey')('Anmol');// Hey Anmol
let t3 = t2('You');
let t4 = t3('are amazing.'); //You are amazing.
module.exports = logger;
