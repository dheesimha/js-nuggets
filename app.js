const people =
    [
        {
            name: "Dheemanth",
            age: 19,
            position: "developer"
        },
        {
            name: "Sahas",
            age: 29,
            position: "Manager"
        },
        {
            name: "Ritesh",
            age: 24,
            position: "Team lead"
        },

    ]

const ages = people.map((person) => {

    return person.age
})

console.log(ages);

const newPeople = people.map((item) => {
    return {
        firstName: item.name.toUpperCase(),
        oldAge: item.age + 20

    }
})

console.log(newPeople);

const names = people.map((person) => {
    `<h1>${person.name}</h1>`
})

const result = document.getElementById("result");

result.innerHTML = names;
