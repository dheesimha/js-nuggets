const bob = {
    first: "Bob",
    last: "Jack",
    city: "Bangalore",
    siblings: {
        sister: "Jane"
    }

}

const { first, last, city, siblings: { sister: favorite_sister } } = bob
console.log(first, last, city, favorite_sister);


// const firstName = bob.first
// const lastName = bob.last
// const sister = bob.siblings.sister

// console.log(firstName, lastName, sister);

function printPerson(person) {
    console.log(person.first);
}

printPerson(bob)


