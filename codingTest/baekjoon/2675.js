// 문자열 반복
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);

for(let t = 1; t <= testCase; t++){
  let [r, s] = input[t].split(' ');
  let result = '';
  for(let i = 0; i < s.length; i++){
    result += s.charAt(i).repeat(r);
  }
  console.log(result);
}