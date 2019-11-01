import { HashMap } from './hash-map';
import { hasValue } from '../util';

class Cell {
  next: Cell;
  value: any;
  key: any;
  constructor(key?: any, value?: any, next?: Cell) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

export class HashChaining implements HashMap {
  private hashTable = new Array(11) as Cell[];

  hash(data: any): number {
    return this.hashTable.length % data;
  }

  put(key: string, value: any): void {
    let index = this.hash(key);
    if (!hasValue(this.hashTable[index])) {
      this.hashTable[index] = new Cell(key, value);
    } else {
      let tmp = this.hashTable[index];
      while (hasValue(tmp.next) && tmp.key != key) {
        tmp = tmp.next;
      }
      tmp.key == key ? (tmp.value = value) : (tmp.next = new Cell(key, value));
    }
  }

  get(key: string): any {
    let index = this.hash(key);
    let tmp = this.hashTable[index];
    if (!hasValue(tmp)) {
      return null;
    }
    while (hasValue(tmp.next) && tmp.key != key) {
      tmp = tmp.next;
    }
    return tmp.key == key ? tmp.value : null;
  }

  print(): void {
    console.log(this.hashTable);
  }
}
