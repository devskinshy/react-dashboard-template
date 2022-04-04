// scroll bar
import 'simplebar/dist/simplebar.min.css';

// editor
import 'react-quill/dist/quill.snow.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

// -
import React from 'react';
import ReactDOM from 'react-dom';

// -
import App from './App';
import reportWebVitals from './reportWebVitals';

// -
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Provider as ReduxProvider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter} from "react-router-dom";

// -
import {TITLE} from "./configs";
import {store, persistor} from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
