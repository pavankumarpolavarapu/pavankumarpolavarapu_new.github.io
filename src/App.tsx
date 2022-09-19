import Header from './Header';
import DarkMode from './DarkMode';
import AboutMe from './AboutMe';
import './App.css';

function App() {
  return (
    <div className="container">
      <DarkMode />
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
