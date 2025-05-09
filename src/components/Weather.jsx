import React from 'react'
import { useSelector } from 'react-redux'
import { WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";
import { MdOutlineAutoGraph } from "react-icons/md";
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
const Weather = () => {

  const { citySearchData} = useSelector((state) => state.weather)

  return (
    <div>
      <div className='flex flex-col md:flex-row items-center text-white  p-4 justify-center md:gap-10 gap-4 w-full'>
        <div className='md:w-1/2 w-full flex flex-col md:px-4 md:py-2  border-white'>
          <div className=''>
            <div className='md:text-4xl text-2xl font-semibold pt-4'>
              <span className='md:text-2xl text:xl'>Weather in </span>
              <span >{citySearchData?.name}</span><span>-{citySearchData?.sys.country}</span>
            </div>
          </div>
          <div className='flex items-center '>
            <p className='text-5xl p-4 font-bold md:pl-60 pl-24'>{Math.ceil(citySearchData?.main?.temp - 273.15)}&deg;C</p>
            <div className='flex items-center flex-col' >
              <img
                src={`https://openweathermap.org/img/wn/${citySearchData?.weather[0].icon}@2x.png`}
              />
              <p>{citySearchData?.weather[0].main}</p>
            </div>
          </div>
          <div className='mt-10'>  <p>{citySearchData?.weather[0].description}</p></div>
        </div>
        <div className='md:w-1/2 w-full'>
          <div className='md:px-4 py-2'>Feels Like : <span className='text-blue-200'>{Math.ceil(citySearchData?.main?.feels_like - 273.15)}&deg;</span> </div>
          <div className='flex justify-between item w-full md:px-4 py-2'>
            <p className='flex items-center gap-3'><GoArrowUp /><span className='text-blue-200'>{Math.ceil(citySearchData?.main?.temp_max - 273.15)}&deg;</span></p>
            <div className='flex'>
              <p className='flex items-center gap-3'>
                <GoArrowDown /> <span className='text-blue-200'>{Math.ceil(citySearchData?.main?.temp_min - 273.15)}&deg;</span>
              </p>
            </div>
          </div>
          <div className='flex justify-between item w-full md:px-4 py-2'><p className='flex items-center gap-1'><WiHumidity size={20} />Humidity</p> <p className='text-blue-200'>{citySearchData?.main?.humidity}%</p></div>
          <div className='flex justify-between item w-full md:px-4 py-2'><p className='flex items-center gap-1'><LuWind size={20} />Wind Direction</p> <p className='text-blue-200'>{citySearchData?.wind?.deg}&deg;</p></div>
          <div className='flex justify-between item w-full md:px-4 py-2'><p className='flex items-center gap-1'><MdOutlineAutoGraph size={20} /> Pressure</p> <p className='text-blue-200'>{citySearchData?.wind?.speed} Kph</p></div>
        </div>
      </div>
    </div>
  )
}

export default Weather
