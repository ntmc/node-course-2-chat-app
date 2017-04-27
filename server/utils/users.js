class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    let user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser (id) {
    let user = this.users.find((user) => user.id === id);
    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }
      return user;
  }

  getUser (id) {
    return this.users.find((user) => user.id === id);
  }

  getUserList (room) {
    let roomUsers = this.users.filter((user) => user.room === room);
    let userNames = roomUsers.map((user) => user.name);

    return userNames;
  }
}

module.exports = {
  Users
}
