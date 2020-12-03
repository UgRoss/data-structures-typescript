import { LinkedListNode } from './LinkedListNode';

export class LinkedList<T> {
  protected head: LinkedListNode<T> | null = null;
  protected tail: LinkedListNode<T> | null = null;

  /** Creates a new node and inserts at the start of the list */
  public prepend(value: T): LinkedList<T> {
    // Create a new node with the next reference to the "head"
    const newNode = new LinkedListNode(value, this.head);

    // Update our head to have this newly created node
    this.head = newNode;

    // if there is no tail -> update it as well
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /** Creates a new node and inserts at the end of the list */
  public append(value: T): LinkedList<T> {
    const newNode = new LinkedListNode(value);

    if (this.head === null || this.tail === null) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // add new item to the end
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  /** Removes one element from the head (from the start of the list) */
  public deleteHead(): LinkedListNode<T> | null {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    // If there is next element -> make it head, otherwise clear the list
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  /** Remove one element from the tail (from the end of the list) */
  public deleteTail(): LinkedListNode<T> | null {
    // Save node that will be deleted
    let deletedNode = this.tail;

    // If the list contains one element simply clear it
    if (this.tail === this.head) {
      this.tail = null;
      this.head = null;

      return deletedNode;
    }

    // Here we need to find the second-to-last item to use it for tail
    // Note: it's easier to do in Doubly Linked List since Nodes there have reference to previous items.
    let currentNode: LinkedListNode<T> | null = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedNode;
  }

  /** Returns first element in the list */
  public getFirst(): LinkedListNode<T> | null {
    return this.head;
  }

  /** Returns last element in the list */
  public getLast(): LinkedListNode<T> | null {
    return this.tail;
  }

  /** Finds an element inside the list */
  public find(compare: (item: T) => boolean): LinkedListNode<T> | null {
    if (!this.head) {
      return null;
    }

    let currentNode: LinkedListNode<T> | null = this.head;
    while (currentNode) {
      if (compare(currentNode.value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  /** Removes Node from the list by its value */
  public delete(value: T): LinkedListNode<T> | null {
    if (!this.head) {
      return null;
    }

    // Save deleted Node in this variable to return it later
    let deletedNode = null;

    if (Object.is(this.head.value, value)) {
      deletedNode = this.head;
      // Now make next node to be a new head
      this.head = this.head.next;

      return deletedNode;
    }

    let currentNode = this.head;
    if (currentNode) {
      while (currentNode.next !== null) {
        if (Object.is(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // Check if tail must be deleted
    if (Object.is(this.tail?.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  /** Converts array of values to linked list */
  public fromArray(values: T[]): LinkedList<T> {
    values.forEach((value) => this.append(value));

    return this;
  }

  /** Converts linked list to array */
  public toArray(): T[] {
    const values = [];

    let currentNode = this.head;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return values;
  }

  /** Converts linked link to string representation */
  public toString(callback?: (val: T) => string): string {
    const nodesString = [];

    let currentNode = this.head;
    while (currentNode) {
      nodesString.push(currentNode.toString(callback));
      currentNode = currentNode.next;
    }

    return nodesString.toString();
  }
}
