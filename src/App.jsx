import { Container } from "react-bootstrap";
import FormSearch from "./components/FormSearch";
import { CategoryProvider } from "./context/CategoryProvider";

function App() {
    return (
        <CategoryProvider>
            <header className="py-5">
                <h1>Cocktail Finder</h1>
            </header>
            <Container className="mt-5"> 
                <FormSearch></FormSearch>
            </Container>
        </CategoryProvider>
    )
}

export default App
