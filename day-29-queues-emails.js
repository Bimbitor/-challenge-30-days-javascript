class Mail {
    constructor(from, to, body, subject) {
        this.from = from;
        this.to = to;
        this.body = body;
        this.subject = subject;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    
    enqueue(from, to, body, subject) {
        const newMail = new Mail(from, to, body, subject);
        if (this.length === 0) {
            this.first = newMail;
            this.last = newMail;
        } else {
            this.last.next = newMail;
            this.last = newMail;
        }
        this.length++;
        
        return this;
    }
    
    dequeue() {

        if (!this.first) {
            throw new Error("No hay canciones en la playlist")
        }
        if (this.first === this.last) {
            this.last = null;
        }
        let reply = {
            from : this.first.from,
            to : this.first.to,
            body : this.first.body,
            subject : this.first.subject
        }
        this.first = this.first.next;
        this.length--;
        
        return reply;
    }
    
    peek() {
        return this.first;
    }    
    
    size() {
        // Tu código aquí 👈🏻
        return this.length
    }
}



const emailQueue = new Queue();

emailQueue.enqueue(
    'jane@ejemplo.com',
    'support@ejemplo.com',
    'No puedo iniciar sesión en mi cuenta',
    'Problema de inicio de sesión'
    );
emailQueue.enqueue(
    'joe@ejemplo.com',
    'support@ejemplo.com',
    'Mi pedido no ha llegado todavía',
    'Estado del pedido'
    );
console.log(emailQueue.dequeue());
