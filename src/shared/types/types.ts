type CamelToSnake<T extends string> = string extends T
  ? string
  : T extends `${infer C0}${infer R}`
  ? `${C0 extends Lowercase<C0> ? '' : '_'}${Lowercase<C0>}${CamelToSnake<R>}`
  : '';

export type CamelToSnakeCase<T> = T extends readonly any[]
  ? { [K in keyof T]: CamelToSnakeCase<T[K]> }
  : T extends object
  ? {
      [K in keyof T as CamelToSnake<Extract<K, string>>]: CamelToSnakeCase<
        T[K]
      >;
    }
  : T;

export type ObjectWithKeys = Record<string, any>;
