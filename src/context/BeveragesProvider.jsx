import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BeveragesContext = createContext();

const BeveragesProvider = ({children}) => {

    return (
        <BeveragesContext.Provider
            value={{
            }}
        >
            {children}
        </BeveragesContext.Provider>
    )
}

export{
    BeveragesProvider
}

export default BeveragesContext;