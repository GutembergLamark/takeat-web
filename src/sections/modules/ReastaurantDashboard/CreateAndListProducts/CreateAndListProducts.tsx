/* eslint-disable @typescript-eslint/no-unused-vars */

import "./CreateAndListProducts.scss";
import ActionForOpenModal from "./CreateAndListProducts.client";

export function CreateAndListProducts(props: ModuleProps) {
  const { fields } = props;
  return (
    <section className="cl-products wrapper">
      <ActionForOpenModal id={fields?.id} />
    </section>
  );
}
