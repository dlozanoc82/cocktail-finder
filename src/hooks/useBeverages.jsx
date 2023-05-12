import { useContext } from "react";
import BeveragesContext from "../context/BeveragesProvider";

const useBeverages = () => {
    return useContext(BeveragesContext);
}

export default useBeverages;