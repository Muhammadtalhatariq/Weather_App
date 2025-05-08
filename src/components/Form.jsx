import React, { useEffect } from 'react'
import { Formik } from 'formik';
import { IoSearchOutline } from "react-icons/io5";
import { getCityData, get5dayforcast } from '../store/slice/WeatherSlice';
import { useDispatch } from 'react-redux';
import { validate } from '../Validation';

const Form = () => {

    const dispatch = useDispatch()
    const defaultCity = "Lahore";
    const defaultCoords = { lat: 31.5497, lon: 74.3436 };

    useEffect(() => {
        dispatch(getCityData({ city: defaultCity }))
        dispatch(get5dayforcast(defaultCoords))
    }, [dispatch])

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        dispatch(getCityData(values))
            .then((res) => {
                if (res.payload.cod === "404") {
                    alert("City not found! Showing default city data.");
                    dispatch(getCityData({ city: defaultCity }))
                    dispatch(get5dayforcast(defaultCoords))
                } else {
                    dispatch(get5dayforcast({
                        lat: res.payload.coord.lat,
                        lon: res.payload.coord.lon
                    }))
                }
            })
            .catch((error) => {
                console.error("Error fetching city data:", error);
                alert("No data found");
                resetForm()
                dispatch(getCityData({ city: defaultCity }))
                dispatch(get5dayforcast(defaultCoords))
            })
            .finally(() => {
                setSubmitting(false);
                // resetForm();
            });
    };

    return (
        <div>
            <div className='flex items-center justify-center pt-6'>
                <Formik
                    initialValues={{ city: "" }}
                    validationSchema={validate}
                    onSubmit={handleSubmit}
                >
                    {({ handleSubmit, handleChange, handleBlur, values, errors, isSubmitting }) => (
                        <form onSubmit={handleSubmit}>
                            <div className='flex gap-2 relative flex-col'>
                                <input
                                    placeholder={defaultCity}
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.city}
                                    name="city"
                                    className='border border-white outline-none px-3 p-1 text-white bg-white/20 backdrop-blur-[4px] md:w-96 w-[350px] rounded-2xl'
                                    disabled={isSubmitting}
                                />
                                {errors.city && (
                                    <div className='text-white' id="feedback">
                                        {errors.city}
                                    </div>
                                )}
                                <button
                                    className='absolute right-4 top-2 hover:scale-125 duration-1000 text-neutral-800 cursor-pointer'
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    <IoSearchOutline />
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Form