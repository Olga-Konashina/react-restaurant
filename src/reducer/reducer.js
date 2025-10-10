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
        ...INITIAL_FORM,
        name: payload.name,
      };
    case SET_TEXT:
      return {
        ...state,
        text: payload.text,
      };
    case SET_RATING:
      return {
        ...state,
        rating: payload.rating,
      };
    case SET_INITIAL:
      return INITIAL_FORM;
    default:
      return state;
  }
}
