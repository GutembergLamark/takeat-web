import { MotionButton } from "@/utils/libs/motion";
import { Link } from "react-router-dom";

export interface ButtonProps {
  type: "link" | "button";
  styleType: "default";
  children: React.ReactElement | string;
  label?: string;
  linkProps?: React.ComponentProps<typeof Link>;
  buttonProps?: React.ComponentProps<typeof MotionButton>;
  addClass?: string;
  color?: string;
}
