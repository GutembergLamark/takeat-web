import { LoginModule } from "@/sections/modules/Login";
import { MotionMain } from "@/utils/libs/motion";
import "@/assets/sass/pages/login.scss";

export function Login() {
  const uri = "/login";
  return (
    <MotionMain
      key={uri}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="login"
    >
      <LoginModule />
    </MotionMain>
  );
}
