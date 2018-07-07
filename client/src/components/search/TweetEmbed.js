import React, { Component } from "react";
import PropTypes from "prop-types";

class TweetEmbed extends Component {
  loadTweetForProps(props) {
    const { options, id } = props;
    window.twttr.widgets.createTweet(id, document.getElementById(id), options);
  }
  componentDidMount() {
    this.loadTweetForProps(this.props);
  }
  render() {
    return <div className="tweet" id={this.props.id} />;
  }
}

TweetEmbed.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.object
};

TweetEmbed.defaultProps = {
  options: {}
};

export default TweetEmbed;
