const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

let testUsers;

beforeEach(() => {
  users = new Users();
  users.users = [{
    id: '1',
    name: 'Harry',
    room: 'The chamber of secrets'
  }, {
    id: '2',
    name: 'Hermione',
    room: 'The library'
  }, {
    id: '3',
    name: 'Ron',
    room: 'The chamber of secrets'
  }];
});

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Test',
      room: 'The chamber of secrets'
    };

    let resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    let resUser = users.removeUser('1');
    expect(resUser).toInclude({
      id: '1',
      name: 'Harry',
      room: 'The chamber of secrets'
    });
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    let resUser = users.removeUser('4');
    expect(resUser).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    let resUser = users.getUser('1');
    expect(resUser).toInclude({
      id: '1',
      name: 'Harry',
      room: 'The chamber of secrets'
    });
  });

  it('should not find user', () => {
    let resUser = users.getUser('4');
    expect(resUser).toNotExist();
  });

  it('should return names for the chamber of secrets', () => {
    let userList = users.getUserList('The chamber of secrets');

    expect(userList).toEqual(['Harry', 'Ron']);
  });
});
