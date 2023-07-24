// 반 평균 넘는 사람 비율 구하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]); // 테스트케이스
for(let i = 1; i <= testCase; i++){
  let data = input[i].split(' ').map(Number);
  let n = data[0]; // 데이터 개수
  let sum = 0;     // n개 점수 평균
  for(let j = 1; j <= n; j++){
    sum += data[j];
  }
  let average = sum / n; // 반 평균
  let count = 0;  // 반 평균 넘는 학생 수
  for(let x = 1; x <= n; x++)
    if(data[x] > average) count++;
  // 반 평균 넘는 학생의 비율 출력
  console.log(`${(count / n * 100).toFixed(3)}%`);
}