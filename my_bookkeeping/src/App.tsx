import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [koin, setKoin] = useState<number>(0);

  return (
    <>
    <Navbar koin={koin}/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/pendapatan'/>
      <Route path='/pengeluaran'/>
    </Routes>
    </>
  )
}

export default App
