export default interface IHttpClient {
  get(url: string, headers?: HeadersInit): Promise<unknown>;
  post(url: string, body: unknown, headers?: HeadersInit): Promise<unknown>;
  put(url: string, body: unknown, headers?: HeadersInit): Promise<unknown>;
  delete(url: string, headers?: HeadersInit): Promise<unknown>;
}
