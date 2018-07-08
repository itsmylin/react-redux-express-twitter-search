import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendQueryData, changeSort } from "../../actions/searchActions";
import InputField from "../common/InputField";
import isEmpty from "../../utils/is-empty";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      hashtags: "",
      count: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
  }

  onSortChange(e) {
    this.props.changeSort(e.target.value.toLowerCase());
  }
  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const queryData = {
      hashtags: this.state.hashtags,
      count: this.state.count
    };
    this.props.sendQueryData(queryData, this.props.search.sort);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
    if (!isEmpty(this.props.search.query)) {
      this.setState({
        hashtags: this.props.search.query.hashtags,
        count: this.props.search.query.count
      });
    }
  }

  render() {
    const { errors } = this.state;
    const sortOptions = ["Date", "Favorite", "Retweet"];
    let content;
    if (this.props.search.isSuccess) {
      content = (
        <h1>
          Search result for Hashtags:{" "}
          {this.props.search.query.hashtags.split(" ").map(item => `#${item} `)}
        </h1>
      );
    }

    return (
      <div className="search-form-group">
        <form onSubmit={this.onSubmit} className="search-form">
          <InputField
            divClass="search-input"
            name="hashtags"
            placeholder="Hashtags ex: twitter nodejs"
            classname="search-hashtag"
            value={this.state.hashtags}
            onChange={this.onChange}
            error={errors.hashtags}
          />
          <InputField
            divClass="search-input"
            name="count"
            placeholder="Number of tweets"
            classname="search-count"
            value={this.state.count}
            onChange={this.onChange}
            error={errors.count}
          />
          <input type="submit" className="btn-search" value="Search" />
          <div className="search-sort-select">
            <label htmlFor="sort">Sort By: </label>
            <select name="sort" onChange={this.onSortChange}>
              {sortOptions.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </form>
        <div className="search-info">{content}</div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  sendQueryData: PropTypes.func.isRequired,
  changeSort: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  search: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  search: state.search
});

export default connect(
  mapStateToProps,
  { sendQueryData, changeSort }
)(SearchBar);
