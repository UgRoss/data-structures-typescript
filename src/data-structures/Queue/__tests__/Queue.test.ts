import { Queue } from '../Queue';

describe('Queue', () => {
  describe('Access', () => {
    it('should return head of the queue', () => {
      const queue = new Queue<string>();
      queue.enqueue('a');
      queue.enqueue('b');
      queue.enqueue('c');

      expect(queue.peek()).toEqual('a');
    });

    it('should return null if queue is empty', () => {
      const queue = new Queue<string>();

      expect(queue.peek()).toBeNull();
    });
  });

  describe('Insertion', () => {
    it('should add item to queue', () => {
      const valueToPush = 1;
      const queue = new Queue<number>();
      queue.enqueue(valueToPush);

      expect(queue.peek()).toBe(valueToPush);
    });
  });

  describe('Deletion', () => {
    it('should return null if queue is empty', () => {
      const queue = new Queue();

      expect(queue.dequeue()).toBeNull();
    });

    it('should remove item that was added first and return it', () => {
      const queue = new Queue<string>();
      const firstAddedItem = 'hello';

      queue.enqueue(firstAddedItem);
      queue.enqueue('world');
      queue.enqueue('!');

      expect(queue.dequeue()).toBe(firstAddedItem);
    });
  });

  describe('isEmpty()', () => {
    let queue;

    beforeEach(() => {
      queue = new Queue<number>();
    });

    it('should return true if queue is empty', () => {
      const queue = new Queue();

      expect(queue.isEmpty()).toEqual(true);
    });

    it('should return false if queue is not empty', () => {
      queue.enqueue(1);

      expect(queue.isEmpty()).toEqual(false);
    });
  });

  describe('size()', () => {
    let queue;

    beforeEach(() => {
      queue = new Queue<number>();
    });

    it('should return 0 if queue is empty', () => {
      expect(queue.size()).toEqual(0);
    });

    it('should return correct queue size', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.size()).toEqual(3);
    });
  });

  describe('toString()', () => {
    const data = ['1', '2', '3'];
    let queue: Queue<string>;

    beforeEach(() => {
      queue = new Queue<string>();
      data.forEach((value) => queue.enqueue(value));
    });

    it('should convert values to string using default method', () => {
      const expectedResult = data.toString();

      expect(queue.toString()).toEqual(expectedResult);
    });

    it('should convert values to string using callback', () => {
      const callback = (val) => val + 'a';
      const expectedResult = data.map(callback).toString();

      expect(queue.toString(callback)).toEqual(expectedResult);
    });
  });
});
