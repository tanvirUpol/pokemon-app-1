import './Navbar.css'
const Navbar = () => {
    return ( 
        <div className='navbar'>
            <nav className="links flex">
                <a rel="noreferrer" target="_blank"  href="https://pokeapi.co/" className='flex'>
                    <img src="/images/pokeball-pokemon-svgrepo-com.svg" alt="" />
                    <p>Pokemon API</p>
                </a>
                
                <a rel="noreferrer" target="_blank"  href='https://github.com/tanvirUpol' className='flex'>
                    <img src="/images/github-svgrepo-com (1).svg" alt="" />
                    <p>My Github</p>
                </a>
                
            </nav>
        </div>
            
     );
}
 
export default Navbar;