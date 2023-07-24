// 그룹 단어 체커
function check(data){
  let setData = new Set(data[0]);
  for(let i = 0; i < data.length - 1; i++){
    if(data[i] !== data[i+1]) {
      if(setData.has(data[i+1])) {
        return false;
      }
      else {
        setData.add(data[i+1]);
      }
    }
  }
  return true;
}
// fs 모듈
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let count = 0;

for(let t = 1; t <= n; t++){
  let data = input[t];
  if(check(data)) count++;
}
console.log(count);