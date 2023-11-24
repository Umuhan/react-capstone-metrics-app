import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const apiLink = 'https://restcountries.com/v3.1/all';

export const getCountriesData = createAsyncThunk(
  'countries/getCountries',
  async (thunkAPI) => {
    try {
      const response = await axios.get(apiLink);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const num = (number) => Intl.NumberFormat('en', { notation: 'compact' }).format(number);
let countriesState = {};
export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountriesData.pending, (state) => {
        countriesState = { ...state, isLoading: false };
        return countriesState;
      })
      .addCase(getCountriesData.fulfilled, (state, action) => {
        countriesState = { ...state, isLoading: false };
        const countries = action.payload.map((country) => ({
          id: uuidv4(),
          commonName: country.name.common,
          cca2: country.cca2,
          region: country.region,
          flag: country.flags,
          population: num(country.population),
        }));
        countriesState = { ...state, isLoading: true, countries };
        return countriesState;
      })
      .addCase(getCountriesData.rejected, (state, action) => {
        countriesState = { ...state, isLoading: false, error: action.error };
        return countriesState;
      });
  },
});

export default countriesSlice.reducer;
