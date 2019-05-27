import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star'

const StarRating = createClass({
    displayName: 'StarRating',
    propTypes: {
        totalStars: PropTypes.number
    },
    getDefaultProps() {
        return {
            totalStars: 5
        }
    },
    getInitialState() {
        return {
            starsSelected: 0
        }
    },
    componentWillMount() {
        const { starsSelected } = this.props
        if (starsSelected) {
            this.setState(starsSelected)
        }
    },
    change(starsSelected) {
        this.setState({starsSelected})
    },
    render() {
        const {totalStars} = this.props;
        const {starsSelected} = this.state;
        return (
            <div className="star-rating">
                {
                    [...Array(totalStars)].map((n, i) =>
                        <Star key={i}
                              selected={i<starsSelected}
                              onClick={() => this.change(i+1)}
                        />)
                }
                <p>{starsSelected} of {totalStars} stars</p>
            </div>

        )
    }
});

export default StarRating
