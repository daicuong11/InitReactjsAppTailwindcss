import { useContext } from "react";
import Context from "./Context";

export const useGlobalContext = () => useContext(Context);