class Stack {
	constructor() {
		this.item = [];
	}

	push(element) {
		this.item.push(element);
	}

	pop() {
		return this.item.pop();
	}

	peek() {
		if (!stack.isEmpty()) {
			return this.item[this.item.length - 1];
		}
		return null;
	}

	isEmpty() {
		return this.item.length === 0;
	}

	size() {
		return this.item.length;
	}

	print() {
		console.log(this.item.toString());
	}
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);
stack.pop();
console.log(stack.peek());

stack.print();
console.log(stack.size());