import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './App.css';
// import Test from "./components/Test";

function App() {
  return (
    // <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Test />} /> */}
      </Routes>
    </Router>
    // </SkeletonTheme>
  );
}

export default App;
