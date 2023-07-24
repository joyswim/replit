let stack = [];

stack.push(5);
stack.push(2);
stack.push(3);
stack.push(7);
stack.pop();
stack.push(1);
stack.push(4);
stack.pop();

console.log(stack); // [5, 2, 3, 1]

let reversed = stack.slice().reverse(); // 배열 뒤집기
console.log(reversed);