import { GoogleLogin } from "@react-oauth/google";
import Logo from "../../static/images/logo.png"
import "./LandingPage.scss"
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/upload-kindle-file');

	return (
    <div className="landing-page">
      <div className="left">
        <div class="grid"></div>
      </div>
      <div className="right">
        <img src={Logo} className="logo" alt="company-logo" />
        <div className="title">Quote Book</div>
        <button type="button" class="py-2.5 px-5 me-2 mt-6 w-48 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={handleClick}>Get Started</button>
      </div>
    </div>
    )
};

export default LandingPage;