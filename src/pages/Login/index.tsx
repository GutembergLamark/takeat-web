import { LoginModule } from "@/modules/Login";
import { MotionMain } from "@/utils/libs/motion";

export default function Login() {
  const uri = "/login";
  return (
    <MotionMain>
      <LoginModule fields={{}} uri={uri} order={1} />
    </MotionMain>
  );
}
