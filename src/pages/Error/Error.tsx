import { useRouteError } from "react-router-dom";
import RouteError from "./Error.types";

export function Error() {
  const error = useRouteError() as RouteError;

  const message: { [key: string]: string } = {
    "404": "Página não encontrada",
    "500": "Erro interno do servidor",
  };

  return (
    <section>
      <h2>{error?.status}</h2>
      <p>{message[error?.status.toString()]}</p>
    </section>
  );
}
