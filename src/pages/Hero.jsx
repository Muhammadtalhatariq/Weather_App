import React, { useState, useEffect } from 'react'
import Weather from '../components/Weather'
import { useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Forecast from '../components/Forecast'

const Hero = () => {

    const { citySearchLoading, citySearchError, forecastLoading } = useSelector((state) => state.weather)
    const [loadings, setLoadings] = useState(true);
    const allLoadings = [citySearchLoading, forecastLoading];
    useEffect(() => {
        const isAnyChildLoading = allLoadings.some((state) => state);
        setLoadings(isAnyChildLoading);
    }, [allLoadings]);

    if (loadings) {
        return <div className='flex items-center justify-center h-screen'>
            <Loading />
        </div>
    } else {
            return <>
                <Weather />
                <Forecast />
            </>
        }
}

export default Hero
