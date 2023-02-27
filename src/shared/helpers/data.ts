import { camelCase, snakeCase } from 'lodash';
import { ObjectWithKeys } from '../types/types';

const processDataKeyValue = (
  value: any,
  func: (value: any, excludedKeys?: string[]) => any,
  excludedKeys?: string[]
): any => {
  if (Array.isArray(value)) {
    return value.map((item) => processDataKeyValue(item, func, excludedKeys));
  }

  if (!value) {
    return value;
  }

  if (typeof value === 'object' && value !== null) {
    return Object.keys(value).reduce((result, key) => {
      const transformedKey = excludedKeys?.includes(key) ? key : func(key);
      const transformedValue = processDataKeyValue(
        value[key],
        func,
        excludedKeys
      );

      return { ...result, [transformedKey]: transformedValue };
    }, {});
  }

  return value;
};
export const camelizeData = <T extends Record<string, any>>(
  data: T | T[],
  excludedKeys?: string[] | undefined
): T | T[] => {
  if (Array.isArray(data)) {
    return data.map((item) => camelizeData(item, excludedKeys)) as T[];
  }

  const camelizedData = processDataKeyValue(data, camelCase, excludedKeys);
  return camelizedData as T;
};

export const snakizeData = <T extends Record<string, any>>(
  data: T | T[],
  excludedKeys?: string[]
): T | T[] => {
  if (Array.isArray(data)) {
    return data.map((item) => snakizeData(item, excludedKeys)) as T[];
  }

  const snakizedData = processDataKeyValue(data, snakeCase, excludedKeys);
  return snakizedData as T;
};

export const extractObjectValues = (
  obj: ObjectWithKeys,
  keys: string[]
): ObjectWithKeys => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => keys.includes(key))
  );
};

export const isObjectEmpty = (value: any) => {
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return false;
};
