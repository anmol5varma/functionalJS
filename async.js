function loadUsers(userIds, load, done) {
  let users = [];
  for (let i = 0; i < userIds.length; i++) {
    users.push(load(userIds[i]));
  }
  done(users);
  return users;
}

module.exports = loadUsers;
//
// [ { id: 246, name: 'Laborum Aliquip' },
//   { id: 463, name: 'Cupidatat Nulla' },
//   { id: 19, name: 'Aliqua Aliquip' },
//   { id: 28, name: 'Sit Esse' },
//   { id: 996, name: 'Commodo Proident' },
//   { id: 734, name: 'Reprehenderit Aute' },
//   { id: 86, name: 'Ut Lorem' },
//   { id: 936, name: 'Adipisicing Do' },
//   { id: 694, name: 'Amet In' },
//   { id: 137, name: 'Et Sit' },
//   { id: 739, name: 'Occaecat Occaecat' },
//   { id: 242, name: 'Pariatur Mollit' } ]
