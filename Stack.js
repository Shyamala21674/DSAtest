class Stack{
    constructor()
    {
        this.items=[];
    }
    push(element)
    {
        this.items.push(element);
    }

    pop()
    {
       if( this.items.length==0)
        return "underflow"
    this.items.pop();
    }
    peek()
    {
        return this.items[this.items.length-1];
    }
    printStack()
    {
        let str=" ";
        for( let i=0;i<this.items.length;i++)
            str+=this.items[i]+" ";
        return str;
    }
    isEmpty()
    {
        return this.items.length==0;
    }
}

let stack=new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack());
stack.pop();
console.log(stack.printStack());
stack.push(40);
stack.peek();
console.log(stack.peek());
console.log(stack.isEmpty());