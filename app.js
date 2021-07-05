// ... spread operator : Split into single items and copy them


const udemy = "udemy"
const letters = [...udemy]
console.log(letters);

const boys = ["Dhee", "Sahas", "Ritesh"]
const girls = ["Neethu", "Sam", "Prajna"]


const bestFriend = "Zoko"

const friends = [bestFriend, ...boys]
console.log(friends);

const person = { name: "John", job: "dev" }
const newPerson = { ...person }

console.log(person);
console.log((newPerson));
