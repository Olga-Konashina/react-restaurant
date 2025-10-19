import { useContext } from "react";
import { Counter } from "../counter/counter";
import { Menu } from "../menu/menu";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import { UserContext } from "../user-provider";
import styles from "./restaurant.module.css";

export const Restaurant = ({ name, menu, reviews }) => {
  const { user } = useContext(UserContext);

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2 className={styles.h}>{name}</h2>
      {Boolean(menu.length) && <Menu menu={menu} />}
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
      {user && <ReviewForm />}
    </div>
  );
};
