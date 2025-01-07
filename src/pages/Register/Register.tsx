import { RegisterModule } from "@/sections/modules/Register";
import { MotionMain } from "@/utils/libs/motion";
import "@/assets/sass/pages/register.scss";

export function Register() {
  const uri = "/register";
  return (
    <MotionMain className="register">
      <RegisterModule fields={{}} uri={uri} order={1} />
    </MotionMain>
  );
}
