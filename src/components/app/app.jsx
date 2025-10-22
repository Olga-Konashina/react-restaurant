import { Provider } from "react-redux";
import { Layout } from "../layout/layout";
import { RestaurantsPage } from "../restaurants-page/restaurants-page";
import { ThemeProvider } from "../theme-provider/theme-provider";
import { UserProvider } from "../user-provider/user-provider";
import "./app.css";
import { store } from "../../redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <Layout>
            <RestaurantsPage />
          </Layout>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};
