/* eslint-disable @typescript-eslint/no-explicit-any */
import { setCookie, showToast } from "@/utils/functions";
import IHttpClient from "./Http.types";
import parse from "html-react-parser";

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
    headers?: HeadersInit,
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

        if (!res.ok && res.status >= 500) {
          showToast(
            "error",
            parse("<p>Erro interno, por favor, tente novamente mais tarde</p>"),
          );
        }

        if (!res.ok && res.status < 500 && data?.message) {
          showToast("error", parse(`<p>${data?.message}</p>`));
        }

        if (res.ok) {
          if ((res.status === 200 || res.status === 201) && data?.message) {
            showToast("success", parse(`<p>${data?.message}</p>`));
          }

          if (data?.restaurant?.authorization) {
            setCookie(
              "takeat_authorization",
              data?.restaurant?.authorization,
              30,
            );
          }
        }

        return data;
      })
      .catch((error) => {
        showToast(
          "error",
          parse("<p>Erro interno, por favor, tente novamente mais tarde</p>"),
        );
        console.log(error);
      })
      .finally(() => {
        console.log("finally");
      });

    return response;
  }

  async put(
    url: string,
    body: unknown,
    headers?: HeadersInit,
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
