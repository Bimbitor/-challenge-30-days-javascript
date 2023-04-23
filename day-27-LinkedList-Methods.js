class Node {
    // Este código no debe ser modificado ❌
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    
    delete(value) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
                this.length--;
                return;
            }
            currentNode = currentNode.next;
        }
    }
}

class LinkedListRecharged extends LinkedList {
    get(index) {
        // Tu código aquí 👈
        if (index < 0 || index >= this.length) {
            return null;
        }
        let node = this.getNodeByIndex(index + 1);
        return node.value;
    }
    
    insertAt(index, value) {
        // Tu código aquí 👈
        if (index < 0 || index >= this.length) {
            return null;
        }
        
        const newNode = new Node(value);
        const firstPointer = this.getNodeByIndex(index);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
        
        this.length++;
        
        return this;
        
    }
    
    getNodeByIndex(index) {
        let counter = 1;
        let currentNode = this.head;
        
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        
        return currentNode;
    }
    
    toArray() {
        let values = [];
        let pointer = this.head;
        for (let i = 0; i < this.length; i++) {
            values.push(pointer.value);
            pointer = pointer.next;
        }
        return values;
    }
    
    removeAt(index) {
        // Tu código aquí 👈
        if (index < 0 || index >= this.length) {
            return null;
        }
        
        let value = this.get(index)
        this.delete(value);
        return this
    }
}

const linkedList = new LinkedListRecharged();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
console.log(linkedList.removeAt(1));
console.log(linkedList.toArray());



