import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BeveragesContext = createContext();

const BeveragesProvider = ({children}) => {

    const [beverages, setBeverages] = useState([]);
    const [modal, setModal] = useState(false);
    const [beverageId, setBeverageId] = useState(null);
    const [drink, setDrink] = useState({})
    const [cargando, setCargando] = useState(false);

    useEffect(() => {

        setCargando(true);
        const getDrink = async () => {
            if (!beverageId) return;
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${beverageId}`;
                const {data} = await axios(url);
                setDrink(data.drinks[0]);
            } catch (error) {
                console.log(error);
            } finally {
                setCargando(false);
            }
        }

        getDrink();

    }, [beverageId])
    

    const getBeverage = async datos =>{
        try {
            const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.drink}&c=${datos.category}`;

            const {data} = await axios(url);
            setBeverages(data.drinks);

        } catch (error) {
            console.log(error);
        }
    }

    const handleModalClick = () =>{
        setModal(!modal);
    }

    const handleBeverageIdClick = id => {
        setBeverageId(id);
    }

    return (
        <BeveragesContext.Provider
            value={{
                getBeverage, 
                beverages,
                handleModalClick,
                modal,
                handleBeverageIdClick, 
                drink,
                cargando
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