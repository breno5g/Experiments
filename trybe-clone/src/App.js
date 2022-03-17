import './App.css';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <Header name="Trybe" />
      <main>
        <h2>Boas-vindas, Breno Santos Ferreira!</h2>
        <Content />
      </main>
    </>
  );
}

export default App;
