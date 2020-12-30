import './App.css';
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <Header image="" name="Billy Person" role="Front-end developer" email="billy@example.com"
        phone="(+603)546 624 342"/>

        <Main />
    </div>
  );
}

export default App;
