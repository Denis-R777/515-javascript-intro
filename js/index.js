// alert('HELLO!');

let greetings = "World!";
// alert(greetings);

const message = "Hello! " + greetings;
alert(message);

const userAge = Number(prompt("Enter your age"));

alert("Your age is " + userAge);

//Зробити нову змінну nextAge
//Присвоїти в неї userAge збільшений на один
//Вивести на екран nextAge

const nextAge = userAge + 1;
alert("Next year you will be " + nextAge);

//string
//number
//boolean   true; false; правда або неправда
//undefined
//null
//object
//ES2015:
//symbol

if (userAge >= 18) {
  // !== не дорівнює    === дорівнює   && -енд     || - або
  alert("You are adult!");
} else {
  alert("You are underaged");
}

function addOne(value) {
  const result = value + 1;
  return result;
}

function add(a, b) {
  const result = a + b;
  return result;
}
