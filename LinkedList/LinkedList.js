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
        size
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

let list = new LinkedList();
list.insertNodeAtTail(1);
list.insertNodeAtTail(2);
list.insertNodeAtTail(3);

let list2 = new LinkedList();
list2.insertNodeAtTail(3);
list2.insertNodeAtTail(4);
// list.reverse();
// list.printLinkedList();

function compareLinkedLists(list1, listTwo) {
  let node1 = list1.head;
  let node2 = listTwo.head
  while (node1 || node2) {
    if (node1 === null || node2 === null) {
      return 0
    }
    if (node1.data === node2.data) {
      node1 = node1.next;
      node2 = node2.next;
    } else {
      return 0
    }
  }
  return 1
}

function mergeLists(list1, list2) {
  let node1 = list1.head;
  let node2 = list2.head;
  let newList = new LinkedList()
  // newList.head = new ListNode(1) 
  if (node1.data <= node2.data) {
    newList.head = new ListNode(node1.data)
    newList.head.next = new ListNode(node2.data)
  } else {
    newList.head = new ListNode(node2.data)
    newList.head.next = new ListNode(node1.data)
  }

  let newLList = newList.head.next;
  node1 = node1.next;
  node2 = node2.next;

  while (newLList) {
    if (node1 && node2) {
      if (node1.data <= node2.data) {
        newLList.next = new ListNode(node1.data)
        newLList.next.next = new ListNode(node2.data)
      } else {
        newLList.next = new ListNode(node2.data)
        newLList.next.next = new ListNode(node1.data)
      }
      node1 = node1.next;
      node2 = node2.next;
      newLList = newLList.next
    } else if (node1 && node2 === null) {
      newLList.next.next = new ListNode(node1.data)
      node1 = node1.next;
      newLList = newLList.next
    } else if (node2 && node1 === null) {
      newLList.next = new ListNode(node2.data)
      node2 = node2.next;
      newLList = newLList.next
    } else {
      break
    }
  }

  newList.printLinkedList()


}
mergeLists(list, list2)