/* reduce() 메서드: 배열의 각 요소에 대해 reducer 함수를 실행한 뒤 하나의 결과를 반환한다.
reducer의 형태: (accumulator, currentValue) => (반환값)
- 배열의 각 원소를 하나씩 확인하며, 각 원소는 currentValue에 해당한다.
- 반환값은 그 이훙의 원소에 대하여 accumulator에 저장된다.
*/

let data = [5, 2, 9, 8, 4];
console.log(data);

// 최소값(minValue) 구하기 예제
let minValue = data.reduce((a, b) => Math.min(a, b));
console.log(minValue);

// 최대값(maxValue) 구하기 예제
let maxValue = data.reduce((a, b) => Math.max(a, b));
console.log(maxValue);

// 원소의 합계(summary) 구하기 예제
let summary = data.reduce((a, b) => a + b);
console.log(summary);