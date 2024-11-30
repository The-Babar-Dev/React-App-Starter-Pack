import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

function App() {
  return (
    <div>
      {/* {loader && <Loader />} */}

      {/* {location.pathname !== "/login" && (
        <Header setSideDrawerOpened={setSideDrawerOpened} />
      )} */}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Auth />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
