import { useReducer } from "react";
import {
  INITIAL_FORM,
  SET_INITIAL,
  SET_NAME,
  SET_RATING,
  SET_TEXT,
} from "../../../constants/constants";
import { Reducer } from "../../../reducer/reducer";
import { Counter } from "../../counter/counter";

export const ReviewForm = () => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_FORM);

  const increment = () => {
    if (state.rating < 5) {
      dispatch({ type: SET_RATING, payload: state.rating + 1 });
    }
  };

  const decrement = () => {
    if (state.rating > 1) {
      dispatch({ type: SET_RATING, payload: state.rating - 1 });
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(state);
        }}
      >
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
          <Counter
            value={state.rating}
            increment={increment}
            decrement={decrement}
          />
        </div>
        <>
          <button type="submit">Submit</button>
          <button onClick={() => dispatch({ type: SET_INITIAL })}>Clear</button>
        </>
      </form>
    </>
  );
};
