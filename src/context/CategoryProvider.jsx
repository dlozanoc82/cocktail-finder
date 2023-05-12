import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CategoriesContext = createContext();

const CategoryProvider = ({children}) => {

    const [drinksCategories, setDrinksCategories] = useState([]);

    const getCategories = async () =>{
        try {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const {data} = await axios(url);
            setDrinksCategories(data.drinks);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <CategoriesContext.Provider
            value={{
                drinksCategories
            }}
        >
            {children}
        </CategoriesContext.Provider>
    )
}

export{
    CategoryProvider
}

export default CategoriesContext;