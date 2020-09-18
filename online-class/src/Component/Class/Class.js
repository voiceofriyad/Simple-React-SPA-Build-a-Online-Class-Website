import React, { useEffect, useState } from 'react';
import './Class.css';
import cdata from '../../Data/Data.json';
import Course from '../Course/Course';
import Cart from '../Cart/Cart'


const Class = () => {

    const [data, setData] = useState([]);
    useEffect ( () => {
        setData (cdata);
    }, [])

    const [cart, setCart] = useState([]);
    
    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }

 

    return (
        <div className = "class-container"> 

            <div className="course-container">
                {
                    data.map(value => <Course 
                    handleAddCourse = {handleAddCourse}
                    course = {value}>

                    </Course> )
                }

            </div>

            <div className="cart-container">

                <Cart cart = {cart}></Cart>

            </div>
            
            
        </div>
    );
};

export default Class;