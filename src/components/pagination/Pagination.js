import React from 'react';
import classes from './PignationModule.css'


const Pagination = ( {handleNext, page, handlePrev}) => {
    return (
        <div className={classes.page}>
            <p onClick={handlePrev}>Prev</p>
            <p>{page}</p>
            <p onClick={handleNext}>Next</p>
        </div>
    );
};

export default Pagination;