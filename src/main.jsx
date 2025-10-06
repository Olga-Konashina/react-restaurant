import { createRoot } from "react-dom/client";
import { restaurants } from "./mock";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

function restaurantListCreator(restaurants) {
  return restaurants.map((restaurantItem) => (
    <div key={restaurantItem.id}>
      <h2>{restaurantItem.name}</h2>
      <h3>Menu</h3>
      <ul>
        {restaurantItem.menu.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {restaurantItem.reviews.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  ));
}

reactRoot.render(<>{restaurantListCreator(restaurants)}</>);
