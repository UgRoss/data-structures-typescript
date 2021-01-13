import { LinkedList } from '../LinkedList/LinkedList';

export class HashTable<T> {
  // Allowed buckets number. The bigger the bucket number the fewer collisions we will get.
  private static readonly defaultBucketsNumber = 30;
  // hash table that will store buckets with linked list.
  private readonly buckets: LinkedList<{ key: string; value: T }>[];

  constructor(bucketsNumber = HashTable.defaultBucketsNumber) {
    // Create hash table of certain size and fill each bucket with empty linked list.
    this.buckets = Array(bucketsNumber)
      .fill(null)
      .map(() => new LinkedList());
  }

  /** Add or Update the value by its key */
  public set(key: string, value: T) {
    const bucketLinkedList = this.getBucketLinkedList(key);
    const node = bucketLinkedList.find((item) => Object.is(item.key, key));

    if (!node) {
      bucketLinkedList.append({ key, value }); // Add new node
    } else {
      node.value.value = value; // Update value of already existing node
    }
  }

  /** Get the value by its key */
  public get(key: string): T | null {
    const bucketLinkedList = this.getBucketLinkedList(key);
    const node = bucketLinkedList.find((item) => Object.is(item.key, key));

    return node?.value.value || null;
  }

  /** Delete the value by its key */
  public delete(key: string): T | null {
    const bucketLinkedList = this.getBucketLinkedList(key);
    const node = bucketLinkedList.find((item) => Object.is(item.key, key));
    const deletedNode = bucketLinkedList.delete(node?.value);

    return deletedNode?.value.value || null;
  }

  /** Returns bucket linked list based on key */
  private getBucketLinkedList(key: string): LinkedList<{ key: string; value: T }> {
    const keyHash = this.hash(key);
    return this.buckets[keyHash];
  }

  /** Converts key string to hash number */
  private hash(key: string): number {
    // Simple hash function that calculates sum of all characters codes inside the key
    // You may want to use better hashing function to reduce the number of collisions
    const hashCode = Array.from(key).reduce(
      (hashAcc, keySymbol) => hashAcc + keySymbol.charCodeAt(0),
      0
    );

    // Reduce hash code number to fit inside available buckets number
    // Example: 37 % 30 = 3; 79 % 30 = 19
    return hashCode % this.buckets.length;
  }
}
