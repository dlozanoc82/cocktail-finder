import { useContext } from "react";
import CategoriesContext from "../context/CategoryProvider";

const useCategories = () => {
    return useContext(CategoriesContext);
}

export default useCategories