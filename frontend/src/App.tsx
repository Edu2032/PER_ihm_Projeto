import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Abertura';
import Menu from './Pages/Menu';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </Router>

  );
}

export default App
