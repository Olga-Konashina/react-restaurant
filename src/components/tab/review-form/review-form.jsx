import { useReducer } from "react";
import {
  INITIAL_FORM,
  SET_INITIAL,
  SET_NAME,
  SET_RATING,
  SET_TEXT,
} from "../../../constants/constants";
import { Reducer } from "../../../reducer/reducer";

export const ReviewForm = () => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_FORM);

  return (
    <>
      <form onSubmit={() => e.preventDefault()}>
        <div>
          <label>name</label>
          <input
            value={state.name}
            onChange={(event) => {
              dispatch({ type: SET_NAME, payload: event.target.value });
            }}
          />
        </div>
        <div>
          <label>text</label>
          <input
            value={state.text}
            onChange={(event) => {
              dispatch({ type: SET_TEXT, payload: event.target.value });
            }}
          />
        </div>
        <div>
          <label>rating</label>
          <input
            value={state.rating}
            onChange={(event) => {
              dispatch({ type: SET_RATING, payload: event.target.value });
            }}
          />
        </div>
      </form>
      <>
        <button type="submit">Submit</button>
        <button onClick={() => dispatch({ type: SET_INITIAL, payload: null })}>
          Clear
        </button>
      </>
    </>
  );
};
