import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import KindleFileUpload from "./pages/kindle-file-upload/KindleFileUpload";
import "./App.scss";
import Highlights from "./pages/dashboard/Highlights";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/upload-kindle-file" element={<KindleFileUpload />} />
          <Route path="/dashboard" element={<Highlights />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
