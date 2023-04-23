class Node {
    // Este código no debe ser modificado ❌
    constructor(name, age, bedNumber) {
        this.name = name
        this.age = age
        this.bedNumber = bedNumber
        this.next = null
    }
    
}

class PatientList {
    constructor(beds) {
        // Tu código aquí 👈🏻
        this.head = null;
        this.tail = null;
        this.beds = beds;
        this.availableBeds = beds;
    }
    
    addPatient(name, age) {
        // Tu código aquí 👈🏻
        if (this.availableBeds <= 0) {
            throw new Error("No hay camas disponibles");
        }
        const newPatient = new Node(name, age, this.findFirstAvailableBed())
        
        if (!this.head) {
            this.head = newPatient;
            this.tail = newPatient;
        } else {
            this.tail.next = newPatient;
            this.tail = newPatient;
        }
        this.availableBeds--;
    }
    
    findFirstAvailableBed(){

        let currentPatient = this.head;
        let rooms = [];
        
        if(this.head == null){
            return 1
        } else {

            for (let i = 1; i <= this.beds; i++) {
                try {
                    if (currentPatient.bedNumber) {
                        rooms.push(currentPatient.bedNumber);
                        currentPatient = currentPatient.next
                    }
                } catch (error) {
                    
                }
            }
            
            rooms.sort((a, b) => a - b)
            for (let i = 0; i <= rooms.length; i++) {
                if (rooms[i] !== i + 1) {
                    return i + 1 // Retorna el siguiente número disponible
                }
            }
        }
    }
    
    removePatient(name) {
        // Tu código aquí 👈🏻
        this.getPatient(name)
        
        if (!this.head) {
            return null;
        }
        if (this.head.name === name) {
            this.head = this.head.next;
            this.availableBeds++;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.name === name) {
                currentNode.next = currentNode.next.next;
                this.availableBeds++;
                return;
            }
            currentNode = currentNode.next;
        }
    }
    
    getPatient(name) {
        // Tu código aquí 👈🏻
        let counter = 1;
        let currentPatient = this.head;
        
        while (counter <= this.beds) {
            if (currentPatient.name === name) {
                counter = this.beds + 1;
            } else {
                currentPatient = currentPatient.next;
                counter++;
            }
        }
        
        if (!currentPatient) {
            throw new Error("Paciente no encontrado")
        }
        
        return {
            name: currentPatient.name,
            age: currentPatient.age,
            bedNumber: currentPatient.bedNumber
        };
    }
    
    getPatientList() {
        // Tu código aquí 👈🏻
        let array = [];
        let currentPatient = this.head;
        while (currentPatient) {
            //Para cada paciente en la lista, agrega un objeto en el Arr
            array.push({
                name: currentPatient.name,
                age: currentPatient.age,
                bedNumber: currentPatient.bedNumber
            })
            //apunto al siguiente, para seguir recorrientod toda la lista, con el While
            currentPatient = currentPatient.next;
        }
        return array
    }
    
    getAvailableBeds() {
        //método filter en el Arr "this.beds" para obtener un Arr de camas disponible
        return this.availableBeds
    }
    
}


const list = new PatientList(3)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)
list.addPatient("Paciente 3", 20)

list.removePatient("Paciente 2")

console.log(list.getAvailableBeds());

list.addPatient("Paciente 2", 30)

console.log(list.getPatientList());


console.log(list.getAvailableBeds());

console.log(list.getPatientList());


