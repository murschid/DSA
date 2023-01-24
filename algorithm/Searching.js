class Searching {
    linearSearch(arr, val) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === val) {
                return i;
            }
        }
        return -1;
    }

    binarySearch(arr, val) {
        let startIndex = 0;
        let endIndex = arr.length - 1;
        while(startIndex <= endIndex) {
            let middleIndex = Math.floor((startIndex + endIndex) / 2);
            if (val === arr[middleIndex]) {
                return middleIndex;
            }
            if (val > arr[middleIndex]) {
                startIndex = middleIndex + 1;
            } else {
                endIndex = middleIndex - 1;
            }
        }
        return -1;
    }
}
const search = new Searching();
console.log(search.binarySearch([1,2,5,6,7,8], 6));