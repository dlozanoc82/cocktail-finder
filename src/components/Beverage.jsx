import { Col, Card, Button } from "react-bootstrap";
import useBeverages from "../hooks/useBeverages";

const Beverage = ({beverage}) => {

    const {handleModalClick, handleBeverageIdClick} = useBeverages();

    return (
        <Col md={6} lg={3}>
            <Card className="mb-4">
                <Card.Img
                    variant="top"
                    src={beverage.strDrinkThumb}
                    alt={`Imagen de ${beverage.strDrink}`}
                />
                <Card.Body>
                    <Card.Title>{beverage.strDrink}</Card.Title>
                    <Button
                        variant={'warning'}
                        className="w-100 text-uppercase mt-2"
                        onClick={()=>{ 
                            handleModalClick()
                            handleBeverageIdClick(beverage.idDrink) 
                        }}
                    >Show Drink</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Beverage