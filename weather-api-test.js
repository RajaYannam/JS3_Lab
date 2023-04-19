import { WeatherAPI } from "./weather-api.js";
function testBuildURL(){
    const weatherAPI = new WeatherAPI("Germany");
    weatherAPI.buildURL();
}

async function testinvoke(){

    const weatherAPI = new WeatherAPI("London");
    weatherAPI.buildURL();

   const responseInJSON = await weatherAPI.invoke();
   console.log(responseInJSON);
}

//testBuildURL();

testinvoke();