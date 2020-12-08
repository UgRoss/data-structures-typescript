import { Queue } from '../Queue';

describe('Queue', () => {
  describe('Access', () => {
    it('should return the latest item in queue', () => {
      const queue = new Queue<string>();
      queue.enqueue('a');
      queue.enqueue('b');
      queue.enqueue('c');

      expect(queue.peek()).toEqual('c');
    });
  });
});
