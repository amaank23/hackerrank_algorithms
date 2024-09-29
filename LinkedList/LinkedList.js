class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        size;
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }
  printLinkedList() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
    // return this.head;
  }

  insertNodeAtTail(data) {
    if (this.head === null) {
      this.head = new ListNode(data);
    } else {
      let node = this.head;
      while (node) {
        if (node.next === null) {
          node.next = new ListNode(data);
          break;
        }
        node = node.next;
      }
    }
  }

  insertNodeAtHead(data) {
    const newNode = new ListNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  insertNodeAtPosition(data, position) {
    const newNode = new ListNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      if (position === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let count = 0;
        let node = this.head;
        let prev = null;
        while (node) {
          if (count === position) {
            break;
          }
          prev = node;
          node = node.next;
          count++;
        }
        newNode.next = node;
        prev.next = newNode;
      }
    }
  }

  deleteNode(position) {
    if (position === 0) {
      this.head = this.head.next;
    } else {
      let count = 0;
      let node = this.head;
      let prev = null;
      while (node) {
        if (count === position) {
          break;
        }
        prev = node;
        node = node.next;
        count++;
      }
      prev.next = node.next;
    }
  }
  reversePrint(node = this.head) {
    const stack = [];
    let current = node;

    while (current !== null) {
      stack.push(current.data);
      current = current.next;
    }

    while (stack.length > 0) {
      console.log(stack.pop());
    }
  }
  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr !== null) {
      let nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }
    this.head = prev;
  }
}

// list.reverse();
// list.printLinkedList();

function compareLinkedLists(list1, listTwo) {
  let node1 = list1.head;
  let node2 = listTwo.head;
  while (node1 || node2) {
    if (node1 === null || node2 === null) {
      return 0;
    }
    if (node1.data === node2.data) {
      node1 = node1.next;
      node2 = node2.next;
    } else {
      return 0;
    }
  }
  return 1;
}

function mergeLists(list1, list2) {
  let node1 = list1.head;
  let node2 = list2.head;
  let newList = new LinkedList();

  while (node1 !== null) {
    newList.insertNodeAtTail(node1.data);
    node1 = node1.next;
  }

  newList.printLinkedList();
}

function addTwoNumbers(l1, l2) {
  let node1 = l1.head;
  let node2 = l2.head;
  let num1 = [];
  let num2 = [];
  while (node1 !== null) {
    num1.push(node1.data);
    node1 = node1.next;
  }
  while (node2 !== null) {
    num2.push(node2.data);
    node2 = node2.next;
  }
  num1 = +num1.reverse().join("");
  num2 = +num2.reverse().join("");
  let sum = num1 + num2;

  const newList = new LinkedList();
  while (sum) {
    newList.insertNodeAtTail(sum % 10);
    sum = parseInt(sum / 10);
  }
  newList.printLinkedList();
}

let list = new LinkedList();
list.insertNodeAtTail(9);
list.insertNodeAtTail(9);
list.insertNodeAtTail(9);
list.insertNodeAtTail(9);
list.insertNodeAtTail(9);
list.insertNodeAtTail(9);
list.insertNodeAtTail(9);

let list2 = new LinkedList();
list2.insertNodeAtTail(9);
list2.insertNodeAtTail(9);
list2.insertNodeAtTail(9);
list2.insertNodeAtTail(9);

addTwoNumbers(list, list2);
