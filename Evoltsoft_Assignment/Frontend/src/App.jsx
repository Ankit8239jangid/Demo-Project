import { Route, Routes } from "react-router-dom";

import Home_page from "./components/Layout_page/Home_page";
import SignupCard from "./components/AUth_Page/SignUp_page";
import ProtectedRoute from "./components/AUth_Page/ProtectedRout";
import Charger_Listing_Page from "./components/Charger_Listing_Page/Charger_Listing_Page";
import EvMap_page from "./components/UI/Ev_Station_map";
import ChargerForm from "./components/UI/ChargerForm";
import LoginCard from "./components/AUth_Page/Login_Page";


function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<SignupCard />} />
      <Route path="/login" element={<LoginCard />} />

      {/* Protected Routes */}
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <Home_page />
          </ProtectedRoute>}
      >
        {/* Nested Routes inside Home_page */}
        <Route index element={<Charger_Listing_Page />} />
        <Route path="Map" element={<EvMap_page />} />
        <Route path="Add" element={<ChargerForm />} />
      </Route>
    </Routes>
  );
}

export default App;
