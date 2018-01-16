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
let obj2 = [	{message: 'asdjioajsiofdasofoasdfoafkadfoadhfjadfuaoasfoasfaifiafadfocdjshkfks'},
							{message: 'asdjioajsiofdasofoasdfoafkadfoadhfjadfuaoasfoasfaifiafadfocdjshkfks'},
							{message: 'asdjioajsiofdasofoasdfoafkadfoadhfjadfuaoasfoasfaifiafadfocdjshkfks'}];
console.log(getShortMessage(obj1));
console.log(getShortMessage(obj2));
module.exports = getShortMessage;
