const person = {
    firstName: "wamique",
    lastName: "abro"
};

console.log(person);

console.log(person.firstName);

console.log(person['firstName']); // this one has reason, mentioned below

const personLastName = 'lastName';

console.log(person[lastName]); // so the user can tell what I want to fetch or some other functionalities can work now.