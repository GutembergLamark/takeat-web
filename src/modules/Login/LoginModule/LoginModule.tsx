/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormLogin } from "@/components/forms";
import "./LoginModule.scss";

export function LoginModule(props: ModuleProps) {
  return (
    <section className="m-login wrapper">
      <FormLogin />
    </section>
  );
}
