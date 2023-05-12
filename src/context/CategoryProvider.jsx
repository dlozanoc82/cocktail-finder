import { createContext, useEffect, useState } from "react";

const CategoriesContext = createContext();

const CategoryProvider = ({children}) => {
    return (
        <CategoriesContext.Provider
            value={{}}
        >
            {children}
        </CategoriesContext.Provider>
    )
}

export{
    CategoryProvider
}

export default CategoriesContext;