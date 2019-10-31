import { hasValue } from '../util';

class Cell {
  next: Cell;
  value: any;

  constructor(value: any, next: Cell) {
    this.value = value;
    this.next = next;
  }
}

export class LinkList {
  private head: Cell;
  private current: Cell;

  constructor() {}

  public add(value: any): void {
    if (!hasValue(this.head)) {
      this.head = new Cell(value, null);
      this.current = this.head;
    } else {
      let node = new Cell(value, null);
      this.current.next = node;
      this.current = node;
    }
  }

  public find(value: any): Cell {
    let node = this.head;
    if (hasValue(node)) {
      while (hasValue(node.next)) {
        node = node.next;
        if (node.value == value) {
          return node;
        }
      }
    }
  }

  public remove(value: any): void {}

  public print() {
    console.log(this.head);
  }
}
