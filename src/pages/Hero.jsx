import React, { useState, useEffect } from 'react'
import Weather from '../components/Weather'
import { useSelector } from 'react-redux'
import Loading from '../components/Loading'
const Hero = () => {
    const { citySearchLoading, citySearchData, citySearchError, forecastLoading, forecastData, forecastError } = useSelector((state) => state.weather)
    const [loadings, setLoadings] = useState(true);

    const allLoadings = [citySearchLoading];
    useEffect(() => {
        const isAnyChildLoading = allLoadings.some((state) => state);
        setLoadings(isAnyChildLoading);
    }, [allLoadings]);

    if (loadings) {
        return <div className='flex items-center justify-center h-screen'>
            <Loading />
        </div>
    } else {
       if (citySearchError) {
        return "eroor"
       } else {
        return <Weather/>
       }
    }


}

export default Hero
