import { TreeNodeImpl, TreeNode } from './tree-node';
import { hasValue } from '../../util';

export class Binary {
  private root = null;

  public insert(value: number) {
    this.root = this.insertChild(value, this.root);
  }

  private insertChild(value: number, current: TreeNode) {
    if (!hasValue(current)) {
      return new TreeNodeImpl(value, null, null);
    }
    if (current.value >= value) {
      current.left = this.insertChild(value, current.left);
    } else if (current.value < value) {
      current.right = this.insertChild(value, current.right);
    } else {
      return current;
    }
    return current;
  }

  public find(value: number) {
    let result = this.findNode(this.root, value);
    console.log('result', result);
  }

  public showTreeData() {
    console.log(this.root);
  }

  private findNode(current, value) {
    if (current == null) {
      return null;
    }
    if (value == current.value) {
      return current.value;
    }
    return value < current.value
      ? this.findNode(current.left, value)
      : this.findNode(current.right, value);
  }
}
