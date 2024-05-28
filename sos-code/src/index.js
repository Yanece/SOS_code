import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu_deroulant from './Menu';
import Title from './Title';
import Header from './Header';
import Main from './Main';
// ReactDOM.render(<Test />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title />
    <Header />
    <Main />
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
