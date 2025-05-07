import React from 'react'
import { useSelector } from 'react-redux';
import { TiWeatherPartlySunny } from "react-icons/ti";
const Forecast = () => {
    const { forecastLoading, forecastData, forecastError } = useSelector((state) => state.weather)
    console.log(forecastData?.list);
    return (
        <>
            <div className='flex items-center justify-center py-6'>
                <div className='w-48 rounded-xl flex flex-col items-center justify-center gap-2 text-white border border-white py-2'>
                    <h1 className='font-semibold text-xl'>Monday</h1>
                    <p><TiWeatherPartlySunny size={25}/></p>
                    <p className='font-semibold text-lg'>Weather</p>
                    <p className='font-medium text-lg'>33&deg;/40&deg;</p>
                </div>
            </div>
        </>
    )
}

export default Forecast
