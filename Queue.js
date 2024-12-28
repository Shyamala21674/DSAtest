class Queue {
    constructor(){
        this.items={}
        this.front=0
        this.back=0
    }

    enqueue(element){
        this.items[this.back]=element;
        this.back++
        return element + " inserted";
    }

    dequeue()
    {
        const element=this.items[this.front];
        delete this.items[this.front];
        this.front++
        return element;
    }

    peek(){
        return this.items[this.front];
    }
    get printQ(){
        return this.items;
    }
}

const queue=new Queue();
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.enqueue(5));
console.log(queue.enqueue(6));
console.log(queue.dequeue()+" deleted from front");
let str=queue.printQ;
console.log(str);
console.log(queue.peek());