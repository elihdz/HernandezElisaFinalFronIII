import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useContext } from 'react'
import { DataContext } from '../Components/utils/data.context'


const Home = () => {
  const [data,,,,mode] = useContext(DataContext);
  useEffect(() =>{
    document.body.className = mode;
  },[mode]);
  return (
    <main className={` ${mode === 'dark' ? 'dark' : 'light'}`}>
      <h1>Home</h1>
      <div className='cards'>
        <div className='card-grid'>
          {data.map((item,index) => index <10 &&(
            <Card
              key = {item.id}
              name = {item.name}
              username = {item.username}
              id = {item.id}             
            ></Card>  
          ))}
          
        </div>   
      </div>
      
    </main>
  )
}

export default Home;