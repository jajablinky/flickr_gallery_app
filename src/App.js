import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import { Key } from 'react';
import Photos from './components/Photos';
import Nav from './components/Nav';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="Container">
      <Nav />
      <Routes>
        <Route path='/photos' element={<Photos />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
