import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SuspenseWrapper from "./component/SuspenseWrapper/SuspenseWrapper";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import ScrollArrow from "./component/GotoTop/GotoTop";
import Pagenotfound from "./pages/Pagenotfound";



const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const App = () => {
  return (
    <>
      <Router>
        <ScrollArrow />
        <Navbar />
       <div>
       <Routes>
          <Route
            path="/"
            element={
              <SuspenseWrapper>
                <Home />
              </SuspenseWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <SuspenseWrapper>
                <About />
              </SuspenseWrapper>
            }
          />
          <Route 
          path="*"
          element={
            <SuspenseWrapper>
               <Pagenotfound />
            </SuspenseWrapper>
          }
          />
        </Routes>
       </div>
      
      </Router>
    </>
  );
};

export default App;
