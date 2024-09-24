import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lon: number, 
  lat: number, 
}

// TODO: Define a class for the Weather object
class Weather {
  id:number
  main:string
  description: string
  icon: string
  constructor (id :number, main: string, description: string, icon:string){
    this.id =id
    this.main =main
    this.description =description
    this.icon =icon 

  }
}
// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  baseURL:string
  APIKey: string
  city: string

  constructor(baseURL: string, APIKey: string, city: string){
  this.baseURL = baseURL
  this.APIKey = APIKey 
  this.city = city
}
  // TODO: Create fetchLocationData method

   public async fetchLocationData(query: string) {
    const resuLt = await fetch (this.baseURL) ?? 
    }
  // TODO: Create destructureLocationData method
   private destructureLocationData(locationData: Coordinates): Coordinates {

   }
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
   async getWeatherForCity(city: string) {
  const URL =`${this.baseURL}?q=${city}&appid=${this.APIKey}`
   }
  }

export default new WeatherService();
