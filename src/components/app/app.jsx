import { Provider } from "react-redux";
import { Layout } from "../layout/layout";
import { ThemeProvider } from "../theme-provider/theme-provider";
import { UserProvider } from "../user-provider/user-provider";
import "./app.css";
import { store } from "../../redux/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { RestaurantsLayout } from "../layouts/restaurants-layout";
import { RestaurantPage } from "../pages/restaurant-page";
import { MenuPage } from "../pages/menu-page";
import { ReviewPage } from "../pages/review-page";
import { RedirectToMenu } from "../redirect-to-menu/redirect-to-menu";
import { DishPage } from "../pages/dish-page";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<div>Restaurant home page</div>} />
                <Route path="/restaurants" element={<RestaurantsLayout />}>
                  <Route path=":restaurantId" element={<RestaurantPage />}>
                    <Route index element={<RedirectToMenu />} />
                    <Route path="menu" element={<MenuPage />} />
                    <Route path="review" element={<ReviewPage />} />
                  </Route>
                  <Route path="*" element={<div>not found</div>} />
                </Route>
                <Route path="/dish/:dishId" element={<DishPage />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};
