import { useState,useEffect  } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Pokemon from './components/Pokemon';

function App() {

  const[pokeId,setPokeId] = useState(Math.floor(Math.random() * 900) + 5)
  
    
  // random pokemon id
  const loadPokemon = () => {
      setPokeId(Math.floor(Math.random() * 900) + 5)
  }

  // start auto
  useEffect(() => {
    loadPokemon()
  }, []);
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pokemon pokeId={pokeId} setPokeId={setPokeId}></Pokemon>
      <button onClick={() => loadPokemon()}> New Pokemon</button>
      
    </div>
  );
}

export default App;
