import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../Components/utils/data.context'
const Card = ({ name, username, id }) => {
  const [data, setData, favoritos, agregarFavorito] = useContext(DataContext);


  const addFav = ()=>{
    const cardData = {name,username,id};
    agregarFavorito(cardData);
  }
  
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
          <img src="./images/doctor.jpg" alt="doctor" className="card-image"/>
            <h4>
              {name}
              <p>{username}</p>
              
            </h4>
         
            <Link to={`/dentist/${id}`} className='detail'>ID: {id}</Link>
          
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Agregar a favoritos</button>
    </div>
  );
};

export default Card;
