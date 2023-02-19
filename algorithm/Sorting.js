class Sorting {
	bubbleSort(arr) {
		let isSwapped = false;
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length - i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					let temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
					isSwapped = true;
				}
			}
			if (!isSwapped) break;
		}
		return arr;
	}

	insertionSort(arr) {
		// TODO
		return arr;
	}

	quickSort(arr) {
		if (arr.length < 2) return arr;
		let pivot = arr[arr.length - 1];
		let left = [];
		let right = [];
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] < pivot) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}
		return [...quickSort(left), pivot, ...quickSort(right)];
	}

	mergeSort(arr) {
		// TODO
		return arr;
	}
}

const sort = new Sorting();
export default sort;

// let input = [1, 4, 6, 3, 2];
// console.log(sort.bubbleSort(input));
// console.log(sort.quickSort(input));