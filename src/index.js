const username = prompt('Enter login');
const password = prompt('Enter password');

username === 'admin' && password === 'qwerty1234'
  ? alert('Hello, admin')
  : username === 'admin'
    ? alert('Incorrect admin password')
    : username === 'guest' && password === 'asdfg1234'
      ? alert('Hi, Guest')
      : username === 'guest'
        ? alert('Incorrect guest password')
        : alert('Incorrect login data');
