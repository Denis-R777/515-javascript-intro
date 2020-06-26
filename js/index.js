// alert('HELLO!');

let greetings = 'World!';
// alert(greetings);

const message = 'Hello! ' + greetings
alert(message)

const userAge = prompt('Enter your age');

alert('Your age is: ' + userAge);

//Зробити нову змінну nextAge
//Присвоїти в неї userAge збільшений на один
//Вивести на екран nextAge

const nextAge = userAge + 1;
alert(nextAge);

if (userAge >= 18) {
    alert('You are adult!');
} else {
    alert('You are underaged');
}


function add(a, b) {
    const result = a + b;
    return result;
}