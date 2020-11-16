import React from 'react';
import './griding.css';

export default function Movie(prop){
    
     const imgstyle ={
          width:"150px",
          height:"auto",
          marginLeft:"10px"
     }


     return(
        
        <div className="griding">
            <img src={prop.movie.poster} style={imgstyle}/>
            <div className="text-center pb-4 title">
                {prop.movie.title}
            </div>
        </div>
   
     )
}