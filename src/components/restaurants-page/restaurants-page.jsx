import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Restaurant } from "../restaurant/restaurant";

export const RestaurantsPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <button
          key={restaurant.id}
          onClick={() => {
            if (index !== activeTabIndex) {
              setActiveTabIndex(index);
            }
          }}
        >
          {restaurant.name}
        </button>
      ))}
      <Restaurant
        restaurant={restaurants[activeTabIndex]}
        key={restaurants[activeTabIndex].id}
      />
    </div>
  );
};
