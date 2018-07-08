import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import TweetFeed from "./TweetFeed";
import Spinner from "../common/Spinner";

class TweetResult extends Component {
  render() {
    const { tweets, loading, isSuccess } = this.props.search;
    let content;
    if (loading) {
      content = <Spinner />;
    } else if (tweets.length === 0 && isSuccess) {
      content = (
        <div className="no-content">There is no tweet with those hashtags</div>
      );
    } else if (tweets.length !== 0) {
      content = <TweetFeed tweets={tweets} />;
    } else {
      content = <div className="reminder">Search tweets using hashtags</div>;
    }
    return (
      <div className="container">
        <SearchBar />
        <div className="tweet-result">{content}</div>
      </div>
    );
  }
}

TweetResult.propTypes = {
  search: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  search: state.search
});

export default connect(mapStateToProps)(TweetResult);
