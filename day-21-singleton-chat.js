class User {
    // Este código no debe ser editado ❌
    constructor(name) {
        this.name = name;
        this.messages = [];
    }
    
    receiveMessage(message) {
        this.messages.push(message);
    }
}

class Chat {
    // Tu código aquí 👈
    constructor() {
        if (!Chat.instance) {
            this.users = [];
            Chat.instance = Object.freeze(this);
        }
        return Chat.instance
    }
    
    sendMessage(message){
        this.users.forEach(user => user.receiveMessage(message))
    }or
    
    addUser(user){
        if (user instanceof User) {
            this.users.push(user)
            return true
        }
    }
    
    removeUser(name){
        let deleted = this.users.findIndex(x => x.name === name)
        this.users.splice(deleted, 1)
        
    }
}


const chat1 = new Chat();
const chat2 = new Chat();

console.log(chat1 === chat2)


const chat = new Chat();
const user1 = new User("Pepito");
const user2 = new User("Juanito");
chat.addUser(user1);
chat.addUser(user2);

chat.sendMessage("Nunca pares de aprender!");

console.log(user1.messages)
console.log(user2.messages)
