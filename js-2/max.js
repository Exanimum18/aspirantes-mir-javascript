// escribe tu solución acá
function max(arr) {
    let maxNum = arr[0];
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > maxNum) {
          maxNum = arr[i];
      }
    }
    return maxNum;
}


console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined