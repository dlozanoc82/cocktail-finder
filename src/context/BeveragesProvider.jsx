import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BeveragesContext = createContext();

const BeveragesProvider = ({children}) => {

    const [beverages, setBeverages] = useState([]);

    const getBeverage = async datos =>{
        try {
            const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.drink}&c=${datos.category}`;

            const {data} = await axios(url);
            setBeverages(data.drinks);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <BeveragesContext.Provider
            value={{
                getBeverage, 
                beverages
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