declare global {
   export namespace Chai {
      export interface Assertion {
         strictlyEqual(value: any, message?: string): void;
      }
   }
}

declare const enableStrictlyEqual: (chai: any, util: any) => void;

export = enableStrictlyEqual;
