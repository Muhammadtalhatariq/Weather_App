import React from 'react'
import { Formik } from 'formik';
import { IoSearchOutline } from "react-icons/io5";
import { getCityData, get5dayforcast } from '../store/slice/WeatherSlice';
import { useDispatch } from 'react-redux';
import { validate } from '../Validation';
const Form = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <div className='flex items-center justify-center pt-6'>
                <Formik
                    initialValues={{ city: "" }}
                    validationSchema={validate}
                    onSubmit={(values) => {
                        dispatch(getCityData(values)).then((res) => {
                            dispatch(get5dayforcast({
                                lat: res.payload.coord.lat,
                                lon: res.payload.coord.lon
                            }))
                        })
                    }}
                >
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <div className='flex gap-2 relative flex-col'>
                                <input
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.name}
                                    name="city"
                                    className='border border-white outline-none px-3 p-1 text-white bg-transparent md:w-96 w-80 rounded-2xl '
                                />
                                {props.errors.city && <div className='text-white' id="feedback">{props.errors.city}
                                </div>
                                }
                                <button className='absolute right-4 top-2 hover:scale-125 duration-1000 text-white' type="submit"><IoSearchOutline /></button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Form
