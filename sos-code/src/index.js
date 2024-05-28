
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu_deroulant from './Menu';
import Title from './Title';
import Header from './header';
import Main from './main';
// ReactDOM.render(<Test />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title />
    <Header />
    <Main />
);    
