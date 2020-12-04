import { LinkedList } from '../LinkedList/LinkedList';

export class Stack<T> {
  private storage = new LinkedList<T>();

  public push(value: T): void {
    this.storage.append(value);
  }

  public pop(): T | null {
    return this.storage.deleteTail()?.value || null;
  }

  public isEmpty(): boolean {
    return !this.storage.getLast();
  }

  public peek(): T | null {
    return this.storage.getLast()?.value || null;
  }

  public toArray(): T[] {
    return this.storage.toArray();
  }

  public toString(callback?: (val: T) => string): string {
    return this.storage.toString(callback);
  }
}
