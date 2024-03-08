import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/landing-page/LandingPage";
import KindleFileUpload from "./pages/kindle-file-upload/KindleFileUpload";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<LandingPage />}/>
          <Route path="/upload-kindle-file" element={<KindleFileUpload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
