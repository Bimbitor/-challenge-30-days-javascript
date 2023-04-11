class Newsletter {
    // Tu código aquí 👈
    constructor() {
        this.subscribers = [];
    }

    subscribe(subscriber){
        this.subscribers.push(subscriber);

    }

    unsubscribe(email){
        let indexItemToRemove = this.subscribers.findIndex(subscriber => subscriber.email === email)
        let itemToRemove = this.subscribers.splice(indexItemToRemove, 1);
        console.log(`Se ha eliminado de la lista de suscriptores el usuario con correo ${itemToRemove.email}`);

    }

    post(article){
        this.subscribers.forEach(subscriber => {
			subscriber.receive(article);
		});

    }
    
}

class Subscriber {
    // Tu código aquí 👈
    
    constructor(email) {
        this.email = email;
    }
    receive(article) {
        console.log(`El suscriptor ${this.nombre} ha recibido el artículo: ${article}`);
    }
    
}