import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM for rendering
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/reg';
import Ani from './Components/ani';
import Cosmetics from './Components/cosmetics';
import Kurti from './Components/kurti';
import Lehanga from './Components/lehanga';
import Saranya from './Components/saranya';
import Sarees from './Components/sarees';
import Scarve from './Components/scarve';
import WomenWare from './Components/womenWare';
import HomePage from './Components/HomePage'; // Import the homepage component

const App = () => (
  <Router>
    <Routes>
      {/* Define the homepage route */}
      <Route path="/" element={<HomePage />} />

      {/* Other routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ani" element={<Ani />} />
      <Route path="/cosmetics" element={<Cosmetics />} />
      <Route path="/kurti" element={<Kurti />} />
      <Route path="/lehanga" element={<Lehanga />} />
      <Route path="/saranya" element={<Saranya />} />
      <Route path="/sarees" element={<Sarees />} />
      <Route path="/scarve" element={<Scarve />} />
      <Route path="/womenware" element={<WomenWare />} />
    </Routes>
  </Router>
);

// Use ReactDOM to render the App component
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
