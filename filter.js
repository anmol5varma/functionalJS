function getShortMessage(messages){
  const res = messages.filter(function (obj){
    return obj.message.length < 50 ? true : false;
  });
  let result = res.map( function(obj){
    return obj.message;
  });
  return result;
}
let obj1 = [	{message: 'Hello my name is anmol varma.'},
  {message: 'asdjioajsiofdasofoasdfoafkadfoadhfjadfuaoasfoasfaifiafadfocdjshkfks'},
  {message: 'Hello.'}];
let result1 = [	{message: 'Hello my name is anmol varma.'},
  {message: 'Hello.'}];
let obj2 = [	{message: 'asdjioajsiofdasofoasdfoafkadfoadhfjadfuaoasfoasfaifiafadfocdjshkfks'},
  {message: 'asdjioajsiofdasofoasdfoafkadfoadhfjadfuaoasfoasfaifiafadfocdjshkfks'},
  {message: 'asdjioajsiofdasofoasdfoafkadfoadhfjadfuaoasfoasfaifiafadfocdjshkfks'}];
let result2 = [];
console.log( JSON.stringify(getShortMessage(obj1)) === JSON.stringify(result1) );
console.log( JSON.stringify(getShortMessage(obj2)) === JSON.stringify(result2) );
module.exports = getShortMessage;
