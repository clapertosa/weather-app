import * as actionTypes from "../actions/actionTypes";

const initialState = {
  forecasts: {
    main: {
      city: "",
      temperature: undefined,
      minTemp: undefined,
      maxTemp: undefined,
      pressure: undefined,
      clouds: undefined,
      wind: undefined,
      weatherDescription: "",
      weatherID: undefined
    },
    day1: {
      temperature: undefined,
      minTemp: undefined,
      maxTemp: undefined,
      pressure: undefined,
      clouds: undefined,
      wind: undefined,
      weatherDescription: "",
      weatherID: undefined
    },
    day2: {
      temperature: undefined,
      minTemp: undefined,
      maxTemp: undefined,
      pressure: undefined,
      clouds: undefined,
      wind: undefined,
      weatherDescription: "",
      weatherID: undefined
    },
    day3: {
      temperature: undefined,
      minTemp: undefined,
      maxTemp: undefined,
      pressure: undefined,
      clouds: undefined,
      wind: undefined,
      weatherDescription: "",
      weatherID: undefined
    }
  },
  lat: "",
  lon: "",
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_FORECASTS:
      return {
        ...state,
        loading: true,
        error: null,
        forecasts: { main: {}, day1: {}, day2: {}, day3: {} },
        lat: "",
        lon: ""
      };
    case actionTypes.GET_FORECASTS:
      return { ...state, loading: true, error: false };
    case actionTypes.FORECASTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        lat: "",
        lon: ""
      };
    case actionTypes.RESET_CITY:
      return {
        ...state,
        loading: false,
        error: false,
        lat: "",
        lon: "",
        forecasts: { main: {}, day1: {}, day2: {}, day3: {} }
      };
    case actionTypes.FORECASTS_SUCCESS:
      const data = action.payload;
      return {
        ...state,
        loading: false,
        error: null,
        forecasts: {
          main: {
            city: data.city.name,
            temperature: data.list[0].main.temp,
            minTemp: data.list[0].main.temp_min,
            maxTemp: data.list[0].main.temp_max,
            pressure: data.list[0].main.pressure,
            clouds: data.list[0].clouds.all,
            wind: data.list[0].wind.speed,
            weatherDescription: data.list[0].weather[0].description,
            weatherID: data.list[0].weather[0].id
          },
          day1: {
            temperature: data.list[1].main.temp,
            minTemp: data.list[1].main.temp_min,
            maxTemp: data.list[1].main.temp_max,
            pressure: data.list[1].main.pressure,
            clouds: data.list[1].clouds.all,
            wind: data.list[1].wind.speed,
            weatherDescription: data.list[1].weather[0].description,
            weatherID: data.list[1].weather[0].id
          },
          day2: {
            temperature: data.list[2].main.temp,
            minTemp: data.list[2].main.temp_min,
            maxTemp: data.list[2].main.temp_max,
            pressure: data.list[2].main.pressure,
            clouds: data.list[2].clouds.all,
            wind: data.list[2].wind.speed,
            weatherDescription: data.list[2].weather[0].description,
            weatherID: data.list[2].weather[0].id
          },
          day3: {
            temperature: data.list[3].main.temp,
            minTemp: data.list[3].main.temp_min,
            maxTemp: data.list[3].main.temp_max,
            pressure: data.list[3].main.pressure,
            clouds: data.list[3].clouds.all,
            wind: data.list[3].wind.speed,
            weatherDescription: data.list[3].weather[0].description,
            weatherID: data.list[3].weather[0].id
          }
        },
        lat: data.city.coord.lat,
        lon: data.city.coord.lon
      };
    default:
      return state;
  }
};

export default reducer;
