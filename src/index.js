import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { DarkModeContextProvider} from "./context/darkModeCtx";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <DarkModeContextProvider>
    <App />
    </DarkModeContextProvider>,
  document.getElementById('root')
);

// reportWebVitals();
