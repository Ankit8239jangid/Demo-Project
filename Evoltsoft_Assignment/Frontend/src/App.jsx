import { Route, Routes } from "react-router-dom";

import LoginCard from "./components/Auth_Page/Login_Page";
import Home_page from "./components/Home_page/Home_page";
import SignupCard from "./components/AUth_Page/SignUp_page";
import ProtectedRoute from "./components/AUth_Page/ProtectedRout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<SignupCard />} />
      <Route path="/login" element={<LoginCard />} />

      {/* Protected Route */}
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <Home_page />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
