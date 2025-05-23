import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HOST_NAME, API_ID } from "../../config/Config";;

export const getCityData = createAsyncThunk("city", async (obj, { rejectWithValue }) => {
    try {
        const response = await fetch(`${HOST_NAME}/data/2.5/weather?q=${obj.city}&appid=${API_ID}`)
        if (!response.ok) {
            if (response.status === 404) {
                return rejectWithValue("City not found");
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const city = await response.json()
        return city;
    } catch (error) {
        return rejectWithValue(error.message);
    }
}
)

export const get5dayforcast = createAsyncThunk("5days", async (obj, { rejectWithValue }) => {
    try {
        const response = await fetch(`${HOST_NAME}/data/2.5/forecast?lat=${obj.lat}&lon=${obj.lon}&appid=${API_ID}`)
        if (!response.ok) {
            if (response.status === 404) {
                return rejectWithValue("City not found");
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const city = await response.json()
        return city;
    } catch (error) {
        return rejectWithValue(error.message);
    }
}
)

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        citySearchLoading: false,
        citySearchData: null,
        citySearchError: null,
        forecastLoading: true,
        forecastData: null,
        forecastError: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCityData.pending, (state) => {
                state.citySearchLoading = true;
                state.citySearchData = null;
            })
            .addCase(getCityData.fulfilled, (state, action) => {
                state.citySearchLoading = false;
                state.citySearchData = action.payload;
            })
            .addCase(getCityData.rejected, (state, action) => {
                state.citySearchLoading = false;
                state.citySearchData = null;
                state.citySearchError = action.payload || "fatch data not found"
            })
            .addCase(get5dayforcast.pending, (state) => {
                state.forecastLoading = true;
                state.forecastData = null;
                state.forecastError = null;
            })
            .addCase(get5dayforcast.fulfilled, (state, action) => {
                state.forecastLoading = false;
                state.forecastData = action.payload;
                state.forecastError = null;
            })
            .addCase(get5dayforcast.rejected, (state, action) => {
                state.forecastLoading = false;
                state.forecastData = null;
                state.forecastError = action.error.message;
            });
    }
})
export default weatherSlice.reducer
