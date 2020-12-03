export class LinkedListNode<T> {
  /**
   * @param value of the Node
   * @param next - reference to the next Node
   */
  constructor(public value: T, public next: LinkedListNode<T> | null = null) {}

  toString(callback?: (val: T) => string) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
