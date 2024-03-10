import { Form, Button, Table} from "react-bootstrap";
import { useState, createRef } from "react";

export default function AddProduct(){
    // typeOfDate[]
    let initialValue = [];
    const [products, setProduct] = useState(initialValue);
    const formData = createRef();
    // add product handler
    const add = (event)=>{
        event.preventDefault();
        const newProduct = {
            product_name: formData.current.product_name.value,
            product_price: formData.current.product_price.value,
            product_qty: Number(formData.current.product_qty.value)
        }
        // add a new product inside products array
        setProduct([...products, newProduct]);
    }
    // increment quantity
    const increment_quantity = (event) => {
        const indexOfArray = event.target.value;
        products[indexOfArray].product_qty = products[indexOfArray].product_qty + 1;
        setProduct([...products]);
    }
    // decrement quantity
    const decrement_quantity = (event) => {
        const indexOfArray = event.target.value;
        if(products[indexOfArray].product_qty > 0){
            products[indexOfArray].product_qty = products[indexOfArray].product_qty - 1;
        }        
        setProduct([...products]);
    }

    return(
        <div>   
            <Form onSubmit={add} ref={formData}>
                <Form.Group className="mb-3" controlId="formProductName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Product Name" name="product_name"/>                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="number" placeholder="Price in Peso" name="product_price"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicQty">
                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control type="number" placeholder="How many: qty" name="product_qty"/>
                </Form.Group>                  
                
                <Button variant="primary" type="submit">
                    Add to Inventory
                </Button>
            </Form>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.product_name}</td>
                                    <td>{item.product_price}</td>
                                    <td>{item.product_qty}</td>
                                    <td>
                                        <Button variant="success" onClick={event=>increment_quantity(event)} value={index}>+</Button>                                        
                                        <Button variant="danger" onClick={event=>decrement_quantity(event)} value={index}>-</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }                    
                </tbody>
            </Table>
        </div>
    )
}
