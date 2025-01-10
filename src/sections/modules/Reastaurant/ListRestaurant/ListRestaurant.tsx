/* eslint-disable @typescript-eslint/no-unused-vars */

import ListOfProducts from "./ListRestaurant.client";
import "./ListRestaurant.scss";

export function ListRestaurant(props: ModuleProps) {
  const { fields } = props;

  return (
    <section className="l-restaurant wrapper">
      <h2>{fields?.title}</h2>

      <ListOfProducts id={fields?.id} />
    </section>
  );
}
