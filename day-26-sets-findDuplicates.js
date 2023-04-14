function removeDuplicates(values) {

    return [...new Set(values)];
}


const fruits = [
    "melon",
    "melon",
    "mango",
    "banana",
    "apple",
    "banana",
    "apple",
];

console.log(removeDuplicates(fruits))



const numbers = [1, 2, 3, 1, 2, 3];

console.log(removeDuplicates(numbers))
