import React, { Component } from "react";
import PropTypes from "prop-types";

const callbacks = [];

function addScript(src, cb) {
  if (callbacks.length === 0) {
    callbacks.push(cb);
    var s = document.createElement("script");
    s.setAttribute("src", src);
    s.onload = () => callbacks.forEach(cb => cb());
    document.body.appendChild(s);
  } else {
    callbacks.push(cb);
  }
}

class TweetEmbed extends Component {
  loadTweetForProps(props) {
    const renderTweet = () => {
      window.twttr.ready().then(({ widgets }) => {
        const { options, id } = props;
        widgets.createTweetEmbed(id, document.getElementById(id), options);
      });
    };

    if (!(window.twttr && window.twttr.ready)) {
      const isLocal = window.location.protocol.indexOf("file") >= 0;
      const protocol = isLocal ? this.props.protocol : "";

      addScript(`${protocol}//platform.twitter.com/widgets.js`, renderTweet);
    } else {
      renderTweet();
    }
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
