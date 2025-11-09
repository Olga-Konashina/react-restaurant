import { useReducer } from "react";
import {
  INITIAL_FORM,
  SET_INITIAL,
  SET_NAME,
  SET_RATING,
  SET_TEXT,
} from "../../constants/constants";
import { Reducer } from "../../reducer/reducer";
import { Counter } from "../counter/counter";
import styles from "./review-form.module.css";
import { Button } from "../button/button";
import { useAddReviewMutation } from "../../redux/services/api";

export const ReviewForm = ({ id, userId }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_FORM);

  const [addReview, { isLoading }] = useAddReviewMutation();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addReview({ restaurantId: id, review: { ...state, userId } });
  };

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
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div>
        <label className={styles.label}>text</label>
        <input
          className={styles.input}
          value={state.text}
          onChange={(event) => {
            dispatch({ type: SET_TEXT, payload: event.target.value });
          }}
        />
      </div>
      <div>
        <label className={styles.label}>rating</label>
        <Counter
          value={state.rating}
          increment={increment}
          decrement={decrement}
        />
      </div>
      <div className={styles.buttonPanel}>
        <Button title="Submit" type="submit" />
        <Button title="Clear" onClick={() => dispatch({ type: SET_INITIAL })} />
      </div>
    </form>
  );
};
