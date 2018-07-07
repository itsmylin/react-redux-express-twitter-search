import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendQueryData } from "../../actions/searchActions";
import InputField from "../common/InputField";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      hashtags: "",
      count: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.search.isSuccess) {
      this.props.history.push("/search");
    }
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

  render() {
    const { errors } = this.state;
    return (
      <div className="landing">
        <div className="bg" />
        <h1>Search Tweets by Hashtags! </h1>
        <div className="landing-form-group">
          <form onSubmit={this.onSubmit} className="landing-search-form">
            <InputField
              divClass="landing-search-input"
              name="hashtags"
              placeholder="Hashtags ex: twitter nodejs"
              classname="landing-hashtag"
              value={this.state.hashtags}
              onChange={this.onChange}
              error={errors.hashtags}
            />
            <InputField
              divClass="landing-search-input"
              name="count"
              placeholder="Number of tweets"
              classname="landing-count"
              value={this.state.count}
              onChange={this.onChange}
              error={errors.count}
            />
            <div className="submit-container">
              <input
                type="submit"
                className="landing-btn-search"
                value="Search"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  sendQueryData: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  search: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  search: state.search
});

export default connect(
  mapStateToProps,
  { sendQueryData }
)(Landing);
