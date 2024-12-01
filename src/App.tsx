import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className={styles.app}>
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
}

export default App;