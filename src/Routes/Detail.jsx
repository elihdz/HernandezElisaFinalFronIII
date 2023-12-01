
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from "react-router-dom";


const Detail = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  
  useEffect(() => { 
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch((error) => console.error("Error"))
  }, [id]);


  // Armamos una condicional para manejar los casos en que el usuario buscado no exista.
  if (!data) return <h1>No se encontró el usuario</h1>

  return (
    <div>
      <h1> Detalle del profesional {data.id} </h1>
      <p>Nombre: {data.name}</p>
      <p>email: {data.email}</p>
      <p>Telefono: {data.phone}</p>
      <p>Pagina web: {data.website}</p>
    </div>
  )
}
export default Detail;