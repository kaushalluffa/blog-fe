import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AuthorPage from "./components/Author/Author";
import BlogListing from "./components/BlogListing/BlogListing";
import HomePage from "./components/Homepage/HomePage";
import SinglePost from "./components/SinglePost/SinglePost";
// import Navigation from "./components/shared/Navigation";
// import Footer from "./components/shared/Footer";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
  return (
    <>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog-listing" element={<BlogListing />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/author/:authorId" element={<AuthorPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
