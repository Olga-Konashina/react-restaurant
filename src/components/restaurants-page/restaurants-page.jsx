import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Restaurant } from "../restaurant/restaurant";

export const RestaurantsPage = () => {
  const [activeTabId, setActiveTabId] = useState(restaurants[0].id);

  return (
    <div>
      {restaurants.map((restaurant) => {
        const { id, name } = restaurant;
        return (
          <button
            key={id}
            onClick={() => {
              if (id !== activeTabId) {
                setActiveTabId(id);
              }
            }}
          >
            {name}
          </button>
        );
      })}
      <Restaurant
        restaurant={
          restaurants.filter((item) => {
            return item.id === activeTabId;
          })[0]
        }
        key={activeTabId}
      />
    </div>
  );
};
