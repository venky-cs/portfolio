import Header from './components/Header'
import Main from './components/Main'
import Section from './components/Section'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header image="https://biomedicalodyssey.blogs.hopkinsmedicine.org/files/2020/02/programming-code-window-GettyImages-1124838925_640.jpg" name="Billy Person" role="Front-end developer" email="billy@example.com"
        phone="(+603)546 624 342"/>

        <Main />

        <Section />

        <footer>
          <p>venky-cs @ DevChallengers.io</p>
        </footer>
    </div>
  );
}

export default App;
