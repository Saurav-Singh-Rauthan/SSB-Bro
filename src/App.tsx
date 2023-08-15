import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import WrapperWithNavbar from "./components/containers/WrapperWithNavbar/WrapperWithNavbar";
import Home from "./pages/home/home";
import NotFound from "./pages/404/404";
import Explore from "./pages/explore/explore";
import About from "./pages/about/about";
import Courses from "./pages/courses/courses";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync">
      <Routes location={location} key={location.key}>
        <Route element={<WrapperWithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
