/* eslint-disable @typescript-eslint/no-unused-vars */

import "./CreateAndListProducts.scss";
import ActionForOpenModal from "./CreateAndListProducts.products";
import CreateAndListProductsWrapper from "./CreateAndListProudcts.wrapper";

export function CreateAndListProducts(props: ModuleProps) {
  const { fields } = props;
  return (
    <section className="cl-products wrapper">
      <CreateAndListProductsWrapper id={fields?.id} />
    </section>
  );
}
