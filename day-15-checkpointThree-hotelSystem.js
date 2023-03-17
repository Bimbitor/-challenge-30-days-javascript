function hotelSystem(rooms) {
    // Tu código aquí
    let reservations = []
    
    function transformDates(date) {
        let modifiedDate = date.split("/")
        let [day, month] = modifiedDate
        const newDate = new Date(2023, month, day);
        return newDate
    }
    
    function compareDates(oldReservation, newReservation){
        const fechaInicio1 = transformDates(oldReservation.checkIn);
        const fechaFin1 = transformDates(oldReservation.checkOut);
        const fechaInicio2 = transformDates(newReservation.checkIn);
        const fechaFin2 = transformDates(newReservation.checkOut);
        
        
        // Comparamos las fechas y devolvemos el resultado
        return fechaInicio2 > fechaFin1 || fechaFin2 < fechaInicio1;
    }
    
    
    function add(item){
        reservations.push(item)
    }
    
    return {
        getReservations(){
            return reservations
        },
        
        addReservation(reservation) {
            let availableToAdd = true
            if (reservations.length === 0) {
                availableToAdd = false
                add(reservation)
                return `La reservación de ${reservation.name} fue agendada exitosamente`
            } else {
                let createdRooms =  reservations.map(x => x.roomNumber)
                if (createdRooms.includes(reservation.roomNumber)) {
                    reservations.forEach(y => {
                        if (y.roomNumber == reservation.roomNumber) {
                            if (compareDates(y, reservation)) {
                                availableToAdd = true
                            } else{
                                availableToAdd = false
                                throw new Error("La habitación no está disponible")
                            }
                        }
                    })
                } else {
                    availableToAdd = false
                    add(reservation)
                    return `La reservación de ${reservation.name} fue agendada exitosamente`
                }
            }
            
            if (availableToAdd) {
                add(reservation)
                return `La reservación de ${reservation.name} fue agendada exitosamente`
            }
        },
        
        removeReservation(id) {
            let deleted
            let createdReservations =  reservations.map(x => x.id)
            if (reservations.length === 0) {
                throw new Error("La reservación que se busca remover no existe")
            } else if(!createdReservations.includes(id)){
                throw new Error("La reservación que se busca remover no existe")
            } else {
                reservations.forEach(x => {
                    if (x.id == id) {
                        let index = reservations.findIndex(x => x.id == id)
                        deleted = reservations[index]
                        reservations.splice(index, 1)
                    }
                })
            }
            return deleted
        },
        
        searchReservation(id) {
            let validation = reservations.find(reservation => reservation.id == id)
            if(validation === undefined){
                throw new Error("La reservación no fue encontrada")
            } else {
                return validation
            }
        },
        
        getSortReservations() {
            let sortedReservations = [...reservations].sort((a, b) => {
                let dateA = transformDates(a.checkIn);
                let dateB = transformDates(b.checkIn);
                return dateA - dateB;
            });
            return sortedReservations;
        },
        
        
        getAvailableRooms(checkIn, checkOut) {
            const occupiedRooms = []
            const availableRooms = []
            reservations.forEach(reservation => {
                let requestDates = {
                    checkIn: checkIn,
                    checkOut: checkOut,
                }
                if (!compareDates(reservation, requestDates)) {
                    occupiedRooms.push(reservation.roomNumber)
                    console.log(occupiedRooms);
                    return occupiedRooms
                }
            })

            for (let i = 1; i <= rooms; i++) {
                if (!occupiedRooms.includes(i)) {
                    availableRooms.push(i)
                }
                
            }

            return availableRooms
        },
    }
}

const hotel = hotelSystem(10);

// Agregar una nueva reservación
hotel.addReservation({
    id: 1,
    name: "John Doe",
    checkIn: "01/01",
    checkOut: "02/01",
    roomNumber: 1,
});

// Agregar una nueva reservación
hotel.addReservation({
    id: 2,
    name: "John Doe",
    checkIn: "15/02",
    checkOut: "28/02",
    roomNumber: 3,
});

// Agregar una nueva reservación
hotel.addReservation({
    id: 3,
    name: "John Doe",
    checkIn: "03/01",
    checkOut: "04/01",
    roomNumber: 1,
});

hotel.addReservation({
    id: 4,
    name: "John Doe",
    checkIn: "08/01",
    checkOut: "09/01",
    roomNumber: 8,
});

// Agregar una nueva reservación
hotel.addReservation({
    id: 5,
    name: "John Doe",
    checkIn: "11/02",
    checkOut: "12/02",
    roomNumber: 5,
});


// Agregar una nueva reservación
hotel.addReservation({
    id: 6,
    name: "John Doe",
    checkIn: "13/01",
    checkOut: "15/01",
    roomNumber: 1,
});


console.log(hotel.getAvailableRooms("01/01", "05/01"))



