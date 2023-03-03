function myMap(array, func) {
    // Tu código aquí 👈
    let modified = []
    for (let i = 0; i < array.length; i++) {
        modified.push(func(array[i]))
        
    }

    return modified
}


console.log(myMap([1,2,3,4], (num) => num + 2));

console.log(myMap(
    [
    {name: "michi", age: 2},
    {name: "firulais", age: 6}
    ],
    (pet) => pet.name)
);