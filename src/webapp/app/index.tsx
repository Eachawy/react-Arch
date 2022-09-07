import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { bindActionCreators } from "redux";

import getStore from 'app/config/store';
import { registerLocale } from 'app/config/translation';
import setupAxiosInterceptors from 'app/config/axios-interceptor';
import { clearAuthentication } from 'app/shared/reducers/authentication';
import AppComponent from "app/app";

const store = getStore();
registerLocale(store);

const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors(() => actions.clearAuthentication('login.error.unauthorized'));

const rootEl = document.getElementById("root");
const root = createRoot(rootEl);

const render = (Component) =>
  root.render(
    <Provider store={store}>
      <div>
        <Component />
      </div>
    </Provider>
  );

render(AppComponent);
