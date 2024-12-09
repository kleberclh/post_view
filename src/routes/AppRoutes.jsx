import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostDetails from "../pages/PostDetails";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Layout from "../components/Layout";

function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Layout>
  );
}

export default AppRoutes;
