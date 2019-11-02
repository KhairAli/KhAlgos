export interface TreeNode {
  value: number;
  left: TreeNode;
  right: TreeNode;
}

export class TreeNodeImpl implements TreeNode {
  value = 0;
  left = {} as TreeNode;
  right = {} as TreeNode;

  constructor(value: number, left: TreeNode, right: TreeNode) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
