import { Binary } from './binary/binary';
import { LinkList } from './link-list/link-list';
import { Stack } from './stack/stack';

export class Test {
  private binary: Binary;
  private list: LinkList;
  private stack: Stack;
  constructor() {
    this.runStack();
  }


  public runStack(){
    this.stack = new Stack();
    this.stack.push(1);
    this.stack.push(2);
    this.stack.push(3);
    this.stack.push(4);
    this.stack.push(5);
    this.stack.push(6);
    this.stack.pop();
    this.stack.print();
    console.log(this.stack.size())
  }

  public runLinkList() {
    this.list = new LinkList();
    this.list.add(1);
    this.list.add(2);
    this.list.add(3);
    this.list.add(4);
    this.list.add(5);
    this.list.add(6);
    this.list.add(7);
    this.list.add(8);
    this.list.add(9);
    this.list.print();
    console.log('r', this.list.find(3));
  }

  public runBinary() {
    this.binary = new Binary();
    this.binary.insert(34);
    this.binary.insert(4);
    this.binary.insert(8);
    this.binary.insert(6);
    this.binary.insert(90);
    this.binary.insert(1);
    this.binary.insert(35);
    this.binary.insert(23);
    this.binary.showTreeData();
    this.binary.find(1);
  }
}
