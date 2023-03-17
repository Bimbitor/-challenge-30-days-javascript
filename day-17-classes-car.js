class Car {
    // Tu código aquí 👈
    constructor(brand, model, year, mileage){
        this.brand = brand
        this.model = model
        this.year = year
        this.mileage = mileage
        this.state = false
    }

    turnOn(){
        this.state = true
    }

    turnOff(){
        this.state = false
    }

    drive(kilometers){
        if (this.state === true) {
            return this.mileage += kilometers
        } else {
            throw new Error("El auto está apagado")
        }
    }
}









const toyota = new Auto("Toyota", "Corolla", 2020, 0);
toyota.turnOn();
toyota.drive(100);
toyota.mileage







toyota.turnOff()
toyota.drive(100)
