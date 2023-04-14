/* class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        
        return item;
    }
    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    
    unShiftIndex() {
        for (let i = this.length - 1; i >= 0; i--) {
            this.data[i + 1] = this.data[i];
        }
        this.length++;
    }
    
    unshift(item){
        if (item) {
            if(this.length == 0){
                this.push(item)
            } else {
                this.unShiftIndex();
                this.data[0] = item;
            }
        }
        return this.length
    }
    
    shift(){
        if(this.length == 0){
            return undefined
        } else {
            return this.delete(0);
        }
    }
} */



class MyArray {
    constructor() {
        // Tu código aquí 👈
        this.length = 0;
        this.data = {};
    }
    
    map(func) {
        // Tu código aquí 👈
        let reply = new MyArray();
        for (let prop in this.data) {
            console.log(reply.data);
            reply.data[prop] = func(this.data[prop]);
            reply.length++;
        }
        return reply;
    }
    
    filter(func) {
        // Tu código aquí 👈
        let reply = new MyArray();
        for (let prop in this.data) {
            if (func(this.data[prop])) {
                reply.push(this.data[prop])
            }
        }
        return reply;
    }
    
    push(item) {
        // Tu código aquí 👈
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    
    pop() {
        // Tu código aquí 👈
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    
    join(character = ",") {
        // Tu código aquí 👈
        let reply = ""
        for (let i = 0; i < this.length; i++) {
            reply += this.data[i]
            if (i < this.length - 1) {
                reply += character
            }
        }
        return reply;
    }
    
    shift() {
        // Tu código aquí 👈
        let newData = new MyArray();
        let deletedItem = this.data[0]

        for (let i = 0; i < this.length; i++) {
            if (i > 0) {
                newData.push(this.data[i])
            }
        }
        this.length --
        this.data = {...newData.data}
        console.log(this.data);
        return deletedItem;
    }
    
    unshift(item) {
        // Tu código aquí 👈
        if (item) {
            let newData = new MyArray();
    
            newData.push(item)
    
            for (let i = 0; i < this.length; i++) {
                newData.push(this.data[i])
            }
    
            this.data = {...newData.data}
            this.length = newData.length
            return this.length
        } else {
            return this.length
        }
    }
}

const myArray = new MyArray()

myArray.push(4);
myArray.push(7);

console.log(myArray.unshift())
console.log(myArray.unshift(11))



