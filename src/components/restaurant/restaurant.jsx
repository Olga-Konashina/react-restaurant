import { Counter } from "../counter/counter";
import { Menu } from "../menu/menu";
import { ReviewForm } from "../tab/review-form/review-form";
import { Reviews } from "./reviews/reviews";

export const Restaurant = ({ name, menu, reviews }) => {
  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      {Boolean(menu.length) && <Menu menu={menu} />}
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
      <ReviewForm />
    </div>
  );
};
