import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import PageContainer from "../pages/PageContainer";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PageContainer />}>
          <Route path="/home" index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
