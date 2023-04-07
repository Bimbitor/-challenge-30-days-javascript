class User {
    // Tu código aquí 👈
    constructor(name, age) {
        this._name = name
        this._age = age
        this._friends = []
        this._messages = []
    }

    addFriend(friend){
        return this._friends.push(friend)
    }

    sendMessage(message, friend){
        this._messages.push(message)
        friend.messages.push(message)
        console.log(this._messages);
        return this._messages
    }

    showMessages(){
        return this._messages
    }

    get name () {
        return this._name
    }

    get age () {
        return this._age
    }

    get friends () {
        return this._friends
    }

    get messages () {
        return this._messages
    }

    set name (name) {
        return this._name = name
    }

    set age (age) {
        return this._age = age
    }

    set friends (friends) {
        return this._friends = friends
    }

    set messages (messages) {
        return this._messages = messages
    }

    
}


const usuario1 = new User("Juan", 20);
const usuario2 = new User("Maria", 25);
usuario1.addFriend(usuario2);
usuario1.sendMessage("Hola Maria!", usuario2);

console.log(usuario1.showMessages());
