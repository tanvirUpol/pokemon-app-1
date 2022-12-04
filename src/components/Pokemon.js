
import './Pokemon.css'
import { useState,useEffect } from "react";

const Pokemon = ({pokeId}) => {
    const [pokemon,setPokemon] = useState(null)

   

    
    useEffect(() => {
        const fetchPokemon = async () =>{
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
            const data = await res.json();
            setPokemon(data)
        }

        fetchPokemon();
    }, [pokeId]);
    
    
    

    return ( 
        <div className='container'>
            <div className="poke-card">
                
                 {pokemon && <p>{pokemon.name}</p>}
                 {pokemon && <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />}
            </div>
        </div> 
    );
}
 
export default Pokemon;