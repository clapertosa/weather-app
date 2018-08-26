import React, { Component } from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";
import * as actions from "../../../store/actions";
import styles from "./SearchBar.scss";

class SearchBar extends Component {
  onInputChange = debounce(query => {
    this.props.inputChange(query);
    query.length > 0 ? this.props.getForecasts(query) : null;
  }, 1500);

  render() {
    return (
      <span className={styles.input}>
        <input
          autoFocus
          onFocus={event => (event.target.placeholder = "")}
          onBlur={event => (event.target.placeholder = this.props.placeholder)}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder={this.props.placeholder}
          type="text"
        />
      </span>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inputChange: input => dispatch(actions.setQuery(input)),
    getForecasts: city => dispatch(actions.getForecasts(city))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
