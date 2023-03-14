function maxIndex(arr) {

    if (arr.length === 0) {
        return -1;
    }

    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) { // si el index del array es mayor al maxIndex, maxIndex = i
            maxIndex = i;
        }
    }
    return maxIndex;
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1

