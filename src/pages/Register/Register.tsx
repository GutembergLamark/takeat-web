import { RegisterModule } from "@/sections/modules/Register";
import { MotionMain } from "@/utils/libs/motion";
import "@/assets/sass/pages/register.scss";

export function Register() {
  const uri = "/register";
  return (
    <MotionMain
      key={uri}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="register"
    >
      <RegisterModule />
    </MotionMain>
  );
}
