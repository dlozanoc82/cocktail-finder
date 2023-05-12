import { Button, Form, Row, Col } from "react-bootstrap";

const FormSearch = () => {
    return (
        <Form>
            <Row>

                <Col md={6}>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="drink">Beverage Name</Form.Label>
                        <Form.Control 
                            id="drink"
                            type="text"
                            placeholder="Ej: Tequila, Vodka, etc."
                            name="drink"
                        />
                    </Form.Group>

                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="category">Beverage Category</Form.Label>
                        <Form.Select
                            id="category"
                            name="category"
                        >
                            <option>--- Choose category ---</option>
                        </Form.Select>
                    </Form.Group>
                </Col>

            </Row>
        </Form>
    )
}

export default FormSearch