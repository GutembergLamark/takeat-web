/* eslint-disable @typescript-eslint/no-explicit-any */
import { setCookie } from "@/utils/functions";
import IHttpClient from "./Http.types";

export default class FetchAdapter implements IHttpClient {
  async get(url: string, headers?: HeadersInit): Promise<unknown> {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }

  async post(
    url: string,
    body: unknown,
    headers?: HeadersInit
  ): Promise<unknown> {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(async (res: Response) => {
        const data = (await res.json()) as any;

        if (!res.ok && res.status < 500) {
          console.log(res);
        }

        if (res.ok) {
          if (data?.restaurant?.authorization) {
            setCookie(
              "takeat_authorization",
              data?.restaurant?.authorization,
              30
            );
          }
        }

        return data;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("finally");
      });

    return response;
  }

  async put(
    url: string,
    body: unknown,
    headers?: HeadersInit
  ): Promise<unknown> {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response.json();
  }

  async delete(url: string, headers?: HeadersInit): Promise<unknown> {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
}
