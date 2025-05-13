// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BMICalculator from './bmi';
import DetailPage from './detailPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BMICalculator />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
