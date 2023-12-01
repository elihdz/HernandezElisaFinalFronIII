import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();




export const DataProvider =  (props) => {
    const [data,setData] = useState([]);
    const [favoritos, setFavoritos] = useState([]);
    const[mode,setMode] = useState("light");

    const getData = async() => {
        const data = await fetch('Https://jsonplaceholder.typicode.com/users');
        const datosApi = await data.json();
        setData(datosApi);
    }
    const agregarFavorito = (favorito) => {
        const nuevosFavoritos = [...favoritos,favorito];
        setFavoritos(nuevosFavoritos);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }
    const changeMode = () =>{
        const newMode = (mode === 'light') ? 'dark' : 'light';
        setMode(newMode);
        localStorage.setItem('mode', newMode);
    }

    useEffect(() =>{
        getData();
        const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos'));
        const savedMode = localStorage.getItem('mode');
        if (favoritosGuardados){
            setFavoritos(favoritosGuardados)
        }

    }, []);
    return(
        <DataContext.Provider value={[data, setData, favoritos, agregarFavorito, mode, changeMode]}>
            {props.children}
        </DataContext.Provider>
    )
}