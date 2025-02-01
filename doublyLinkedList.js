// Insert at the Beginning:


// class node{
//     constructor(data){
//         this.data=data;
//         this.prev=null;
//         this.next=null
//     }
// }

// let a=new node(1);
// let b=new node(2);
// let c=new node(3);
 
// let d=new node(4)
//  a.next=b;
//  b.prev=a;
//  b.next=c;
//  c.prev=b;
//  c.next=null
//  d.next=a
//  a.prev=d

//  let head= d
//  let current=head;
//  while(current!==null){
//     console.log(current.data);
//     current=current.next
    
//  }


// Insert at the End:
// class node{
//     constructor(data){
//         this.data=data;
//         this.prev=null;
//         this.next=null
//     }
// }

// let a=new node(1);
// let b=new node(2);
// let c=new node(3);
 
// let d=new node(4)
//  a.next=b;
//  b.prev=a;
//  b.next=c;
//  c.prev=b;
//  let head= a
//  let current=head;
//  while(current.next!==null){
//     current=current.next
//  }
//  current.next=d
// d.prev=current
// head=a;
// current =head
 

//  while(current!==null){
//     console.log(current.data);
//     current=current.next
    
//  }



// Q:- insert node any position
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);

a.next = b;
b.prev = a;
b.next = c;
c.prev = b;
c.next = null;

let head = a;

function insertAtPosition(head, data, position) {
    let newNode = new Node(data);
    
    if (position === 0) { // Insert at the head
        newNode.next = head;
        if (head) head.prev = newNode;
        head = newNode;
        return head;
    }

    let temp = head;
    let count = 0;

    while (temp !== null && count < position - 1) {
        temp = temp.next;
        count++;
    }

    if (temp === null) {
        console.log("Position out of bounds");
        return head;
    }

    newNode.next = temp.next;
    newNode.prev = temp;
    if (temp.next !== null) {
        temp.next.prev = newNode;
    }
    temp.next = newNode;
    
    return head;
}

head = insertAtPosition(head, 5, 2);

let current = head;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}


