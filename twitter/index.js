const Twitter = require("twitter");
const twitterConfig = require("../config/server.config").twitterConfig;
const twitterClient = Twitter(twitterConfig);

module.exports = twitterClient;
