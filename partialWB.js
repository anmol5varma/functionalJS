let slice = Array.prototype.slice;

function logger( namespace) {
  if(namespace === null)
    namespace = '';
  return function ( ){
    //console.log(arguments);
    console.log(namespace, slice.apply(arguments).join(' ') );
    return true;
  };
}
//
// let t1 = logger('Hey');
// t1('Anmol', 'Varma');
//console.log(t2); // Hey Anmol Varma
// let t3 = t2('You');
// let t4 = t3('are amazing.');
// let a = { '0': 'Anmol', '1': 'Varma',
//   length: 2};
// console.log(slice.call(a));
// module.exports = logger;
// logger('')('Hey') === ' Hey';
// logger('')('') === ' ';
// logger(null)(null) === ' ';
// logger(null)('HI') === ' HI';

let t1 = logger('Hello');
let t2 = logger('Heyyyy');
t2('arpita');// Heyyy arpita
t1('anmol');//Hello anmol
