import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Abertura';
import Menu from './Pages/Menu';
import Header from './Components/Header';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu text='####' text2='####' text3='####' />} />
      </Routes>
    </Router>
  );
}

export default App
