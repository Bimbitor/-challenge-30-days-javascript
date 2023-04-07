class Animal {
    // Tu código aquí
    constructor(name, age, specie){
        this._name = name
        this._age = age
        this._specie = specie
    }
    
    getInfo () {
        return {
            name: this._name,
            age: this._age,
            specie: this._specie
        }
    }
}

export class Mammal extends Animal {
    // Tu código aquí 👈
    constructor(name, age, specie, hasFur){
        super(name, age, specie)
        this.hasFur = hasFur
    }

    getInfo () {
        return {
            name: this._name,
            age: this._age,
            specie: this._specie,
            hasFur: this.hasFur
        }
    }
}

export class Dog extends Mammal {
    // Tu código aquí 👈
    constructor(name, age, breed, hasFur, specie){
        super(name, age, "dog", hasFur)
        this.breed = breed
    }

    getInfo () {
        return {
            name: this._name,
            age: this._age,
            hasFur: this.hasFur,
            breed: this.breed,
            specie: this._specie,
        }
    }

    bark (){
        return "woof!"
    }
}


const bird = new Animal("pepe", 1, "bird")
bird.getInfo()


const hippo = new Mammal("bartolo", 3, "hippo", false)
hippo.getInfo()


const dog = new Dog("fido", 4, "pastor aleman", true);
dog.bark()
