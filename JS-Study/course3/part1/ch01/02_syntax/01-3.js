let answer = '';

/* 여러 출력 결과를 console.log()로 여러 번 실행하지 않고, 하나의 문자열(answer)에 결과를 저장해서 한꺼번에 출력하는 것이 더 빠르다. */
for(let i = 1; i <= 100; i++){
  answer += i + '\n'; // 문자열로 변환하여 기록
}

console.log(answer);