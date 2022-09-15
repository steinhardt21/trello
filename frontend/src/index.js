import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import Landing from './Landing/Landing';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}/>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
