import React from 'react'
import { useSelector } from 'react-redux';
const Forecast = () => {

    const { forecastData } = useSelector((state) => state.weather)
    const filterForecastByFirstObjTime = (forecastData) => {
        if (!forecastData) {
            return [];
        }
        const firstObjTime = forecastData[0].dt_txt.split(" ")[1];
        return forecastData.filter((data) => data.dt_txt.endsWith(firstObjTime));
    };
    const filteredForecast = filterForecastByFirstObjTime(forecastData?.list);

    if (filteredForecast.length >= 0) {
        return (
            <>
                <h4 className="text-white font-semibold text-2xl flex justify-center pb-4">
                    Next five days Forecast
                </h4>
                <div className="flex items-center justify-around flex-wrap">
                    {filteredForecast.map((item,index) => (
                        <div key={index} className='flex flex-wrap py-2 md:py-0  '>
                            <div className='w-36 rounded-xl flex bg-white/20 backdrop-blur-[4px] overflow-hidden flex-col items-center justify-center gap-2 text-white border border-white py-2'>
                                <h1 className='font-semibold text-md'>{item?.dt_txt.split(" ")[0]}</h1>
                                <div>
                                    <img
                                        src={`https://openweathermap.org/img/wn/${item?.weather[0].icon}@2x.png`}
                                    />
                                </div>
                                <p className='font-semibold text-lg'>{item?.weather[0].main}</p>
                                <p className='font-medium text-lg'>{Math.ceil(item?.main?.temp_max - 273.15)}&deg;/{Math.ceil(item?.main?.temp_min - 273.15)}&deg;</p>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    } else {
        return "No data found"
    }
}


export default Forecast
