import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/global.css'
import "tailwindcss/tailwind.css"

const container = document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

reportWebVitals();
