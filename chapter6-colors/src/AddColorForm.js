import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddColorForm extends Component {
  constructor(props) {
      super(props);
      this.submit = this.submit.bind(this)
  }

  logColor = (title, color) =>
        console.log(`New Color: ${title} | ${color}`);

  submit(e) {
      const { _title, _color } = this.refs;
      this.props.onNewColor(_title.value, _color.value);
      _title.value = '';
      _color.value = '#000000';
      _title.focus();
  };

  render() {
    return (
        <form onSubmit={this.submit}>
          <input ref="_title"
                 type="text"
                 placeholder="color title..." required />
          <input ref="_color"
                 type="color" required />
          <button>ADD</button>
        </form>
    )
  }
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
};

AddColorForm.defaultProps = {
    onNewColor: f => f
};

export default AddColorForm;
