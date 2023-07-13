let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

data = input[0].split(' ');
let hour = Number(data[0]);
let minute = Number(data[1]);

alrMinute = minute - 45;

if(alrMinute < 0){
  if(hour-1 >= 0) {
    hour = hour - 1;
    alrMinute += 60;
  } else {
    hour = 23;
    alrMinute += 60;
  }
}

console.log(hour + " " + alrMinute);