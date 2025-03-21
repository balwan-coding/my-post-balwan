import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Siderbar from "./componentes/Siderbar";
import "./App.css";
import CeratePost from "./componentes/CeratePost";
import PostList from "./componentes/PostList";
import { useState } from "react";
import PostListProvider from "./store/Post-list-store";

function App() {
  const [seletedTap, setSeletedTap] = useState("Home");
  const [isOpen, setIsopen] = useState("close");
  return (
    <PostListProvider>
      <div className="main">
        <Siderbar
          seletedTap={seletedTap}
          isOpen={isOpen}
          setIsopen={setIsopen}
          setSeletedTap={setSeletedTap}
        />
        <div className="hadFod">
          <Header setIsopen={setIsopen} setSeletedTap={setSeletedTap} />
          {seletedTap === "Home" ? <PostList /> : <CeratePost />}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
