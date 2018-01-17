function checkUsersValid(goodUsers){
  return function allUsersValid(submittedUsers){
    return submittedUsers.every( function(users){
      return goodUsers.some( function(user){
        return user.id === users.id;
      });
    });
  };
}

let gU = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
];
let submittedUsers = [
  { id: 2 },
  { id: 1 }
];
console.log(checkUsersValid(gU)(submittedUsers) === true);
submittedUsers = [
  { id: 6 },
  { id: 1 }
];
console.log(checkUsersValid(gU)(submittedUsers) === false);
submittedUsers = [];
console.log(checkUsersValid(gU)(submittedUsers) === true);
gU = [];
submittedUsers = [
  { id: 6 },
  { id: 1 }
];
console.log(checkUsersValid(gU)(submittedUsers) === true);
console.log(checkUsersValid(gU)(submittedUsers) === true);
module.exports = checkUsersValid;
