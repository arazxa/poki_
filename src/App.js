import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/post";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
