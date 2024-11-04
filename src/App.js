import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";

import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";

import { useFavorites } from "./util-hooks/useFavorites";
import { PATHS } from "./utils/constants";

function App() {
  const { favorites, addFavorite, removeFavorite, checkIsFavorite } =
    useFavorites();

  return (
    <Router>
      <MainNavigation favorites={favorites} />
      <Layout>
        <Routes>
          <Route
            path={PATHS.ALL_MEETUPS}
            element={
              <AllMeetupsPage
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                checkIsFavorite={checkIsFavorite}
              />
            }
          />
          <Route
            path={PATHS.FAVORITES}
            element={
              <FavoritesPage
                favorites={favorites}
                removeFavorite={removeFavorite}
              />
            }
          />
          <Route path={PATHS.NEW_MEETUP} element={<NewMeetupsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
