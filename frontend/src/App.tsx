import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Abertura';
import Menu from './Pages/Menu';
import Header from './Components/Header';
import axios from 'axios';
import { BASE_URL } from '../src/util/request';
import { useEffect, useState } from 'react';
import { advice } from './types/advice';

function App() {

  const [slip, setSlip] = useState<advice>();

  useEffect(() => {

    axios.get(BASE_URL)
      .then(response => {
        setSlip(response.data)
      })

  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={slip && <Menu text={slip?.total_results} text2={slip?.query} text3={"####"} />} />
      </Routes>
    </Router>
  );
}

export default App
