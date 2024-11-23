import App from './App.jsx'
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root"))