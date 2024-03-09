import { Form, Button, Table} from "react-bootstrap";
import { useState } from "react";

export default function AddProduct(){
    // typeOfDate[]
    let initialValue = [];
    const [products, setProduct] = useState(initialValue);
    // add product handler
    const add = (event)=>{
        event.preventDefault();
        // console.log(event.target.product_name.value);
        const formData = event.target;
        const newProduct = {
            product_name: formData.product_name.value,
            product_price: formData.product_price.value,
            product_qty: formData.product_qty.value
        }
        // console.log(newProduct);
        // add a new product inside products array
        setProduct([...products, newProduct]);
    }

    return(
        <div>   
            <Form onSubmit={add}>
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
                                </tr>
                            )
                        })
                    }                    
                </tbody>
            </Table>
        </div>
    )
}