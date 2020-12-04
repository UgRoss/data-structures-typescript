import { DoublyLinkedListNode } from '../DoublyLinkedListNode';

describe('DoublyLinkedListNode', () => {
  it('should be created with value', () => {
    const nodeVal = 2;
    const doublyLinkedListNode = new DoublyLinkedListNode(nodeVal);
    expect(doublyLinkedListNode.value).toEqual(nodeVal);
  });

  describe('next node reference', () => {
    it('should be null as next Node reference by default', () => {
      const doublyLinkedListNode = new DoublyLinkedListNode('abc');
      expect(doublyLinkedListNode.next).toBeNull();
    });

    it('should contain reference to the next Node if it was provided', () => {
      const doublyLinkedListNode = new DoublyLinkedListNode('abc');
      const nodeWithNextRef = new DoublyLinkedListNode('abc1', doublyLinkedListNode);

      expect(nodeWithNextRef.next).toEqual(doublyLinkedListNode);
    });
  });

  describe('prev node reference', () => {
    it('should be null as previous Node reference by default', () => {
      const doublyLinkedListNode = new DoublyLinkedListNode('abc');
      expect(doublyLinkedListNode.previous).toBeNull();
    });

    it('should contain reference to the previous Node if it was provided', () => {
      const doublyLinkedListNode = new DoublyLinkedListNode('abc');
      const nodeWithPrevRef = new DoublyLinkedListNode('abc1', null, doublyLinkedListNode);

      expect(nodeWithPrevRef.previous).toEqual(doublyLinkedListNode);
    });
  });

  describe('toString()', () => {
    it('should use callback if provided', () => {
      const nodeVal = 'abc';
      const stringConvertingCallback = (item) => item + 'd';
      const linkedListNode = new DoublyLinkedListNode(nodeVal);
      const result = linkedListNode.toString(stringConvertingCallback);

      expect(result).toEqual(stringConvertingCallback(nodeVal));
    });

    it('should use toString() if callback param is missing', () => {
      const linkedListNode = new DoublyLinkedListNode('abc');

      expect(linkedListNode.toString()).toEqual('abc');
    });
  });
});
