import React, { useState,useEffect } from 'react';
import { UseWeatherAppContext } from '../../Context/Context';
import SingleCardComponents from '../SingleCard';
const WeekInfoCardComponents=()=>
{   let {state:{daily},dispatch}=UseWeatherAppContext();
     const [selectedCard,setselectedCard] =useState(0);
     const updatecurrent=()=>
     {
       return (
        dispatch({
            type:'SET_CURRENT',
            payload:daily[selectedCard]
        })
       ) 
     }
console.log('daily',daily) ; 
useEffect(()=>
{
    updatecurrent();
     // eslint-disable-next-line
},[daily,selectedCard])
return (
        <>
        <div className='cardwrap'>
            <ul className='cardList'>
             { 
                daily&&daily.length>0?daily.map((item,index)=>{
                    if(index<7)
                    {
                        return <SingleCardComponents key={index}item={item} className={index===selectedCard?'active':''} onClick={()=>
                        {
                       setselectedCard(index);
                       updatecurrent();
                        }}/>
                    
                    }
                    
                
                }):''
              
             }
            </ul>
        </div>  
        </>
    )
}
export default WeekInfoCardComponents;
