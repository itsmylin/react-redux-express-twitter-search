import React, { Component } from "react";
import PropTypes from "prop-types";

class TweetEmbed extends Component {
  loadTweetForProps(props) {
    const renderTweet = () => {
      const { options, id } = props;
      window.twttr.widgets.createTweetEmbed(
        id,
        document.getElementById(id),
        options
      );
    };
    window.twttr.widgets.load();
    renderTweet();
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
  options: {},
  protocol: "https"
};

export default TweetEmbed;
