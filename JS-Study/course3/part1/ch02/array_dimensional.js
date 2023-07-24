// 다차원(multi-dimensional array)
// 생성(직접 초기화)
let arr1 = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11]
];
// 생성(ES6)
let arr2 = Array.from(Array(2), () => new Array(3).fill(0));
// let arr = Array.from({ length: 3 }, () => 0);
console.log(arr2);
// 생성(반복문)
let arr3 = new Array(5);
for(let i = 0; i < arr3.length; i++){
  arr3[i] = Array.from(
    { length : 3 },
    (undefined, j) => i * 3 + j
  );
}
console.log(arr3);