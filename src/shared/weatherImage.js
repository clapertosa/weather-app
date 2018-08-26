import * as weatherPic from "../assets/weather-images";

export const getWeatherImage = (weatherID, nextDay) => {
  //nextDay: if true, return always the morning image
  const hours = new Date().getHours();

  switch (true) {
    case weatherID === 800: //clear sky
      return !nextDay
        ? hours >= 5 && hours < 18
          ? weatherPic.day
          : weatherPic.night
        : weatherPic.day;
      break;
    case weatherID === 801: //few clouds
      return !nextDay
        ? hours >= 5 && hours < 18
          ? weatherPic.cloudyDay1
          : weatherPic.cloudyNight1
        : weatherPic.cloudyDay1;
      break;
    case weatherID === 802: //scattered clouds
      return !nextDay
        ? hours >= 5 && hours < 18
          ? weatherPic.cloudyDay3
          : weatherPic.cloudyNight3
        : weatherPic.cloudyDay3;
      break;
    case weatherID >= 803 && weatherID <= 804: //broken or overcast clouds
      return weatherPic.cloudy;
      break;
    case weatherID >= 511 && weatherID <= 531: //heavy rain
      return weatherPic.rainy6;
      break;
    case weatherID >= 500 && weatherID <= 504: //rain
      return weatherPic.rainy3;
      break;
    case weatherID >= 200 && weatherID <= 232: //thunderstorm
      return weatherPic.thunder;
      break;
    case weatherID >= 600 && weatherID <= 622: //snow
      return weatherPic.snowy6;
      break;
    case weatherID >= 701 && weatherID <= 781: //atmosphere (mist)
      return weatherPic.cloudy;
      break;
    default:
      return !nextDay
        ? hours >= 5 && hours < 18
          ? weatherPic.day
          : weatherPic.night
        : weatherPic.day;
      break;
  }
};
