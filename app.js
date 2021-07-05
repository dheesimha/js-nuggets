const fruits = ["apple", "orange", "lemon", "banana"]

const [first, ...restOfTheFruits] = fruits
const specificFruit = restOfTheFruits.find((fruit) => fruit === "lemon")

console.log(specificFruit);

console.log(first, restOfTheFruits);

const person = { name: "Dheemanth", lastName: "Narasimha", job: "dev" }

const { name, ...restOfThePerson } = person

console.log(name, restOfThePerson);


//functions

const getAvergage = (name, ...scores) => {
    console.log(name);
    console.log(scores);

}

getAvergage(person.name, 89, 70, 12)
