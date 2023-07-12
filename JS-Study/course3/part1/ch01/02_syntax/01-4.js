// readline 모듈보다 fs 모듈을 이용해 파일 전체를 읽어 들여 처리하는 빠르게 동작하는 경우가 많다.
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().split('\n');

console.log(input);