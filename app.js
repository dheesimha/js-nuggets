const menu = [
    {
        name: "pancakes",
        category: "breakfast"
    },
    {
        name: "burger",
        category: "lunch"
    },
    {
        name: "steak",
        category: "dinner"
    },
    {
        name: "bacon",
        category: "breakfast"
    },
    {
        name: "eggs",
        category: "breakfast"
    },
]


const categories = ["all", ...new Set(menu.map((item) => {
    return item.category;
}))]

console.log(categories);

const result = document.querySelector(".result")
result.innerHTML = categories.map((category) => {
    return (
        `<h1>${category}</h1>`
    )
}).join("")
