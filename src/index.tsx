import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Waves from "node-waves";
import "node-waves/dist/waves.css";
import "prism-themes/themes/prism-vsc-dark-plus.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

Waves.attach(".btn");
Waves.attach(".ripple");
Waves.init();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// (function(d) {
//   const stylizePreElements = function() {
//     var preElements = d.getElementsByTagName("pre");
//     for (let i = 0; i < preElements.length; ++i) {
//       var preElement = preElements[i];
//       preElement.className += "prettyprint";
//     }
//   };

//   const injectPrettifyScript = function() {
//     var scriptElement = d.createElement('script');
//     scriptElement.setAttribute("src", "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js");
//     d.head.appendChild(scriptElement);
//   };

//   stylizePreElements();
//   injectPrettifyScript();

// })(document)