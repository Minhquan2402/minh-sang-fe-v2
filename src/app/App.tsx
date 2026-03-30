import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/app/pages/home-page';
import LoginPage from '@/app/pages/login-page';
import RegisterPage from '@/app/pages/register-page';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}
