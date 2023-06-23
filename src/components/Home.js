import React from 'react'
import ChooseStatecomponents from './ChooseState';
import WeekInfoCardComponents from './WeekInfoCard';
import HumidityComponent from './Humidity';
import LeftComponent from './Left';
const Homecomponents=()=> {
  return (
    <>
    <div className='homeWrap'>
    <div className='weatherSection'>
    <LeftComponent/>
 <div className='rightSide'>
     <ChooseStatecomponents/>
     <WeekInfoCardComponents/>
      <HumidityComponent/>
      

 </div>
    </div>
    </div>
 </>
  )
}
export default Homecomponents;

// 34480b98aa332da53123a0ac63a4ea9d weather api key
// 34480b98aa332da53123a0ac63a4ea9d
// https://home.openweathermap.org/api_keys



// https://simplemaps.com/data/in-cities
// https://openweathermap.org/
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// https://api.openweathermap.org/data/3.0/onecall?lat=20&lon=85&appid=34480b98aa332da53123a0ac63a4ea9d