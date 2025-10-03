import { createRoot } from "react-dom/client";
import { restaurants } from "./mock";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

function restaurantListCreator(restaurants) {
  const restaurantArr = [];
  restaurants.forEach((restaurantItem) => {
    const { id, name, menu, reviews } = restaurantItem;
    restaurantArr.push(
      <div key={id}>
        <h2>{name}</h2>
        <h3>Menu</h3>
        <ul key="menu">
          {menu.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <h3>Reviews</h3>
        <ul key="reviews">
          {reviews.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    );
  });
  return restaurantArr;
}

reactRoot.render(<>{restaurantListCreator(restaurants)}</>);
