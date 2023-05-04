import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Nav } from './components/Nav';
import { pages } from './constants/constants';

function App() {
  const [page, setPage] = useState(pages.home);
  return (
    <div>
      <Nav/>
      <Header/>
      <Main {...{page}}/>
      <Footer/>
    </div>
  );
}

export default App;
