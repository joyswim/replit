// 배열 메소드
// concat()
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr = arr1.concat(arr2, [7, 8], [9, 10]);
console.log(arr);

// slice()
let result = arr.slice(3, 6);
console.log(result);

// indexOf(item)
let arr3 = [6, 3, 9, 4, 5, 6, 7];
console.log(arr3.indexOf(5));
console.log(arr3.indexOf(6));
console.log(arr3.indexOf(8));