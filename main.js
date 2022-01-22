  
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

/* Function to reverse the linked list */
function reverse(node) {
var prev = null;
var current = node;
var next = null;
    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    node = prev;
    return node;
}

// prints content of double linked list
function printList(node) {
    while (node != null) {
        console.log(node.data + " ");
        node = node.next;
    }
}

    
head = new Node(2);
head.next = new Node(9);
head.next.next = new Node(7);
head.next.next.next = new Node(8);

console.log("input ")
printList(head);
head = reverse(head);
console.log("reverse order ")
printList(head);



