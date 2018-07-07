const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateSearchInput(data) {
  let errors = {};

  if (isEmpty(data.hashtags)) {
    errors.hashtags = "At least submit one hashtag";
  }

  if (!Validator.isInt(data.count)) {
    errors.count = "Number must be integer";
  }

  if (isEmpty(data.count)) {
    errors.count = "Must indicate the number of tweets should be displayed";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
