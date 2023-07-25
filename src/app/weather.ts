export interface Weather {
  weather: WeatherInfo[];
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
  name: string;
}

interface WeatherInfo {
  main: string;
  icon: string;
}

export interface Forecast {
  dt_txt: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: WeatherInfo;
}
