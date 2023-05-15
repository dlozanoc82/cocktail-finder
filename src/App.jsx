import { Container } from "react-bootstrap";
import FormSearch from "./components/FormSearch";
import { CategoryProvider } from "./context/CategoryProvider";
import { BeveragesProvider } from "./context/BeveragesProvider";
import ListBeverage from "./components/ListBeverage";
import ModalBeverage from "./components/ModalBeverage";


function App() {
    return (
        <CategoryProvider>
            <BeveragesProvider>
                <header className="py-5">
                    <h1>Cocktail Finder</h1>
                </header>
                <Container className="mt-5"> 
                    <FormSearch />
                    <ListBeverage />
                    <ModalBeverage />
                </Container>
            </BeveragesProvider>
        </CategoryProvider>
    )
}

export default App
