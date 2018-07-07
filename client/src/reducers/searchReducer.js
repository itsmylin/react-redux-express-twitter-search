import {
  GET_RESULT_DATA,
  SEARCH_INITIATE,
  SEARCH_LOADING,
  SORT_TWEET,
  HIDE_SPINNER
} from "../actions/types";
import sortMethods from "../utils/sortMethods";

const initialState = {
  query: {},
  tweets: [],
  isSuccess: false,
  loading: false,
  sort: "date"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RESULT_DATA:
      return {
        ...state,
        tweets: action.payload,
        isSuccess: true
      };
    case SEARCH_INITIATE:
      return {
        ...initialState,
        query: action.payload,
        loading: true
      };
    case SEARCH_LOADING:
      return {
        ...state,
        loading: true
      };
    case SORT_TWEET:
      return {
        ...state,
        tweets: state.tweets.sort(sortMethods[action.payload]),
        sort: action.payload,
        loading: true
      };
    case HIDE_SPINNER:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
