import React from 'react';
import PropTypes from 'prop-types';

const SummaryStatic = ({ ingredients=0, steps=0, title='[recipe]' }) => {
    static propTypes = {
        ingredients: PropTypes.number,
        steps: PropTypes.number,
        title: (props, propName) =>
            (typeof props[propName] !== 'string') ?
                new Error('title must be a string') :
                (props[propName].length > 20) ?
                    new Error('title is over 20 characters') :
                    null
    };

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

export default SummaryStatic;
