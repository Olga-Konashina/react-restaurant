import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Restaurant } from "../restaurant/restaurant";
import { Tab } from "../tab/tab";

export const RestaurantsPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );

  return (
    <div key="RestaurantsPage">
      {restaurants.map(({ id, name }) => (
        <Tab
          key={id}
          title={name}
          isActive={id === activeRestaurantId}
          onClick={() => {
            if (id !== activeRestaurantId) {
              setActiveRestaurantId(id);
            }
          }}
        />
      ))}
      <Restaurant
        name={activeRestaurant.name}
        menu={activeRestaurant.menu}
        reviews={activeRestaurant.reviews}
        key={activeRestaurantId}
      />
    </div>
  );
};
