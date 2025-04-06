import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Siderbar from "./componentes/Siderbar";
import "./App.css";
import CeratePost from "./componentes/CeratePost";
import PostList from "./componentes/PostList";
import { useState } from "react";
import PostListProvider from "./store/Post-list-store";
import { Route, Routes } from "react-router-dom";

function App() {
  const [seletedTap, setSeletedTap] = useState("Home");
  const [isOpen, setIsopen] = useState("close");
  return (
    <PostListProvider>
      <div className="my-main">
        <Siderbar
          seletedTap={seletedTap}
          isOpen={isOpen}
          setIsopen={setIsopen}
          setSeletedTap={setSeletedTap}
        />
        <div className="hadFod">
          <Header setIsopen={setIsopen} />
          <Routes>
            <Route index element={<PostList />} />
            <Route path="/creactePoste" element={<CeratePost />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
