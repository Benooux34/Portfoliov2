import './App.css';
import Home from './components/Home/Home'
import TopBar from './components/Header/Topbar'
import Menu from './components/Menu/Menu'
import { useState } from 'react'
function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}  />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home /> 
    </div>
  );

}

export default App;
