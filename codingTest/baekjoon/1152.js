// 문자열 내 단어의 개수 세기
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let str = input[0].trim().split(' ');
if(str == '') console.log(0);
else console.log(str.length);