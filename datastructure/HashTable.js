class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for(let i = 0; i < key.length; i++) {
            key += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        this.table[this.hash(key)] = value;
    }

    get(key) {
        return this.table[this.hash(key)];
    }

    remove(key) {
        this.table[this.hash(key)] = undefined;
    }

    print() {
        for(let i = 0; i < this.table.length; i++) {
            console.log(this.table[i]);
        }
    }
}

const hash = new HashTable();
hash.set(1, 100);
hash.set(2, 200);
hash.set(3, 300);
hash.print();