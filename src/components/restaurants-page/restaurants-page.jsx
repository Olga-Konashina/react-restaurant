import { useState } from "react";
import { Restaurant } from "../restaurant/restaurant";
import styles from "./restaurant-page.module.css";
import { Button } from "../button/button";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurants/slice";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import { RestaurantContainer } from "../restaurant/restaurant-container";

export const RestaurantsPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0]
  );

  return (
    <>
      <div key="RestaurantsPage">
        <div className={styles.tabPanel}>
          {restaurantIds.map((id) => (
            <RestaurantTab
              key={id}
              id={id}
              disabled={id === activeRestaurantId}
              onClick={() => {
                if (id !== activeRestaurantId) {
                  setActiveRestaurantId(id);
                }
              }}
            />
          ))}
        </div>
        {activeRestaurantId && (
          <RestaurantContainer
            key={activeRestaurantId}
            id={activeRestaurantId}
          />
        )}
      </div>
    </>
  );
};
