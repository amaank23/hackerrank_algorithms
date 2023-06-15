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
    if (node.next === null) {
      return node.data;
    } else {
      console.log(this.reversePrint(node.next));
      console.log(node.data);
    }
  }
}

let list = new LinkedList();
list.insertNodeAtTail(141);
list.insertNodeAtTail(302);
list.insertNodeAtTail(3302);
// list.insertNodeAtTail(164);
// list.insertNodeAtTail(530);
// list.insertNodeAtTail(474);
// list.insertNodeAtHead(1456);
// list.insertNodeAtHead(987);
// list.insertNodeAtPosition(7853, 3);
list.reversePrint();
