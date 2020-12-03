import { LinkedListNode } from "../LinkedListNode";

describe("LinkedListNode", () => {
  it("should be created with value", () => {
    const nodeVal = 2;
    const linkedListNode = new LinkedListNode(nodeVal);
    expect(linkedListNode.value).toEqual(nodeVal);
  });

  describe("next node reference", () => {
    it("should contain next reference as null by default", () => {
      const linkedListNode = new LinkedListNode("abc");
      expect(linkedListNode.next).toBeNull();
    });

    it("should contain reference to the next Node if it was provided", () => {
      const linkedListNode = new LinkedListNode("abc");
      const nodeWithNextRef = new LinkedListNode("abcd", linkedListNode);

      expect(nodeWithNextRef.next).toEqual(linkedListNode);
    });
  });

  describe("toString()", () => {
    it("should use callback if provided", () => {
      const nodeVal = "abc";
      const stringConvertingCallback = (item) => item + "d";
      const linkedListNode = new LinkedListNode(nodeVal);
      const result = linkedListNode.toString(stringConvertingCallback);

      expect(result).toEqual(stringConvertingCallback(nodeVal));
    });

    it("should use toString() if callback param is missing", () => {
      const linkedListNode = new LinkedListNode("abc");

      expect(linkedListNode.toString()).toEqual("abc");
    });
  });
});
