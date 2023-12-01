import React,{useContext} from "react";
import Card from "../Components/Card";
import { DataContext } from "../Components/utils/data.context";



const Favs = () => {
  const [data,setData,favoritos,setFavoritos, mode] = useContext(DataContext);
  return (

  <main className={` ${mode === 'dark' ? 'dark' : 'light'}`}>


      <h1>Favoritos</h1>
      <div className={'card-grid'}>  
        {
          favoritos.map((favoritos,index) =>(
            <Card
              key={index} {...favoritos}
            ></Card>
          ))
        }

      </div>

  </main>
  );
};

export default Favs;
