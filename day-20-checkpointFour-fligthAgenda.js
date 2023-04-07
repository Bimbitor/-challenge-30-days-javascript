class Flight {
    constructor(origin, destination, date, capacity, price) {
        // Tu código aquí 👈
        this.origin = origin
        this.destination = destination
        this.date = date
        this.capacity = capacity
        this.price = price
        this.passengers = []
    }
    
    sellTicket(passenger) {
        if (this.capacity > 0) {
            this.passengers.push({
                fullName: `${passenger.name} ${passenger.lastName}`,
                age: passenger.age,
            });
            
            passenger.flights.push({
                origin: this.origin,
                destination: this.destination,
                date: this.date,
                price: this.price
            })
            this.capacity--
            return new Reservation(this, passenger)
        }
    }
}

class EconomicFlight extends Flight {
    sellTicket(passenger) {
        // Tu código aquí 👇
        if (passenger.age < 18 || passenger.age > 65) {
            this.price -= (20 * this.price) / 100
        }
        if (this.capacity > 0) {
            this.passengers.push({
                fullName: `${passenger.name} ${passenger.lastName}`,
                age: passenger.age,
            });
            
            passenger.flights.push({
                origin: this.origin,
                destination: this.destination,
                date: this.date,
                price: this.price
            })
            this.capacity--
            return new Reservation(this, passenger)
        }
    }
}

class PremiumFlight extends Flight {
    constructor(origin, destination, date, capacity, price, specialService) {
        super(origin, destination, date, capacity, price);
        this.specialService = specialService;
    }
    
    
    sellTicket(passenger) {
        this.price += this.specialService
        if (this.capacity > 0) {
            this.passengers.push({
                fullName: `${passenger.name} ${passenger.lastName}`,
                age: passenger.age,
            });
            
            passenger.flights.push({
                origin: this.origin,
                destination: this.destination,
                date: this.date,
                price: this.price
            })
            this.capacity--
        }
        return new Reservation(this, passenger)
    }
}

class Passenger {
    // Tu código aquí 👈
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.flights = [];
    }
    
}

class Reservation {
    constructor(flight, passenger) {
        // Tu código aquí 👈
        this.flight = flight
        this.passenger = passenger
    }
    
    reservationDetails() {
        // Tu código aquí 👈
        return{
            origin: this.flight.origin,
            destination: this.flight.destination,
            date: this.flight.date,
            reservedBy: `${this.passenger.name} ${this.passenger.lastName}`
        }
    }
}

var valor = 20;
var total = 200;
var porcentaje = (total * valor) / 100;
console.log(porcentaje);
