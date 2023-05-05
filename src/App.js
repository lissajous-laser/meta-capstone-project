import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Nav } from './components/Nav';
import { pages } from './constants/constants';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [page, setPage] = useState(pages.home);
  return (
    <BrowserRouter>
      <Nav/>
      <Header/>
      <Main {...{page}}/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
