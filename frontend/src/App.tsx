import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Abertura';
import Menu from './Pages/Menu';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu text='####' text2='####' text3='####'/>} />
      </Routes>
    </Router>
  );
}

export default App
