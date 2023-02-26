class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	getSize() {
		return this.size;
	}

	prepend(value) {
		const node = new Node(value);
		if (!this.isEmpty()) {
			node.next = this.head;
		}
		this.head = node;
		this.size++;
	}

	append(value) { //push
		const node = new Node(value);
		if (this.isEmpty()) {
			this.head = node;
		} else {
			let prev = this.head;
			while (prev.next) {
				prev = prev.next;
			}
			prev.next = node;
		}
		this.size++;
	}

	insert(value, index) {
		if (index < 0 || index > this.size) {
			return;
		}
		if (index === 0) {
			this.prepend(value);
		} else {
			let node = new Node(value);
			let prev = this.head;
			for (let i = 0; i < index - 1; i++) {
				prev = prev.next;
			}
			node.next = prev.next;
			prev.next = node;
			this.size++;
		}
	}

	remove(index) {
		if (index < 0 || index >= this.size) {
			return null;
		}
		let removedNode;
		if (index === 0) {
			removedNode = this.head;
			this.head = this.head.next;
		} else {
			let prev = this.head;
			for (let i = 0; i < index - 1; i++) {
				prev = prev.next;
			}
			removedNode = prev.next;
			prev.next = removedNode.next;
		}
		this.size--;
		return removedNode.value;
	}

	print() {
		if (this.isEmpty()) {
			console.log('List is empty');
		} else {
			let curr = this.head;
			let nodeValue = '';
			while (curr) {
				nodeValue += `${curr.value} `;
				curr = curr.next;
			}
			console.log(nodeValue);
		}
	}
}

const list = new SinglyLinkedList();
console.log(`List is enpty? ${list.isEmpty()}`);
console.log(`List size: ${list.getSize()}`);
list.append(5);
list.append(10);
list.print();
list.insert(100, 1);
list.print();
list.remove(2);
list.print();