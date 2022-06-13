// import "./App.css";
import LoginPage from "./Components/Login";
import RegisterForm from "./Components/Register";
import Navbar from "./Components/Nav";
import { Route, Routes, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import FromTo from "./Components/FromTo";
import Home from "./Components/Home";
import { Switch } from "react-router-dom";
import MyBookings from "./Components/MyBookings";
// import { toast } from "react-toastify";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/fromto" element={<FromTo />}></Route>
          <Route path="/MyBookings" element={<MyBookings />}></Route>
          {/* <Redirect strict from="/login/" to="/fromto" /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
