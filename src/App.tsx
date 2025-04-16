import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import DM from './pages/dm/DM';
import OAuthCallback from './pages/OAuthCallback.tsx';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './hooks/useAuth';

function App() {
  useAuth(); // 새로고침 시 user 상태 복구

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/oauth2/callback" element={<OAuthCallback />} />
        <Route
          path="/dm"
          element={
            <ProtectedRoute>
              <DM />
            </ProtectedRoute>
          }
          // element={<DM />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
