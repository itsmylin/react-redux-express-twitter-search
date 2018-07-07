import axios from "axios";

import {
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_RESULT_DATA,
  SEARCH_INITIATE,
  SEARCH_LOADING,
  SORT_TWEET,
  HIDE_SPINNER
} from "./types";

export const sendQueryData = (queryData, sortMethod) => dispatch => {
  dispatch(setSearchInitiate(queryData));
  axios
    .post("/api/twitters/search", queryData)
    .then(res => {
      dispatch(clearErrors());
      dispatch({
        type: GET_RESULT_DATA,
        payload: res.data
      });
      dispatch(sortTweet(sortMethod));
      dispatch(hideSpinner());
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      dispatch(hideSpinner());
    });
};

export const changeSort = sortMethod => dispatch => {
  dispatch(sortTweet(sortMethod));
  dispatch(hideSpinner());
};

export const sortTweet = sortMethod => {
  return {
    type: SORT_TWEET,
    payload: sortMethod
  };
};

export const hideSpinner = () => {
  return {
    type: HIDE_SPINNER
  };
};

// Set initial search state
export const setSearchInitiate = queryData => {
  return {
    type: SEARCH_INITIATE,
    payload: queryData
  };
};

// Set loading state
export const setSearchLoading = () => {
  return {
    type: SEARCH_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
