import { Layout } from "../layout/layout";
import { RestaurantsPage } from "../restaurants-page/restaurants-page";
import { ThemeProvider } from "../theme-provider/theme-provider";
import { UserProvider } from "../user-provider/user-provider";
import "./app.css";

export const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Layout>
          <RestaurantsPage />
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
};
