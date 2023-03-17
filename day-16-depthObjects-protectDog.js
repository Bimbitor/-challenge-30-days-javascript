function protectDog(dog) {
    // Tu código aquí 👈
    Object.freeze(dog)
    let copy = Object.assign({}, dog)
    Object.freeze(copy)
    return copy
    
}



let protectedDog = protectDog({
    name: "Romeo",
    age: 3,
    owner: { name: "Victor", phoneNumber: "555-555-5555" },
    favoriteFood: ["pollito", "croquetas"],
    activities: ["jugar", "caminar"],
});
protectedDog.name = "pedro"
console.log(protectedDog.name);
