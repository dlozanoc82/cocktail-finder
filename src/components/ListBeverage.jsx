import useBeverages from "../hooks/useBeverages"
import { Row } from "react-bootstrap";
import Beverage from "./Beverage";

const ListBeverage = () => {

    const {beverages} = useBeverages();

    return (
        <Row className="mt-5">
            {beverages.map(beverage =>(
                <Beverage
                    key={beverage.idDrink}
                    beverage={beverage}
                />
            ))}
        </Row>
    )
}

export default ListBeverage