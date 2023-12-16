import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Packages
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";
import { PrimeReactProvider } from "primereact/api";
//Components
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
// import LinearBackground from "./components/linearBackground/LinearBackground";
import WidthRestrictionElement from "./components/widthRestriction/WidthRestrictionElement";
//Pages
import Home from "./pages/Home";
import GetInTouch from "./pages/GetInTouch";
import Trainings from "./pages/Trainings";
import Personal from "./pages/Personal";
import PersonalOnline from "./pages/PersonalOnline";
import Trainers from "./pages/Trainers";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TrainerPage from "./pages/TrainerPage";
import TrainerLogin from "./pages/trainer/TrainerLogin";

function App() {
  return (
    <>
      <PrimeReactProvider>
        <Router>
          {/* <LinearBackground /> */}
          <AnimatePresence>
            <Nav
              tabs={[
                { name: "Trainings", navigateTo: "/trainings" },
                { name: "Trainers", navigateTo: "/trainers" },
                { name: "Videos", navigateTo: "/videos" },
                { name: "About Us", navigateTo: "/" },
                { name: "Get in Touch", navigateTo: "/getintouch" },
                { name: "My Trainer Page", navigateTo: "/mytrainerpage" },
                { name: "Trainer Login", navigateTo: "/trainerlogin" },
                { name: "Login", navigateTo: "/login" },
              ]}
            />
            <Routes>
              <Route element={<WidthRestrictionElement />}>
                <Route path="/" element={<Home />} />
                <Route path="/getintouch" element={<GetInTouch />} />
                <Route path="/trainers" element={<Trainers />} />
                <Route path="/trainings" element={<Trainings />} />
                <Route path="/trainings/personal" element={<Personal />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/trainings/online" element={<PersonalOnline />} />
              </Route>
              <Route path="/mytrainerpage" element={<TrainerPage />} />
              <Route
                path="/login"
                element={<LoginPage companyName="LondonFitness" />}
              />
              <Route
                path="/trainerlogin"
                element={<TrainerLogin companyName="LondonFitness" />}
              />
            </Routes>
          </AnimatePresence>
        </Router>
        <Footer />
        <ToastContainer />
      </PrimeReactProvider>
    </>
  );
}

export default App;
