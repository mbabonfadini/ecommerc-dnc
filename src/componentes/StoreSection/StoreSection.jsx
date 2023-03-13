import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'

const StoreSection = ({data}) => {
  return (


    <div className='home__card'>
        
    <img src={data.imgPath}></img>  
   
    <div className='card__titles'>
        <p>{data.title}</p>
        <button><Link to={`/produto/${data.id}`}>Ver Mais</Link></button>
                        
              
                
                        

                          
                        
</div>
</div>
  )
}

export default StoreSection