import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Invoices from './components/Invoices';
import Expenses from './components/Expenses';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<App />}>

          <Route path="/invoices" element={<Invoices />}>
            <Route path="/invoices/123" element={<div>SUB INVOICE ROUTE</div>} />
          </Route>
          
          <Route path="/expenses" element={<Expenses />}>
            <Route path="/expenses/subroute" element={<div>SUB EXPENSES ROUTE</div>} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
);

