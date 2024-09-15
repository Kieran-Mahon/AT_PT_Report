import { useState } from 'react';

import AppNavBar from "./components/Navbar/NavBar";
import Info from './pages/Info';
import Reports from './pages/Reports';

export default function App() {
  //Active page control
  const [activePage, setActivePage] = useState('info');
  const renderPage = () => {
    switch (activePage) {
      case 'info':
        return <Info />;
      case 'reports':
        return <Reports />;
      default:
        return <Info />;
    }
  };

  //Got to a different website code
  const redirectToSite = (site) => {
    window.location.href = site;
  };

  return (
    <>
      <div className="App">
        <AppNavBar setActivePage={setActivePage} redirectToSite={redirectToSite} />
        {renderPage()}
      </div>
    </>
  );
}
