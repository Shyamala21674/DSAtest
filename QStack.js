class QStack {
    constructor(){
        this.items=[];
    }

    Qpush(element){
        this.items.push(element);
        return element + " inserted";
    }

    Qpop()
    {
        if( this.items.length==0)
            return "underflow"
        this.items.pop();
    }

    Qpeek(){
        return this.items[this.front];
    }
    printStack()
    {
        let str=" ";
        for( let i=0;i<this.items.length;i++)
            str+=this.items[i]+" ";
        return str;
    }

    
}

const qstack=new QStack();
console.log(qstack.Qpush(2));
console.log(qstack.Qpush(3));
console.log(qstack.Qpush(4));
console.log(qstack.Qpush(5));
console.log(qstack.Qpush(6));
console.log(qstack.Qpush(7));
console.log(qstack.Qpeek());
console.log(qstack.Qpop());
qstack.printStack()