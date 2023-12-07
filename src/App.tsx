import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Packages
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";
import { PrimeReactProvider } from "primereact/api";
//Components
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import LinearBackground from "./components/linearBackground/LinearBackground";
//Pages
import Home from "./pages/Home";
import GetInTouch from "./pages/GetInTouch";
import Trainings from "./pages/Trainings";
import Personal from "./pages/Personal";
import PersonalOnline from "./pages/PersonalOnline";
import Trainers from "./pages/Trainers";

function App() {
  return (
    <>
      <PrimeReactProvider>
        <Router>
          <LinearBackground />
          <AnimatePresence>
            <div className="max-w-[1250px] m-auto">
              <Nav
                tabs={[
                  { name: "Trainings", navigateTo: "/trainings" },
                  { name: "Trainers", navigateTo: "/trainers" },
                  { name: "Videos", navigateTo: "/videos" },
                  { name: "About Us", navigateTo: "/" },
                  { name: "Calendar", navigateTo: "/calendar" },
                  { name: "Get in Touch", navigateTo: "/getintouch" },
                ]}
              />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/getintouch" element={<GetInTouch />} />
                <Route path="/trainers" element={<Trainers />} />
                <Route path="/trainings" element={<Trainings />} />
                <Route path="/trainings/personal" element={<Personal />} />
                <Route
                  path="/trainings/personal/online"
                  element={<PersonalOnline />}
                />
              </Routes>
            </div>
          </AnimatePresence>
        </Router>
        <Footer />
        <ToastContainer />
      </PrimeReactProvider>
    </>
  );
}

export default App;
