import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Income from './pages/Income';
import Expense from './pages/Expense';
import TransactionTable from './components/Table';
import TransactionChart from './pages/Chart';

function App() {
  const [koin, setKoin] = useState<number>(0);

  return (
    <>
    <Navbar koin={koin}/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/income' element={< Income />}/>
      <Route path='/expense' element={< Expense />}/>
      <Route path='/table' element={<TransactionTable />}/>
      <Route path='/chart' element={<TransactionChart />}/>
    </Routes>
    </>
  )
}

export default App
