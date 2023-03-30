import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/post";
import Header from "./components/header";

export default function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
