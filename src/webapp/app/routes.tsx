import React from 'react';
import { Route } from 'react-router-dom';


import Home from 'app/modules/home';
// import PrivateRoute from 'app/shared/auth/private-route';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
// import PageNotFound from 'app/shared/error/page-not-found';
// import { AUTHORITIES } from 'app/config/constants';

const AppRoutes = () => {
    return (
        <div className="view-routes">
            <ErrorBoundaryRoutes>
                <Route index element={<Home />} />
                {/* <Route path="login" element={<Home />} /> */}
                {/* <Route path="account">
                    <Route
                        path="*"
                        element={
                            <PrivateRoute hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]}>
                                <Account />
                            </PrivateRoute>
                        }
                    /> */}
                {/* <Route path="*" element={<PageNotFound />} /> */}
            </ErrorBoundaryRoutes>
        </div>
    );
};

export default AppRoutes;
