import {
  INITIAL_FORM,
  SET_INITIAL,
  SET_NAME,
  SET_RATING,
  SET_TEXT,
} from "../constants/constants";

export function Reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_NAME:
      return {
        ...state,
        name: payload,
      };
    case SET_TEXT:
      return {
        ...state,
        text: payload,
      };
    case SET_RATING:
      return {
        ...state,
        rating: payload,
      };
    case SET_INITIAL:
      return INITIAL_FORM;
    default:
      return state;
  }
}
