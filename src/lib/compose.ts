type FunctionType = (...args: any[]) => any;

export function compose(...funcs: FunctionType[]): FunctionType {
  if (funcs.length === 0) {
    return (arg: any) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(
    (a, b) =>
      (...args: any[]) =>
        a(b(...args)),
  );
}
