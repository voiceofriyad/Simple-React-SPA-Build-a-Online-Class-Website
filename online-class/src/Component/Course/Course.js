import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Course = (props) => {

    const {course_name, instructor_name, price, photo} = props.course;

    return (
        <div className = "course">

            <div>
                <img src = {photo} />
            </div>

            <div className="course-data">
                <p className = "course-name">{course_name}</p>
                <p className = "instructor-name"> Instructor: {instructor_name}</p>
                <p><small>Price: {price}</small></p>
                <button
                    className = "main-button"
                    onClick = {() => props.handleAddCourse(props.course) } >

                    <FontAwesomeIcon icon={faShoppingCart} /> Enrol Now

                </button>
            </div>


            
        </div>
    );
};

export default Course;