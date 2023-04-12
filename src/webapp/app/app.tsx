import '../content/app.scss';
import 'app/config/dayjs.ts';

import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ErrorBoundary from './shared/error/error-boundary';
import AppRoutes from './routes';


const baseHref = document.querySelector('base').getAttribute('href').replace(/\/$/, '');

export const App = () => {


  useEffect(() => { }, []);

  return (
    <BrowserRouter basename={baseHref}>
      <div className="app-container">
        <ToastContainer position={toast.POSITION.TOP_LEFT} className="toastify-container" toastClassName="toastify-toast" />
        <ErrorBoundary>
          {/* <Header
            isAuthenticated={isAuthenticated}
            isAdmin={isAdmin}
            currentLocale={currentLocale}
            ribbonEnv={ribbonEnv}
            isInProduction={isInProduction}
            isOpenAPIEnabled={isOpenAPIEnabled}
          /> */}
        </ErrorBoundary>
        <div className="container-fluid view-container" id="app-view-container">
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
          {/* <Footer /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
