import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import GirlsPage from './pages/GirlsPage';
import MomentsPage from './pages/MomentsPage';
import CreditsPage from './pages/CreditsPage';
import ScannerPage from './pages/ScannerPage';
import TaskPage from './pages/TaskPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/8mart" element={<Home />} />
          <Route path="/girls" element={<GirlsPage />} />
          <Route path="/moments" element={<MomentsPage />} />
          <Route path="/credits" element={<CreditsPage />} />
          <Route path="/scan" element={<ScannerPage />} />
          
          {/* Hidden task route, matching any unique slug */}
          <Route path="/:taskId" element={<TaskPage />} />
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
