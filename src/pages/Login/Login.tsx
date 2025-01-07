import { LoginModule } from "@/sections/modules/Login";
import { MotionMain } from "@/utils/libs/motion";
import "@/assets/sass/pages/login.scss";

export function Login() {
  const uri = "/login";
  return (
    <MotionMain className="login">
      <LoginModule fields={{}} uri={uri} order={1} />
    </MotionMain>
  );
}
