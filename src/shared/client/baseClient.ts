import { RequestOptions } from "./baseClient.types";

export async function request<T>(url: string, options: RequestOptions = {}): Promise<T> {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const error = new Error(`Request failed with status ${response.status}`);
      throw Object.assign(error, { response });
    }

    const responseData = await response.json() as T;
    return responseData;
  } catch (error) {
    throw error;
  }
}
