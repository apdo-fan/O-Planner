import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/pages/Loading";
import Navigation from "./components/UI/Navigation";
import Main from "./components/pages/Main";

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/" element={<Loading />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
