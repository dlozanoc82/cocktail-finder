import { Modal, Image } from "react-bootstrap";
import useBeverages from "../hooks/useBeverages";


const ModalBeverage = () => {

    const {modal, handleModalClick, drink, cargando} = useBeverages();

    const showIngredients = () => {
        let ingredients = [];

        for(let i=1; i < 16; i++){
            if (drink[`strIngredient${i}`]) {
                ingredients.push(
                    <li>{drink[`strIngredient${i}`]} - {drink[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredients;
    }

    return (
        !cargando && (
            <Modal show={modal} onHide={handleModalClick}>
                <Image 
                    src={drink.strDrinkThumb}
                    alt={`Image beverage ${drink.strDrink}`}
                />
                <Modal.Header>
                    <Modal.Title>{drink.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-3">
                        <h2>Instructions</h2>
                        {drink.strInstructions}
                        <h2>Ingredients and Quantities</h2>
                        {showIngredients()}
                    </div>
                </Modal.Body>
            </Modal>
        )
    )
}

export default ModalBeverage