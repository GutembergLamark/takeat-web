/* eslint-disable @typescript-eslint/no-unused-vars */

import "./CreateAndListProducts.scss";
import ActionForOpenModal from "./CreateAndListProducts.client";

export function CreateAndListProducts(props: ModuleProps) {
  return (
    <section className="cl-products wrapper">
      <ActionForOpenModal />
    </section>
  );
}
