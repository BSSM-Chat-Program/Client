import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DM from './pages/DM';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dm" element={<DM />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
