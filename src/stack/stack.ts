import { hasValue } from '../util';

class Cell {
  next: Cell;
  value: any;
  constructor(value: any, next: Cell) {
    this.value = value;
    this.next = next;
  }
}

export class Stack {
  private top: Cell;
  private length: number = 0;

  constructor() {}

  public push(value: any): void {
    const cell = new Cell(value, null);
    if (!hasValue(this.top)) {
      this.top = cell;
    } else {
      cell.next = this.top;
      this.top = cell;
    }
    ++this.length;
  }

  public pop(): void {
    this.top = this.top.next;
    --this.length;
  }

  public size(): number {
    return this.length;
  }

  public print(): void {
    let result = '';
    let cell = this.top;
    while (hasValue(cell)) {
      result += `${cell.value} --> `;
      cell = cell.next;
    }
    console.log(result);
  }
}
