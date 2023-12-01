import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from './utils/data.context';

const Navbar = () => {

  const [, , , , mode, changeMode] = useContext(DataContext);

  const handleThemeChange = () =>{
    changeMode();
  }

  return (
    <nav className={`nav ${mode === 'dark' ? 'dark' : 'light'}`}>
      <Link to="/" className='site-title'>DH Odonto</Link>
      <ul>
        <li>
          <Link to="/" className='home'>Inicio</Link>
        </li>
        <li>
        <Link to="/contact" className='contact'>Contacto</Link>
        </li>
        <li>
          <Link to="/favs" className='favs'>Favoritos</Link>
        </li>
      </ul>
      <button onClick={handleThemeChange}>Cambiar de tema</button>
    </nav>
  )
}

export default Navbar