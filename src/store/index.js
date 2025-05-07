import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./slice/WeatherSlice"

export const store = configureStore({
   reducer:{
    weather: weatherSlice
   }
})