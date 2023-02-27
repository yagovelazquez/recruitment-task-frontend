export interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

export interface ErrorResponse extends Error {
  response: Response;
}

export interface RequestError extends ErrorResponse {
  status: number;
}

export type RequestHeaders = Record<string, string>;

export type RequestBody = BodyInit | null | undefined;

export type RequestMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'
  | 'HEAD'
  | 'OPTIONS'
  | 'CONNECT'
  | 'TRACE';

export type RequestParams = {
  method: RequestMethod;
  headers?: RequestHeaders;
  body?: RequestBody;
};

export type Request<T> = (url: string, params?: RequestParams) => Promise<T>;
