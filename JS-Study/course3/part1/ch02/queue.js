class Queue {
  constructor() {
    this.item = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(item){
    this.item[this.tail] = item;
    this.tail++;
  }
  dequeue(){
    // 반환할 삭제 노드 복사
    const item = this.item[this.head];
    delete this.item[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.item[this.head];
  }
  getLength() {
    return this.tail - this.head;
  }
}

queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
while (queue.getLength() != 0) {
  console.log(queue.dequeue());
}