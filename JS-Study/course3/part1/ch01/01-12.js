// 집합 객체
let mySet = new Set(); // 집합 객체 생성

// 여러 개의 원소 삽입
mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(3);  // 중복 원소 미포함

// 원소 하나씩 출력
for(let item of mySet) console.log(item);
console.log(`원소의 개수: ${mySet.size}`);
console.log(`원소 7을 포함하고 있는가? ${mySet.has(7)}`);

// 원소 5 제거
mySet.delete(5);
for(let item of mySet) console.log(item);