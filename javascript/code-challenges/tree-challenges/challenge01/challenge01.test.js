// Write your test here

const buildTree = require('./challenge01')


describe("if the preorder and inoreder is empty", () => {
    it("array is empty", () => {
  
      buildTree([3,9,20,15,7],[9,3,15,20,7]);  
      expect(buildTree([3,9,20,15,7],[9,3,15,20,7])).toBe([3,9,20,null,null,15,7]);
      
    });
  });