import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Packages
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Components
import Nav from "./components/nav/Nav";
//Pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Nav
        tabs={[
          { name: "Home", navigateTo: "/" },
          { name: "Trainings", navigateTo: "/trainings" },
          { name: "Trainers", navigateTo: "/trainers" },
          { name: "Videos", navigateTo: "/videos" },
        ]}
      />
      <Router>
        <div className="max-w-[1250px] m-auto">
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
