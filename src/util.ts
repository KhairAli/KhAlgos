export function hasValue(value: any): boolean {
  return value !== null && value !== undefined;
}

export function newInstance(instance: any): any {
  return Object.assign({}, instance);
}
