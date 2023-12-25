import {
  Route,
  Routes as ReactRouterRoutes,
} from "react-router-dom";
import App from "../App";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import TogglePage from "../pages/Toggle/TogglePage";
import ButtonPage from "../pages/Button/ButtonPage";

const Routes = () => {

  return (
    <ReactRouterRoutes>
      <Route path="/" element={<App />}>
        <Route index element={<DashboardPage />} />
        <Route path="/components/toggle" element={<TogglePage />} />
        <Route path="/components/button" element={<ButtonPage />} />
      </Route>
    </ReactRouterRoutes>
  );
};
export default Routes;
