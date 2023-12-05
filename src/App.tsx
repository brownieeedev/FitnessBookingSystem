import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Packages
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Components
import Nav from "./components/nav/Nav";
import LinearBackground from "./components/linearBackground/LinearBackground";
//Pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <LinearBackground />
        <div className="max-w-[1250px] m-auto">
          <Nav
            tabs={[
              { name: "Trainings", navigateTo: "/trainings" },
              { name: "Trainers", navigateTo: "/trainers" },
              { name: "Videos", navigateTo: "/videos" },
              { name: "About Us", navigateTo: "/" },
              { name: "Get in Touch", navigateTo: "/getintouch" },
            ]}
          />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
