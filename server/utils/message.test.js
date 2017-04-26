const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'TestUser';
    const text = 'Hi there!';

    let message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({ from, text });
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'TestUser';
    const latitude = 32.1057275;
    const longitude = 34.8435099;

    let location = generateLocationMessage(from, latitude, longitude);

    expect(location.createdAt).toBeA('number');
    expect(location).toInclude({
      from,
      url: `https://www.google.com/maps?q=${latitude},${longitude}` });
  });
});
