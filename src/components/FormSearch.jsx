import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategories from "../hooks/useCategories";
import { useState } from "react";


const FormSearch = () => {

    const [search, setSearch] = useState({
        drink: '',
        category: ''
    })

    const [alerta, setAlerta] = useState('');

    const {drinksCategories} = useCategories();

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (Object.values(search).includes('')) {
            setAlerta('All fields are required');
            return;
        }

        setAlerta('');
        

    }

    return (
        <Form
            onSubmit={handleSubmit}
        >

        {alerta && <Alert variant="danger" className="text-center">{alerta}</Alert>}


            <Row>

                <Col md={6}>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="drink">Beverage Name</Form.Label>
                        <Form.Control 
                            id="drink"
                            type="text"
                            placeholder="Ej: Tequila, Vodka, etc."
                            name="drink"
                            value={search.drink}
                            onChange={e => setSearch({
                                ...search, 
                                [e.target.name]: e.target.value
                            })}
                        />
                    </Form.Group>

                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="category">Beverage Category</Form.Label>
                        <Form.Select
                            id="category"
                            name="category"
                            value={search.category}
                            onChange={e => setSearch({
                                ...search, 
                                [e.target.name]: e.target.value
                            })}
                        >
                            <option>--- Choose category ---</option>
                            {drinksCategories.map(category =>(
                                <option
                                    key={category.strCategory}
                                    value={category.strCategory}
                                >
                                    {category.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>

            </Row>
            
            <Row className="justify-content-end">
                <Col md={3}>
                    <Button
                        variant="danger"
                        className="text-uppercase w-100"
                        type="submit"
                    >
                        Search Beverage
                    </Button>
                </Col>
            </Row>

        </Form>
    )
}

export default FormSearch