// 초기화
let arr1 = [1, 2, 3];
let arr2 = new Array(2).fill(0);  // [0, 0, 0]
let arr3 = ['hello', 123, true];
let arr4 = Array.from( {length: 3}, () => 0);  // [0, 0, 0]

// 배열 끝에 추가
arr1.push(4);
// 배열 크기 변화
arr1.length = 5;

// 배열 출력
for(let x of arr1){
  console.log(x);
}
for(let i = 0; i < arr2.length; i++){
  console.log(arr2[i]);
}
console.log(arr3);
console.log(arr4);