import { DoublyLinkedListNode } from './DoublyLinkedListNode';

export class DoublyLinkedList<T> {
  protected head: DoublyLinkedListNode<T> | null = null;
  protected tail: DoublyLinkedListNode<T> | null = null;

  /** Creates a new node and inserts at the start of the list */
  public prepend(value: T): DoublyLinkedList<T> {
    // Create a new node with the next reference to the "head"
    const newNode = new DoublyLinkedListNode(value, this.head);

    // Update our head to have this newly created node
    this.head = newNode;

    // if there is no tail -> update it as well
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /** Creates a new node and inserts at the end of the list */
  public append(value: T): DoublyLinkedList<T> {
    const newNode = new DoublyLinkedListNode(value);

    if (this.head === null || this.tail === null) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Add new item to the end (tail)
    this.tail.next = newNode;
    newNode.previous = this.tail;

    this.tail = newNode;

    return this;
  }

  /** Removes one element from the head (from the start of the list) */
  public deleteHead(): DoublyLinkedListNode<T> | null {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    // If there is next element -> make it head, otherwise clear the list
    if (this.head.next) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  /** Remove one element from the tail (from the end of the list) */
  public deleteTail(): DoublyLinkedListNode<T> | null {
    // Save node that will be deleted
    let deletedNode = this.tail;

    if (this.tail === this.head) {
      // If list contains only one element simply clear it
      this.tail = null;
      this.head = null;
    } else {
      // otherwise second-to-last item becomes last item
      const secondToLastItem = this.tail.previous;
      secondToLastItem.next = null;
      this.tail = secondToLastItem;
    }

    return deletedNode;
  }

  /** Returns first element in the list */
  public getFirst(): DoublyLinkedListNode<T> | null {
    return this.head;
  }

  /** Returns last element in the list */
  public getLast(): DoublyLinkedListNode<T> | null {
    return this.tail;
  }

  /** Finds an element inside the list */
  public find(compare: (item: T) => boolean): DoublyLinkedListNode<T> | null {
    if (!this.head) {
      return null;
    }

    let currentNode: DoublyLinkedListNode<T> | null = this.head;
    while (currentNode) {
      if (compare(currentNode.value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  /** Removes Node from the list by its value */
  public delete(value: T): DoublyLinkedListNode<T> | null {
    if (!this.head) {
      // list is empty, so we have nothing to delete
      return null;
    }

    // Save deleted Node in this variable to return it later
    let deletedNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (Object.is(currentNode.value, value)) {
        deletedNode = currentNode;

        if (deletedNode === this.head) {
          // Node we need to delete is HEAD
          this.head = deletedNode.next;
          // Update previous reference of new head
          if (this.head) {
            this.head.previous = null;
          }
        } else if (deletedNode === this.tail) {
          this.tail = deletedNode.previous;
          this.tail.next = null;
        } else {
          const previousNode = deletedNode.previous;
          const nextNode = deletedNode.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }

      currentNode = currentNode.next;
    }

    return deletedNode;
  }

  /** Converts array of values to linked list */
  public fromArray(values: T[]): DoublyLinkedList<T> {
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
