import { hasValue } from '../../util';
type Factor = 1 | 0 | -1;
class Cell {
  public value: any;
  public left: Cell;
  public right: Cell;
  public height: number;

  constructor(value?: any, left?: Cell, right?: Cell) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.height = 1;
  }
}

export class AVLTree<T> {
  public insert(item: T, current: Cell): Cell {
    if (!hasValue(current)) {
      return new Cell(item);
    }
    if (current.value >= item) {
      current.left = this.insert(item, current.left);
    } else if (current.value < item) {
      current.right = this.insert(item, current.right);
    }
    current.height = this.getMax(current) + 1;
    let factor = this.getBalance(current);
    current = this.rotate(current, factor);
    return current;
  }

  public display(root: Cell): void {
    let str = '';
    if (!hasValue(root)) {
      return;
    }
    if (hasValue(root.left)) {
      str = str.concat(root.left.value + ' <-- ');
    }
    str = str.concat(root.value + ' --> ');
    if (hasValue(root.right)) {
      str = str.concat(root.right.value);
    }
    console.log(str);
    this.display(root.left);
    this.display(root.right);
  }

  public rotate(cell: Cell, factor: number): Cell {
    if (factor < -1) {
      console.log(`time to left rotate ${cell.value}`);
      return leftRotate(cell, this);
    } else if (factor > 1) {
      console.log(`time to right rotate ${cell.value}`);
      return rightRotate(cell, this);
    } else {
      return cell;
    }

    function rightRotate(root: Cell, instance): Cell {
      let newRoot = root.left;
      let rightTree = newRoot.right;
      root.left = rightTree;
      newRoot.right = root;
      root.height = instance.getMax(root);
      newRoot.height = instance.getMax(newRoot);
      return newRoot;
    }

    function leftRotate(root: Cell, instance): Cell {
      let newRoot = root.right;
      let leftTree = newRoot.left;
      newRoot.left = root;
      root.right = leftTree;
      root.height = instance.getMax(root);
      newRoot.height = instance.getMax(newRoot);
      return newRoot;
    }
  }

  private getHeight(cell: Cell): number {
    if (hasValue(cell)) {
      return cell.height;
    }
    return 0;
  }

  private getMax(cell: Cell): number {
    const left = this.getHeight(cell.left);
    const right = this.getHeight(cell.right);
    return left > right ? left : right;
  }

  private getBalance(cell: Cell) {
    if (hasValue(cell)) {
      return this.getHeight(cell.left) - this.getHeight(cell.right);
    }
    return 0;
  }
}
