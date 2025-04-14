import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DM from './pages/dm/DM';
import Login from './pages/login/Login';

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
