/* eslint-disable @typescript-eslint/no-unused-vars */

import ListOfProducts from "./ListCart.client";
import "./ListCart.scss";

export function ListCart(props: ModuleProps) {
  const { fields } = props;

  return (
    <section className="l-cart wrapper">
      <h2>{fields?.title}</h2>
      <ListOfProducts />
    </section>
  );
}
