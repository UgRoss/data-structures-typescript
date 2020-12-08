import { LinkedList } from '../LinkedList/LinkedList';

export class Queue<T> {
  private storage = new LinkedList<T>();

  public enqueue(value: T): void {
    this.storage.prepend(value);
  }

  public dequeue(): T | null {
    return this.storage.deleteTail()?.value || null;
  }

  public peek(): T {
    return this.storage.getFirst()?.value || null;
  }

  public size(): number {
    return this.size();
  }

  public isEmpty(): boolean {
    return !!this.storage.getFirst();
  }

  public toString(callback?: (val: T) => string): string {
    return this.storage.toString(callback);
  }
}
