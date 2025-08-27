import { useContext } from "react";
import { Cart } from "./Context";

export const useCart = () => {
  return useContext(Cart);
};
