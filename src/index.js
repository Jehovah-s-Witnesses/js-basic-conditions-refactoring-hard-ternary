const username = prompt('Enter login');
const password = prompt('Enter password');

/*username === 'admin' && password === 'qwerty1234'
  ? alert('Hello, admin')
  : username === 'admin'
    ? alert('Incorrect admin password')
    : username === 'guest' && password === 'asdfg1234'
      ? alert('Hi, Guest')
      : username === 'guest'
        ? alert('Incorrect guest password')
        : alert('Incorrect login data');

 */

if (username === 'admin' && password === 'qwerty1234') {
  alert('Hello,admin');
} else if (username === 'admin') {
  alert('Incorrect admin password') ;
} else if (username === 'guest' && password === 'asdfg1234') {
  alert('Hi, Guest');
} else if (username === 'guest') {
  alert('Incorrect guest password');
} else {
  alert('Incorrect login data');
}


