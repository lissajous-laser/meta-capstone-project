import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Nav } from './components/Nav';

function App() {
  return (
    <div>
      <Header>Homepage</Header>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
