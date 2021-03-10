'use strict'

console.log('Hello Node + JS')
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words);

if(str.indexOf('Fox')== -1){
    console.log('Fox is not in the str');  //Fox = -1, because isn't in the str
}
else{
    console.log('Found');
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
console.log(factorial(5));