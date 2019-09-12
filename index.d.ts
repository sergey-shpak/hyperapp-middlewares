
export function logger(output?: Function, verbose?: boolean): Middleware;
export const immutable: Middleware;
export function compose(...middlewares: Middleware[]): Middleware;

type Middleware = (baseDispatch: (action: any, props: any) => any) => ((action: any, props: any) => any);