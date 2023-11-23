import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiLink = "https://restcountries.com/v3.1/name/";

export const getCountry = createAsyncThunk(
  "country/getCountry",
  async (name) => {
    try {
      const response = await axios.get(apiLink + name);
      return response;
    } catch (error) {
      return error.message;
    }
  }
);
const num = (number) =>
  Intl.NumberFormat("en", { notation: "compact" }).format(number);
let countryState = {};
export const countrySlice = createSlice({
  name: "country",
  initialState: {
    country: {},
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountry.pending, (state) => {
        countryState = { ...state, isLoading: false };
        return countryState;
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        countryState = { ...state, isLoading: false };
        const country = action.payload.data[0];
        countryState = {
          ...state,
          isLoading: true,
          country: {
            region: country.region,
            commonName: country.name.common,
            officialName: country.name.official,
            capital: country.capital ? country.capital[0] : "",
            language: country.languages
              ? Object.values(country.languages || "")[0]
              : "",
            timezone: country.timezones[0],
            currency: country.currencies
              ? Object.values(country.currencies.XPF || "")[0]
              : "",
            currencySymbol: country.currencies
              ? Object.values(country.currencies.XPF || "")[1]
              : "",
            area: num(country.area),
            population: num(country.population),
            flag: country.flags.png,
            coatOfArms: country.coatOfArms ? country.coatOfArms.png : "",
            cca2: country.cca2,
          },
        };
        return countryState;
      })
      .addCase(getCountry.rejected, (state, action) => {
        countryState = {
          ...state,
          isLoading: false,
          error: action.error,
        };
        return countryState;
      });
  },
});

export default countrySlice.reducer;
