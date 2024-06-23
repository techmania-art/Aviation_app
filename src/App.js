import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './Components/Details';
import Faq from './Components/Faq';
import Features from './Components/Features';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Details/>}/>
      <Route path='/faq' element={<Faq/>}/> 
      <Route path='/features' element={<Features/>}/>     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
