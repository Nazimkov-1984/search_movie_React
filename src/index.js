import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import btnAction from './modules/btnAction';
import reportWebVitals from './reportWebVitals';
import Header from './component/header';
import Form from './component/form';
import Footer from './component/footer';
import Content from './component/content';



ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Form/>
    <Content/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
btnAction();
reportWebVitals();
