export interface HashMap {
  hash(data: any): number;
  put(key: string, value: any): void;
  get(key: string): any;
  print(): void;
}
