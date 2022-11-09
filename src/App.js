import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Routes/routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
          <Navbar />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
          <Footer />
      </Router>
      
    </div>
  );
}

export default App;
