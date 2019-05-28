import React from 'react';
import StarRatingPresentational from "./components/StarRatingPresentational";
import PropTypes from 'prop-types';
// import Star from "./components/Star";

export default class Color extends React.Component {
    componentWillMount() {
        this.style = { backgroundColor: "#CCC" }
    }

    componentWillUpdate(nextProps) {
        const { title, rating } = this.props;
        this.style = null;
        this.refs.title.style.backgroundColor = "red";
        this.refs.title.style.color = "white";
        alert(`${title}: rating ${rating} -> ${nextProps.rating}`);
    }

    shouldComponentUpdate(nextProps) {
        return this.props.rating !== nextProps.rating;
    }

    componentDidUpdate(prevProps) {
        const { rating } = this.props;
        const status = (rating > prevProps.rating) ? 'better' : 'worse';
        this.refs.title.style.backgroundColor = "";
        this.refs.title.style.color = "black";
    }

    render() {
        const { title, color, rating=0, onRate } = this.props;
        return (
            <section className="color" style={this.style}>
                <h1 ref="title">{title}</h1>
                <div className="color"
                     style={{backgroundColor: color}}>
                </div>
                <StarRatingPresentational starsSelected={rating} onRate={onRate} />
            </section>
        )
    }
}

Color.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    color: PropTypes.string,
    onRate: PropTypes.func
};

Color.defaultProps = {
    title: undefined,
    rating: 0,
    color: "#000000",
    onRate: f => f
};
