import { Stack } from '../Stack';

describe('Stack', () => {
  describe('Access', () => {
    describe('should return the latest item in stack', () => {
      const valuesToPush = ['a', 'b', 'c'];
      const stack = new Stack<string>();
      valuesToPush.forEach((value) => stack.push(value));

      const expectedLatestItem = valuesToPush[valuesToPush.length - 1];
      expect(stack.peek()).toEqual(expectedLatestItem);
    });

    describe('should return null if stack is empty', () => {
      const stack = new Stack<string>();

      expect(stack.peek()).toBeNull();
    });
  });

  describe('Insertion', () => {
    it('should add item to stack', () => {
      const valueToPush = 1;
      const stack = new Stack<number>();
      stack.push(valueToPush);

      expect(stack.peek()).toEqual(valueToPush);
    });

    it('should add items in LIFO order', () => {
      const valuesToPush = [1, 2, 3];
      const stack = new Stack<number>();
      valuesToPush.forEach((value) => stack.push(value));

      const expectedLatestItem = valuesToPush[valuesToPush.length - 1];
      expect(stack.peek()).toEqual(expectedLatestItem);
    });
  });

  describe('Deletion', () => {
    it('should return null if stack is empty', () => {
      const stack = new Stack();

      expect(stack.pop()).toBeNull();
    });

    describe('not empty stack', () => {
      const valuesToPush = [1, 2, 3];
      let stack: Stack<number>;

      beforeEach(() => {
        stack = new Stack<number>();
        valuesToPush.forEach((value) => stack.push(value));
      });

      it('should return deleted item from stack', () => {
        const expectedRemovedValue = valuesToPush[valuesToPush.length - 1];
        expect(stack.pop()).toEqual(expectedRemovedValue);
      });

      it('should remove the latest value from stack', () => {
        stack.pop();
        const expectedLatestStackVal = valuesToPush[valuesToPush.length - 2];
        expect(stack.peek()).toEqual(expectedLatestStackVal);
      });
    });
  });

  describe('isEmpty()', () => {
    it('should return true if stack is empty', () => {
      const stack = new Stack();
      expect(stack.isEmpty()).toEqual(true);
    });

    it('should return false if stack is not empty', () => {
      const stack = new Stack<number>();
      [1, 2, 3].forEach((val) => stack.push(val));

      expect(stack.isEmpty()).toEqual(false);
    });
  });

  it('should convert stack to array', () => {
    const valuesToPush = [1, 2, 3];
    const stack = new Stack<number>();
    valuesToPush.forEach((value) => stack.push(value));

    expect(stack.toArray()).toEqual(valuesToPush);
  });

  describe('toString()', () => {
    const data = ['1', '2', '3'];
    let stack: Stack<string>;

    beforeEach(() => {
      stack = new Stack<string>();
      data.forEach((value) => stack.push(value));
    });

    it('should convert values to string using default method', () => {
      expect(stack.toString()).toEqual(data.toString());
    });

    it('should convert nodes to string using callback', () => {
      const callback = (val) => val + 'a';
      const expectedResult = data.map(callback).toString();

      expect(stack.toString(callback)).toEqual(expectedResult);
    });
  });
});
