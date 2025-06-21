import { Routes, Route } from 'react-router-dom';
import LoginPage from './Log_inPage';
import LandingPage from './LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
