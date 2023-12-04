import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components

//Pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>>
        </Routes>
      </Router>
    </>
  );
}

export default App;
