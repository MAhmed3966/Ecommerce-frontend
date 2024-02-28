import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'
import dotenv from "dotenv";

// dotenv.config();
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <Router>
        <ToastContainer position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        transition: Bounce
        />
        <App/>
    </Router>
</React.StrictMode>,)
