import React from 'react';
import PropTypes from 'prop-types';

const SummaryFunctional = ({ ingredients=0, steps=0, title='[recipe]' }) => {
    return (
        <div className="summary">
            <h1>{title}</h1>
            <p>
                <span>{ingredients} Ingredients</span> |
                <span> {steps} Steps</span>
            </p>
        </div>
    )
};

SummaryFunctional.propTypes = {
    ingredients: PropTypes.number,
    steps: PropTypes.number,
    title: (props, propName) =>
        (typeof props[propName] !== 'string') ?
            new Error('title must be a string') :
            (props[propName].length > 20) ?
                new Error('title is over 20 characters') :
                null
};

export default SummaryFunctional;



