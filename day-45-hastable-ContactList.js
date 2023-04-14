class ContactList {
    constructor(size) {
        // Tu código aquí 👈
        this.buckets = new Array(size);
        this.numBuckets = this.buckets.length
    }
    
    hash(name) {
        let total = 0;
        for (let i = 0; i < name.length; i++) {
            total += name.charCodeAt(i);
        }
        console.log(total % this.numBuckets);
        return total % this.numBuckets;
    }
    
    insert(name, phone) {
        // Tu código aquí 👈
        let index = this.hash(name)
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        this.buckets[index].push([name, phone])
    }
    
    get(name) {
        // Tu código aquí 👈
        let index = this.hash(name);
        
        if (!this.buckets[index]) {
            return null;
        }
        
        for (let i = 0; i < this.buckets[index].length; i++) {
            if (this.buckets[index][i][0] === name) {
                return this.buckets[index][i][1]
            }
        }
        return null;
    }
    
    retrieveAll() {
        // Tu código aquí 👈
        let allValues = []
        for (let i = 0; i < this.numBuckets; i++) {
            if (this.buckets[i]) {
                for (let j = 0; j < this.buckets[i].length; j++) {
                    allValues.push(this.buckets[i][j])
                }
            }
        }
        
        return allValues
    }
    
    delete(name) {
        // Tu código aquí 👈
        let index = this.hash(name);

        if (!this.buckets[index]) {
            return null;
        }

        for (let i = 0; i < this.buckets[index].length; i++) {
            if (this.buckets[index][i][0] === name) {
                return this.buckets[index] = []
            }
        }

        return null;
    }
    
}


const contactList = new ContactList(10)

console.log(contactList.insert("Mr michi", "123-456-7890"));

contactList.delete("Mr michi")

console.log(contactList.get("Mr michi"));




/* class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value) {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    delete(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        const noMatchedValues = []
        let reply
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] != key) {
                    noMatchedValues.push(currentBucket[i])
                } else {
                    reply = currentBucket[i][0]
                }
            }
            this.data[address] = noMatchedValues
            return reply
        }
        return undefined;
    }
    
    getAllKeys(){
        let reply = []
        // Tu código aquí 👈
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let y = 0; y < this.data[i].length; y++) {
                    console.log(this.data[i][y]);
                    reply.push(this.data[i][y][0])
                }
            }
            
        }
        
        return reply
    }
    
}

const myHashTable = new HashTable(50);

myHashTable.set("Diego", 1990)
myHashTable.set("Mariana", 1998)
myHashTable.set("Miranda", 2000)
myHashTable.set("Cat", 2010)

console.log(myHashTable.getAllKeys()); */


