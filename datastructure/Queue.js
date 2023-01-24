//by Array
class QueueA {
    constructor() {
        this.item = [];
    }

    enqueue(element) {
        this.item.push(element);
    }

    dequeue() {
        return this.item.shift();
    }

    isEmpty() {
        return this.item.length === 0;
    }

    peek() {
        if(!this.isEmpty()) {
            return this.item[0];
        }
        return null;
    }

    size() {
        return this.item.length;
    }

    print() {
        console.log(this.item.toString());
    }
}

//const queue = new QueueA();
//console.log(queue.isEmpty());
//queue.enqueue(10);
//queue.enqueue(20);
//queue.enqueue(30);
//queue.print();
//queue.dequeue();
//console.log(queue.peek());
//queue.print();

//by Object
class QueueB {
    constructor() {
        this.item = {};
        this.first = 0;
        this.last = 0;
    }

    enqueue(element) {
        this.item[this.last] = element;
        this.last++;
    }

    dequeue() {
        if(!this.isEmpty()) {
            delete this.item[this.first];
            this.first++;
        }
    }

    isEmpty() {
        return (this.last - this.first) === 0;
    }

    peek() {
        return this.item[this.first];
    }

    size() {
        return (this.last - this.first);
    }

    print() {
        console.log(this.item);
    }
}

const queueB = new QueueB();
console.log(queueB.isEmpty());
queueB.enqueue(10);
queueB.enqueue(20);
queueB.enqueue(30);
console.log(queueB.peek());
queueB.print();
queueB.dequeue();
console.log(queueB.peek());
queueB.print();
queueB.enqueue(40);
queueB.print();