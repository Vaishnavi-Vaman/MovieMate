import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import AddMedia from './pages/AddMedia';
import MediaDetail from './components/MediaDetail';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App(){
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddMedia />} />
          <Route path="/media/:id" element={<MediaDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
