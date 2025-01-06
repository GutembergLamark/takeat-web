import { createContext } from "react";
import { ICartContext } from "./cart.types";

export const CartContext = createContext({} as ICartContext);
