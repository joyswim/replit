// 소수점 반올림

// 특정 실수에 대해 toFixed()로 소수점 아래 둘째 자리까지 출력
let x = 123.456789
console.log(x);
console.log(x.toFixed(0));

// toFixed()는 String 반환
let y = x.toFixed(3)
console.log(typeof(y));  // String