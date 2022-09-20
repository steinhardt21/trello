import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import ROUTES, { RenderRoutes } from "./routes"
import './index.css';

export default function App() {
  return(
    <BrowserRouter>
      {RenderRoutes({routes: ROUTES}) }
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
