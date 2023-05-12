import { Container } from "react-bootstrap";
import FormSearch from "./components/FormSearch";
import { CategoryProvider } from "./context/CategoryProvider";
import { BeveragesProvider } from "./context/BeveragesProvider";


function App() {
    return (
        <CategoryProvider>
            <BeveragesProvider>
                <header className="py-5">
                    <h1>Cocktail Finder</h1>
                </header>
                <Container className="mt-5"> 
                    <FormSearch></FormSearch>
                </Container>
            </BeveragesProvider>
        </CategoryProvider>
    )
}

export default App
