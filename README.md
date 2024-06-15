This Weather App is a web application that allows users to check the current weather and a 7-day forecast for a selected city. It utilizes HTML, CSS, JavaScript, React, and the OpenWeather API to fetch and display weather data.

# Features
  ## Current Weather
i) Selected City: Users can choose a city name from the dropdown menu to view the current weather conditions.
ii) Weather Data: Displays current temperature, weather description (e.g., sunny, cloudy), wind speed, and population , UV index
 ## 7-Day Weather Forecast
 i) Forecast Display: Shows weather forecast for the next 7 days including temperature highs/lows and weather conditions.
 ## Additional Information
   i) Humidity: Displays current humidity level in percentage.
   ii) Population: Shows the population of the selected city.
   iii) UV Index: Provides the UV index for the current location, indicating the level of UV radiation.
## Technologies Used
  HTML/CSS: Basic structure and styling of the application.
  JavaScript: Implements dynamic behavior and interactions.
  React: Used for building user interfaces and managing state efficiently.
  OpenWeather API: Provides weather data including current conditions and forecasts.

  
### Future Improvements
User Geolocation: Implement geolocation to automatically fetch weather based on user's current location.
Unit Selection: Allow users to choose between Celsius and Fahrenheit for temperature display.

# Components Overview
### Homecomponents
The Homecomponents component is the main layout component of the weather application. It includes:

### LeftComponent:
Displays the current weather information for a selected city.
### Right Side: Contains additional components:
1) ChooseStatecomponents: Allows users to select a city from a dropdown menu.
2) WeekInfoCardComponents: Displays a list of weather cards for the next 7 days.
3) HumidityComponent: Shows humidity, UV index, wind speed, and population details.
### LeftComponent
The LeftComponent component displays:

Date and Location: Shows the current date, weekday, and city information.
Weather Information: Displays the weather icon, temperature, and description based on the selected city's current weather data fetched from the OpenWeather API.
ChooseStatecomponents

### The ChooseStatecomponents component:

City Selection: Provides a dropdown menu populated with city options from a JSON file (in.json).
State Management: Uses React context and dispatch to update the selected city's weather information and trigger a re-fetch of weather data from the OpenWeather API.

### WeekInfoCardComponents
The WeekInfoCardComponents component:

Daily Weather Cards: Renders a list of weather cards for the next 7 days.
Interactive Selection: Allows users to click on each card to update the main view (LeftComponent) with the selected day's weather information.
State Management: Uses React state and context to manage which card is currently selected and updates the LeftComponent with the corresponding day's weather data.
### HumidityComponent
The HumidityComponent component:

Weather Details: Displays humidity, UV index with corresponding level (low, medium, high, very high), wind speed, and population information.
Dynamic Updates: Updates dynamically based on the selected city's weather data fetched via the context API state.
Context API (WeatherAppContext)
The WeatherAppContext context and related components (WeatherAPPProvider, UseWeatherAppContext, WeatherReducer):

### State Management: Manages application state including selected city, current weather, and daily weather forecast using React's context API.
Reducer: Defines actions (SET_CITY, SET_CURRENT, SET_DAILY) to update state based on user interactions and API responses.

### Additional Resources
API Usage: Utilizes the OpenWeather API (https://api.openweathermap.org) to fetch weather data based on selected city coordinates (lat, lon).
Data Sources: References data from SimpleMaps (https://simplemaps.com/data/in-cities) for city information used in dropdown menu selection.

### Dependencies
dayjs: Used for date formatting and manipulation within components.
axios: Handles HTTP requests to fetch weather data from the OpenWeather API.


# Learning
## 1) Component Modularity and Structure:

Component Separation: Breaking down the UI into modular components (LeftComponent, ChooseStatecomponents, WeekInfoCardComponents, HumidityComponent) helps in managing complexity and promoting reusability.
Component Responsibilities: Each component has a specific responsibility (e.g., displaying current weather, selecting cities, showing weekly forecast), which improves code organization and readability.
## 2) State Management with React Context:

Context API: Using React's Context API (WeatherAppContext) for managing global state such as selected city, current weather data, and daily forecasts.
Reducer Pattern: Implementing a reducer function (WeatherReducer) to handle state updates based on different actions (SET_CITY, SET_CURRENT, SET_DAILY) ensures predictable state transitions and maintainable code.
## 3) Asynchronous Data Fetching with Axios:

API Integration: Using Axios for making asynchronous HTTP requests to fetch weather data from the OpenWeather API (https://api.openweathermap.org).
Data Handling: Managing API responses, error handling, and updating state (current, daily) accordingly within React's lifecycle (useEffect) based on changes in city state.
## 4) Date and Time Handling:

Date Formatting: Utilizing libraries like dayjs for date manipulation and formatting (dayjs.unix(current.dt).format("DD MM YYYY")) ensures consistent display of date and time across components.
Dynamic Updates: Reactively updating date and time based on fetched weather data enhances user experience by providing real-time information.
## 5) UI/UX Design Considerations:

Responsive Design: Implementing responsive CSS (className) for different screen sizes ('leftWrap', 'stateWrap', 'cardwrap', etc.) ensures a consistent user interface across devices.
Loading State: Showing a loading indicator (Loading ..) until weather data (current) is fetched improves user feedback and experience during data retrieval.
## 6) Error Handling and Debugging:

Console Logging: Properly logging errors (console.error) during data fetching (fetchWeather, fetchData) helps in identifying and debugging issues related to API requests and state updates.
Conditional Rendering: Using conditional rendering (if (!current) return <div>Loading ..</div>) to handle scenarios where data is being fetched or not yet available ensures a smooth user experience.
Integration with External APIs and Data Sources:

API Keys: Managing and securely storing API keys ('34480b98aa332da53123a0ac63a4ea9d') for external services (OpenWeather API) ensures secure access to data and compliance with API usage policies.


## React hooks
  ### useContext
  is used to access the global state (WeatherAppContext) and dispatch actions (dispatch) to update that state across various components without having to pass 
   props manually through every level of the component tree.
  ###  useReducer 
  is used to manage complex state logic in this  application, specifically for handling actions that update the state (state) based on different action types (SET_CITY, SET_CURRENT, SET_DAILY).
  Reducer Function (WeatherReducer): Defines how state updates in response to dispatched actions (action.type). It returns a new state object (...state) modified according to the action's payload (action.payload).
  ### useEffect 
  is used to perform side effects in the functional components, such as fetching data from an external API (axios), subscribing to external data sources, or 
  interacting with the DOM.
  Data Fetching: useEffect with axios is used to fetch weather data (daily) from the OpenWeather API based on the selected city (lat, lng).
 Dependency Array ([city]): Ensures that fetchData is called whenever city changes, triggering a new API request and updating the daily state via dispatch.
### Future Enhancements
  Geolocation: Implement automatic detection of user location to provide weather information without manual city selection.
  Unit Conversion: Allow users to switch between Celsius and Fahrenheit temperature units.
  Interactive Map: Integrate a map to visualize selected city locations and weather conditions
  


