import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Result from './pages/Result';
import Predict from './pages/Predict';
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;