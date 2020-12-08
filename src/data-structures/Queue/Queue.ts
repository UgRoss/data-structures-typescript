import { LinkedList } from '../LinkedList/LinkedList';

export class Queue<T> {
  private storage = new LinkedList<T>();

  /**
   * Add a new element to the end of the queue.
   * This element will be processed after all elements that are already in the queue.
   */
  public enqueue(value: T): void {
    this.storage.append(value);
  }

  /** Remove the element that is at the front of queue. */
  public dequeue(): T | null {
    return this.storage.deleteHead()?.value || null;
  }

  /** Read the element at the front of the queue without removing it */
  public peek(): T {
    return this.storage.getFirst()?.value || null;
  }

  public isEmpty(): boolean {
    return !this.storage.getFirst();
  }

  public size(): number {
    return this.storage.toArray().length;
  }

  public toString(callback?: (val: T) => string): string {
    return this.storage.toString(callback);
  }
}
