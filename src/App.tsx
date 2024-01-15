import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import BlogListing from "./components/BlogListing/BlogListing";
import Navigation from "./components/shared/Navigation/Navigation";
import Footer from "./components/shared/Footer/Footer";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog-listing" element={<BlogListing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
