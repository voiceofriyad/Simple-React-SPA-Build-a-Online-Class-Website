import React from 'react';
import { Button } from 'react-bootstrap';

const Cart = (props) => {

    const cart = props.cart;

    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const coursePrice = cart[i];
        total = total +  +coursePrice.price;
    }

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number (precision);
    }


    return (
        <div>
            <h3> Total Course: {cart.length}</h3>
            
            <h3> Total Price: ${formatNumber(total)} </h3>

            <br /> <br /> <br /> <br /> <br />

            <Button variant="success">Thank you very much for your purchase.</Button>
            
        </div>
    );
};

export default Cart;