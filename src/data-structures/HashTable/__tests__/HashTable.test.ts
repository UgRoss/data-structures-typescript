import { HashTable } from '../HashTable';

describe('HashTable', () => {
  describe('Access', () => {
    it('should return value for key if it exists in hash table', () => {
      const valueToPush = { a: 1, b: 3 };
      const key = 'testKey';
      const hashTable = new HashTable();
      hashTable.set(key, valueToPush);

      expect(hashTable.get(key)).toEqual(valueToPush);
    });

    it('should return null if value for selected key is missing', () => {
      const hashTable = new HashTable();

      expect(hashTable.get('unknown')).toBeNull();
    });
  });

  describe('Insertion', () => {
    it('should add item to hashTable', () => {
      const valueToPush = 1;
      const key = 'testKey';
      const hashTable = new HashTable<number>();
      hashTable.set(key, valueToPush);

      expect(hashTable.get(key)).toBe(valueToPush);
    });

    it('should update item if it already exists', () => {
      const key = 'testKey';
      const firstValueToAdd = '⚡️';
      const secondValueToAdd = '🔥';
      const hashTable = new HashTable<string>();

      hashTable.set(key, firstValueToAdd);
      expect(hashTable.get(key)).toEqual(firstValueToAdd);

      hashTable.set(key, secondValueToAdd);
      expect(hashTable.get(key)).toEqual(secondValueToAdd);
    });
  });

  describe('Deletion', () => {
    it('should remove item from hashTable', () => {
      const valueToPush = 1;
      const key = 'testKey2';
      const hashTable = new HashTable<number>();
      hashTable.set(key, valueToPush);

      expect(hashTable.delete(key)).toEqual(valueToPush);
      expect(hashTable.get(key)).toBeNull();
    });

    it('should return null if item does not exist', () => {
      const hashTable = new HashTable<number>();

      expect(hashTable.delete('test')).toBeNull();
    });
  });
});
