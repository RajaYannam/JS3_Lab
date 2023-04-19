const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "372d2f6c5f6e524743553acf5ad6d3ee";

class WeatherAPI{

    constructor(userdata){
        this.userdata = userdata;

        this.apiURL = new URL(API_BASE_URL);
    }

    async invoke(){

      const URLString=this.apiURL.toString();
      const responseObj = await fetch(URLString);
      const responseJSON= await responseObj.json();

      return responseJSON;

    }
  buildURL(){

    this.apiURL.searchParams.append("q",this.userdata);
    this.apiURL.searchParams.append("units","metric");
    this.apiURL.searchParams.append("appid",API_KEY);

    console.log(`API URL is ${this.apiURL}`);

  }
}

export {WeatherAPI};