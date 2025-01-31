// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }

//   let a = new Node(1);
//   let b = new Node(2);
//   let c = new Node(3);
  
//   a.next = b;
//   b.next = c;
  
//   let head = a;
  
//   let d = new Node(4);
//   d.next = head;
//   head = d;
  
//   let current = head;
//   let result = [];
//   while (current != null) {
//     result.push(current.data);
//     current = current.next;
//   }
//   console.log("Linked List after inserting at the beginning:", result.join(" -> "));


// Q:-second

  // class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   let a = new Node(1);
//   let b = new Node(2);
//   let c = new Node(3);
  
//   a.next = b;
//   b.next = c;
  
//   let head = a;
  
//   let d = new Node(4);
//   let current = head;
  
//   while (current.next != null) {
//     current = current.next;
//   }
//   current.next = d;
  
//   current = head;
//   let result = [];
//   while (current != null) {
//     result.push(current.data);
//     current = current.next;
//   }
//   console.log("Linked List after inserting at the end:", result.join(" -> "));


// Q;-3 ----->
// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   let a = new Node(1);
//   let b = new Node(2);
//   let c = new Node(3);
  
//   a.next = b;
//   b.next = c;
  
//   let head = a;
  
//   let d = new Node(4);
//   let position = 2;

//   let current = head;
//   let index = 0;
//   let prev = null;
  
//   while (current != null && index < position) {
//     prev = current;
//     current = current.next;
//     index++;
//   }
  
//   if (prev != null) {
//     prev.next = d;
//   }
//   d.next = current;

//   current = head;
//   let result = [];
//   while (current != null) {
//     result.push(current.data);
//     current = current.next;
//   }
//   console.log(Linked List after inserting at position ${position}:, result.join(" -> "));



// delete node 

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let a = new ListNode(1);
let b = new ListNode(2);
let c= new ListNode(3);
let  d= new ListNode(4);
  a.next=b;
  b.next=c;
  c.next=d
head=a

function deleteNode(head, value) {
  if (!head) return null;

  if (head.data === value) return head.next; 

  let current = head;
  while (current.next && current.next.data !== value) {
    current = current.next;
  }

  if (current.next) {
    current.next = current.next.next; 
  }

  return head;
}



console.log(deleteNode(head, 3)); 





// console.log(4>3>2) 
// console.log(4<5<6) 
// console.log(5>3 <2) 

// function sum(a=10,b=10){
//     return a+b;
// }
// console.log(sum());

const arr=[1,2,3,4];


// const obj=arr.reduce((acc,index)=>{
//     acc[index]=index;
//     return acc
// },{})

console.log(obj)

// const arr=[1,2,3,4];
// const str="1,2,3,4"
// console.log()



// is undefind value thruthy or falsy value





// console.log(4>3>2) 
// console.log(4<5<6) 
// console.log(5>3 <2) 

// function sum(a=10,b=10){
//     return a+b;
// }
// console.log(sum());

// const arr=[1,2,3,4];
//  arr[10]=12
//  console.log(arr)

// const obj=arr.reduce((acc,index)=>{
//     acc[index]=index;
//     return acc
// },{})

// console.log(obj)

// const arr=[1,2,3,4];
// const str="1,2,3,4,5"
// console.log(arr==str)
// console.log(arr[1]==str[1])
// console.log(arr[1]===str[1])
// let a=6;
// let b=++a
// console.log(a=6,b)

// x=0;
// console.log(x);
// var x;

// let a={x:1,y:2}
// let b=a;
// b.x=3
// b.y=6
// b.a=40
// b['b']=10
// console.log(a)
// console.log(b)

// let a="5";           "5"+1
// let b=1;
// console.log((+a)+ b+1)

// var a=10;


let a="20";
let b=29
console.log(a)


// function count(n){
//     let count=0;
//     // for(let i=0; i<=n; i++){
//     //     count=n[i]
//     // }
//     // for(let )
//   while(count<+10){
//       count++
//   }
//   if(count==10){
//       count--
//   }
//   return count 
// }

// console.log(count(10))

// const obj={
//     name:"mukesh",
//     city:"uk"
// }
// const {name}=obj

// console.log(name) 

// is undefind value thruthy or falsy value



// function  sum(a=5,b=10){
//     return a+b
// }

// console.log(sum(false,20))


// console.log(4>2>5)
// console.log(4<6>5)
// console.log(4<6<7)


class node {
  constructor(data){
      this.data=data;
      this.next=null;
      
  }
  
}

const a=new  node(1)
const b=new  node(2)
const c=new  node(3)
const d=new  node(4)
const e=new  node(5)
const f=new  node(6)

a.next=b;
b.next=c;
c.next=d;
d.next=e;
e.next=f

let head=a
let current=head;
while(current.next.next.next!==null){
   current=current.next;
}

//  console.log(current.data)
current.next=null
current=head;
while(current!==null){
   console.log(current.data)
        current=current.next;
}


//  if(head!=null){
//      head=head.next.next.next
//  }
//  while(head!==null){
//      console.log(head.data)
//      head=head.next;
//  }

