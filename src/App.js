import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Routes/routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { SearchDataProvider } from "./context/SearchContext";
import { CartDataProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/UnAuthCart";

function App() {

  return (
    <div>
      <Router>
        <UserProvider>
          <CartProvider>
            <CartDataProvider>
              <SearchDataProvider>
                <Navbar />
                <Routes>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.component}
                    />
                  ))}
                </Routes>
                <Footer />
              </SearchDataProvider>
            </CartDataProvider>
          </CartProvider>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
