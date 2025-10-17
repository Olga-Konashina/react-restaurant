import { Layout } from "../layout/layout";
import { RestaurantsPage } from "../restaurants-page/restaurants-page";
import "./app.css";

export const App = () => {
  return (
    <>
      <Layout>
        <RestaurantsPage />
      </Layout>
    </>
  );
};
