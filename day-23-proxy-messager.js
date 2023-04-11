class Messages {
    // No debes editar este código ❌
    constructor() {
        this.history = [];
    }
    
    sendMessage(text) {
        this.history.push(text);
    }
    
    getHistory() {
        return this.history;
    }
}


class User {
    constructor(name) {
        // Tu código aquí 👈
        this.name = name;
        this.isLogged;
    }
    
    login() {
        // Tu código aquí 👈
        (!this.isLogged) 
        ? this.isLogged = true 
        : this.isLogged = true;
    }
    
    logout() {
        // Tu código aquí 👈
        (this.isLogged) 
        ? this.isLogged = false 
        : this.isLogged = false;
    }
    
    isLoggedIn() {
        // Tu código aquí 👈
        return this.isLogged;
    }
}


class MessagesProxy {
    constructor(messages, user) {
        // Tu código aquí 👈
        this.messages = messages;
        this.user = user;
    }
    
    sendMessage(text) {
        // Tu código aquí 👈
        if (this.user.isLoggedIn()) {
            return this.messages.sendMessage(text);
        } else {
            throw new Error("Usuario no registrado")


        }
        
    }
    
    getHistory() { 
        // Tu código aquí 👈
        if (this.user.isLoggedIn()) {
            return this.messages.getHistory();
        } else {
            throw new Error("Usuario no registrado")
        }
        
    }
}

const user = new User("John")


console.log(user.isLoggedIn());
console.log(user.login());
console.log(user.isLoggedIn());


const messages = new Messages()
const messagesProxy = new MessagesProxy(messages, user)

console.log(user.login());
console.log(user.isLoggedIn());
