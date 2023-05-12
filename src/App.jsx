import { Container } from "react-bootstrap";
import FormSearch from "./components/FormSearch";

function App() {
    return (
        <>
            <header className="py-5">
                <h1>Cocktail Finder</h1>
            </header>
            <Container className="mt-5"> 
                <FormSearch></FormSearch>
            </Container>
        </>
    )
}

export default App
