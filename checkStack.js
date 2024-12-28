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
    checkStack()
    {
        let str=" ";
        for( let i=0;i<this.items.length;i++)
            for(let j=1;j<this.items.length;j++)
            if(this.items[i]==this.items[j])
            {
            str+=this.items[i]+"match found ";
            }
        return str;
    }
}

let stack=new Stack();
stack.push("(");
stack.push("{");
stack.push("}");
stack.push(")");
console.log(stack.printStack());
//stack.pop();
console.log(stack.printStack());
stack.push("[");
stack.peek();
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.checkStack());