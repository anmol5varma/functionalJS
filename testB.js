function hello(){
  console.log('a');
  setTimeout(function(){console.log('b');});
  console.log('c');
  setTimeout(function(){console.log('d');});
}

function hello1() {
  console.log('a2');
}
hello();
console.log('Hello');
hello1();
