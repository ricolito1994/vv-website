import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import './app/styles/index.css';
import './app/styles/vvnavbar.style.css';
import './app/styles/mainpage.mainsection.css';
import App from 'app';
import reportWebVitals from 'reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from 'app/context';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const render_element: React.ReactElement =
  (<>
    {/*<React.StrictMode>*/}
    <HelmetProvider>
      <AppContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppContextProvider>
    </HelmetProvider> 
    {/*</React.StrictMode>*/}
  </>);
root.render(render_element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
