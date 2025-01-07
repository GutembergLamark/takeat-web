/* eslint-disable @typescript-eslint/no-unused-vars */

import { FormRegister } from "@/components/forms";
import "./RegisterModule.scss";

export function RegisterModule(props: ModuleProps) {
  return (
    <section className="m-register wrapper">
      <FormRegister />
    </section>
  );
}
