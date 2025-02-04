import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import PageContainer from "../pages/PageContainer";
import PresalePage from "../pages/PresalePage";
import StakingPage from "../pages/StakingPage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PageContainer />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/home" index element={<HomePage />} />
          <Route path="/staking" index element={<StakingPage />} />
          <Route path="/presale" index element={<PresalePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
