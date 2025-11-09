import { useReducer } from "react";
import { SET_INITIAL, SET_RATING, SET_TEXT } from "../../constants/constants";
import { Reducer } from "../../reducer/reducer";
import { Counter } from "../counter/counter";
import styles from "./review-form.module.css";
import { Button } from "../button/button";

export const ReviewForm = ({
  initialState,
  handleFormSubmit,
  handleFormCancel,
}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const isEdit = handleFormCancel;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(state.text, state.rating);
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
    <form className={styles.form} onSubmit={handleSubmit}>
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
        <Button
          title={isEdit ? "Cancel" : "Clear"}
          onClick={
            isEdit ? handleFormCancel : () => dispatch({ type: SET_INITIAL })
          }
        />
      </div>
    </form>
  );
};
