export class DoublyLinkedListNode<T> {
  /**
   * @param value of the Node
   * @param next - reference to the next Node
   * @param previous - reference to the previous Node
   */
  constructor(
    public value: T,
    public next: DoublyLinkedListNode<T> | null = null,
    public previous: DoublyLinkedListNode<T> | null = null
  ) {}

  toString(callback?: (val: T) => string) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
