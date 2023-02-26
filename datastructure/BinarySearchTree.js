class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	};

	isEmpty() {
		return this.root === null;
	};

	insert(value) {
		const node = new Node(value);
		if (this.isEmpty()) {
			this.root = node;
		} else {
			this.insertNode(this.root, node);
		}
	};

	insertNode(root, node) {
		if (node.value < root.value) {
			if (root.left === null) {
				root.left = node;
			} else {
				this.insertNode(root.left, node);	// Recursion
			}
		} else {
			if (root.right === null) {
				root.right = node;
			} else {
				this.insertNode(root.right, node);	// Recursion
			}
		}
	};

	search(root, value) {
		if (!root) {
			return false;
		} else {
			if (root.value === value) {
				return true;
			} else if (value < root.value) {
				return this.search(root.left, value);	// Recursion
			} else {
				return this.search(root.right, value);	// Recursion
			}
		}
	};

	preOrder(root) {
		if (root) {
			console.log(root.value);
			this.preOrder(root.left);	// Recursion
			this.preOrder(root.right);	// Recursion
		}
	}

	inOrder(root) {
		if (root) {
			this.inOrder(root.left);	// Recursion
			console.log(root.value);
			this.inOrder(root.right);	// Recursion
		}
	}

	postOrder(root) {
		if (root) {
			this.postOrder(root.left);	// Recursion
			this.postOrder(root.right);
			console.log(root.value);	// Recursion
		}
	}

	levelOrder() {
		// use the optimized queue implementation
		const queue = [];
		queue.push(this.root);
		while (queue.length) {
			let curr = queue.shift();
			console.log(curr.value);
			if (curr.left) {
				queue.push(curr.left);
			}
			if (curr.right) {
				queue.push(curr.right);
			}
		}
	}

	min(root) {
		if (!root.left) {
			return root.value;
		} else {
			return this.min(root.left);
		}
	}

	max(root) {
		if (!root.right) {
			return root.value;
		} else {
			return this.max(root.right);	// Recursion
		}
	}

	delete(value) {
		this.root = this.deleteNode(this.root, value);
	}

	deleteNode(root, value) {
		if (root === null) {
			return root;
		}
		if (value < root.value) {
			root.left = this.deleteNode(root.left, value)	// Recursion
		} else if (value > root.value) {
			root.right = this.deleteNode(root.right, value);	// Recursion
		} else {
			if (!root.left && root.right) {
				return null;
			}
			if (!root.left) {
				return root.right;
			} else if (!root.right) {
				return root.left;
			}
			root.value = this.min(root.right);
			root.right = this.deleteNode(root.right, root.value);	// Recursion
		}
		return root;
	}
}

const bst = new BinarySearchTree();
export default bst;
// console.log(bst.isEmpty());
// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.levelOrder();
// bst.delete(3);
// bst.levelOrder();
