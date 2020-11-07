
export function logger(output?: (arg1: any, arg2: any) => any, verbose?: boolean): Middleware
export const immutable: Middleware;
export function compose(...middlewares: MiddlewareOrFalsy[]): Middleware;
export function middleware(fn: (action: any, props: any) => any): Middleware;
export const omitStateReturn: Middleware;

export function onState(cb: (state: any) => any): Middleware;
export function onAction(cb: (action: Function) => any): Middleware;
export function onTuple(cb: (tuple: [Function, ...any[]]) => any): Middleware;
export function onEffect(cb: (effect: Effect) => any): Middleware;

type MiddlewareOrFalsy = (Middleware | false | null | undefined);
type Middleware = (baseDispatch: (action: any, props: any) => any) => ((action: any, props: any) => any);
type Effect = [Function] | [Function, any];