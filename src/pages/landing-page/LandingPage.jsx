import Logo from '../../static/images/logo.png';
import { useNavigate } from 'react-router-dom';
import './LandingPage.scss';
import { useEffect } from 'react';
import { getStoreData, Stores } from '../../db';

const LandingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/upload-kindle-file');

  useEffect(() => {
    async function checkStoreData() {
      const res = await getStoreData(Stores.Highlights);
      if (res.length >= 1) navigate('/dashboard');
    }
    checkStoreData();
  });

  return (
    <div className="landing-page">
      <div className="container">
        <div className="left">
          <div className="grid"></div>
        </div>
        <div className="right">
          <img src={Logo} className="logo" alt="company-logo" />
          <div className="title">Quote Book</div>
          <button
            type="button"
            className="mb-2 me-2 mt-6 w-48 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            onClick={handleClick}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
