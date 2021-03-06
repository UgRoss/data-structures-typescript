import { DoublyLinkedList } from '../DoublyLinkedList';

describe('DoublyLinkedList', () => {
  describe('Insertion', () => {
    describe('append()', () => {
      it('should create a new Node and add it to the tail (end)', () => {
        const newElement = 5;
        const list = new DoublyLinkedList<number>();

        list.append(1);
        list.append(newElement);

        const lastNode = list.getLast();
        expect(lastNode.value).toEqual(newElement);
        expect(lastNode.previous.value).toEqual(1);
      });

      it('should update head as well if added item is first item', () => {
        const newElement = 5;
        const list = new DoublyLinkedList<number>();

        list.append(newElement);

        const firstNode = list.getFirst();
        expect(firstNode.value).toEqual(newElement);
      });
    });

    describe('prepend()', () => {
      it('should add item to the head (start)', () => {
        const newElement = 0;
        const list = new DoublyLinkedList<number>();

        list.append(1);
        list.prepend(newElement);

        const firstNode = list.getFirst();
        expect(firstNode.value).toEqual(newElement);
        expect(firstNode.next.value).toEqual(1);
      });

      it('should update tail as well if added item is first item', () => {
        const newElement = 0;
        const list = new DoublyLinkedList<number>();

        list.prepend(newElement);

        const lastNode = list.getLast();
        expect(lastNode.value).toEqual(newElement);
      });
    });
  });

  describe('Access', () => {
    it('should return first Node in the list', () => {
      const arr = ['a', 'b', 'c'];
      const firstArrItem = arr[0];
      const list = new DoublyLinkedList<string>();

      list.fromArray(arr);
      const firstNode = list.getFirst();

      expect(firstNode.value).toEqual(firstArrItem);
    });

    it('should return last Node in the list', () => {
      const arr = ['a', 'b', 'c'];
      const lastArrItem = arr[arr.length - 1];
      const list = new DoublyLinkedList<string>();

      list.fromArray(arr);
      const lastNode = list.getLast();

      expect(lastNode.value).toEqual(lastArrItem);
    });
  });

  describe('Search', () => {
    it('should return null if list is empty', () => {
      const list = new DoublyLinkedList<string>();
      const result = list.find((itemVal) => itemVal === 'abc');

      expect(result).toEqual(null);
    });

    it('should return null if no elements found', () => {
      const data = ['5', '4', '8', '9'];
      const list = new DoublyLinkedList<string>();

      list.fromArray(data);
      const result = list.find((itemVal) => itemVal === '100');
      expect(result).toBeNull();
    });

    it('should return Node if element exists', () => {
      const data = ['5', '4', '8', '9'];
      const valueToFind = data[1];
      const list = new DoublyLinkedList<string>();

      list.fromArray(data);
      const result = list.find((itemVal) => itemVal === valueToFind);

      expect(result.value).toEqual(valueToFind);
    });
  });

  describe('Deletion', () => {
    describe('deleteHead()', () => {
      it('should return null if list is empty', () => {
        const list = new DoublyLinkedList<number>();
        const deletedItem = list.deleteHead();

        expect(deletedItem).toBeNull();
      });

      it('should delete first Node in the list and return it', () => {
        const arr = [1, 2, 3];
        const list = new DoublyLinkedList<number>();
        list.fromArray(arr);

        const deletedItem = list.deleteHead();
        expect(deletedItem.value).toEqual(arr[0]);
      });

      it('should update head and remove previous reference', () => {
        const arr = [1, 2, 3];
        const list = new DoublyLinkedList<number>();
        list.fromArray(arr);

        list.deleteHead();
        const firstNode = list.getFirst();

        expect(firstNode).toMatchObject({ previous: null, value: arr[1] });
      });

      it('should delete first Node and make list empty if there was only one item in the list', () => {
        const listItem = 1;
        const list = new DoublyLinkedList<number>();

        list.append(listItem);
        list.deleteHead();

        expect(list.getFirst()).toEqual(null);
        expect(list.getLast()).toEqual(null);
      });
    });

    describe('deleteTail()', () => {
      it('should return null if list is empty', () => {
        const list = new DoublyLinkedList<number>();
        const deletedItem = list.deleteTail();

        expect(deletedItem).toBeNull();
      });

      it('should remove one Node from the tail and return it', () => {
        const data = [1, 2, 3, 4];
        const penultimateItem = data[data.length - 2];
        const lastItem = data[data.length - 1];
        const list = new DoublyLinkedList<number>();

        list.fromArray(data);
        const deletedItem = list.deleteTail();

        expect(deletedItem.value).toEqual(lastItem);
        expect(list.getLast().value).toEqual(penultimateItem);
      });

      it('should update next reference of new tail', () => {
        const data = [1, 2, 3, 4];
        const list = new DoublyLinkedList<number>();

        list.fromArray(data);
        list.deleteTail();
        const lastNode = list.getLast();

        expect(lastNode.next).toBeNull();
      });

      it('should remove last Node and make list empty if there was only one item', () => {
        const item = 1;
        const list = new DoublyLinkedList<number>();

        list.append(item);
        list.deleteTail();

        expect(list.getFirst()).toEqual(null);
        expect(list.getLast()).toEqual(null);
      });
    });

    describe('delete()', () => {
      it('should return null if list is empty', () => {
        const list = new DoublyLinkedList();
        const deletionResult = list.delete(1);

        expect(deletionResult).toBeNull();
      });

      it('should return null if it cannot find an element', () => {
        const list = new DoublyLinkedList<number>();
        list.append(0);
        const deletionResult = list.delete(1);

        expect(deletionResult).toBeNull();
      });

      it('should return deleted Node if it was found', () => {
        const list = new DoublyLinkedList<number>();
        list.append(0);
        list.append(1);

        const deletionResult = list.delete(1);
        expect(deletionResult.value).toBe(1);
      });

      it('should delete Node from the middle', () => {
        const arr = [1, 2, 3];
        const itemToRemove = 2;
        const list = new DoublyLinkedList<number>();
        list.fromArray(arr);

        list.delete(itemToRemove);
        const arrFromList = list.toArray();
        expect(arrFromList).not.toContain(itemToRemove);
      });

      it('should update references of items after Node removal in the middle', () => {
        const arr = [1, 2, 3];
        const firstArrItem = arr[0];
        const lastArrItem = arr[arr.length - 1];
        const itemToRemove = 2;
        const list = new DoublyLinkedList<number>();
        list.fromArray(arr);

        list.delete(itemToRemove);
        const firstItem = list.getFirst();
        const lastItem = list.getLast();

        expect(lastItem).toMatchObject({
          value: lastArrItem,
          next: null,
          previous: { value: firstArrItem },
        });

        expect(firstItem).toMatchObject({
          value: firstArrItem,
          next: { value: lastArrItem },
          previous: null,
        });
      });

      it('should update tail after last Node removal', () => {
        const arr = [1, 2, 3];
        const firstArrItem = arr[0];
        const secondArrItem = arr[1];
        const lastArrItem = arr[2];

        const list = new DoublyLinkedList<number>();
        list.fromArray(arr);

        list.delete(lastArrItem);

        const lastListNode = list.getLast();
        expect(lastListNode).toMatchObject({
          value: secondArrItem,
          next: null,
          previous: { value: firstArrItem },
        });
      });

      it('should update head after first Node removal', () => {
        const arr = [1, 2, 3];
        const firstArrItem = arr[0];
        const secondArrItem = arr[1];
        const lastArrItem = arr[2];
        const list = new DoublyLinkedList<number>();
        list.fromArray(arr);

        list.delete(firstArrItem);

        const firstListNode = list.getFirst();
        expect(firstListNode).toMatchObject({
          value: secondArrItem,
          previous: null,
          next: { value: lastArrItem },
        });
      });
    });
  });

  it('should convert list to array', () => {
    const data = [1, 2, 3, 4];
    const list = new DoublyLinkedList<number>();

    list.fromArray(data);

    expect(list.toArray()).toEqual(data);
  });

  it('should create linked list from array', () => {
    const data = ['1', '2', '3'];
    const list = new DoublyLinkedList<string>();

    list.fromArray(data);

    expect(list.toArray()).toEqual(data);
  });

  describe('toString()', () => {
    const data = ['1', '2', '3'];
    let linkedList: DoublyLinkedList<string>;

    beforeEach(() => {
      linkedList = new DoublyLinkedList<string>();
      linkedList.fromArray(data);
    });

    it('should convert nodes to string using default method', () => {
      expect(linkedList.toString()).toEqual(data.toString());
    });

    it('should convert nodes to string using callback', () => {
      const callback = (val) => val + 'a';
      const expectedResult = data.map(callback).toString();

      expect(linkedList.toString(callback)).toEqual(expectedResult);
    });
  });
});
