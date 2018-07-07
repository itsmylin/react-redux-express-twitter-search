if (process.env.NODE_ENV == "production") {
  module.exports = require("./server.config.production");
} else {
  module.exports = require("./server.config.development");
}
