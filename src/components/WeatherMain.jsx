import { useState, useEffect } from "react"
import "./WeatherMain.css"

export default function WeatherMain({ selectedCity }) {
  const [weather, setWeather] = useState(null)
  const [unit, setUnit] = useState("C")

  const fetchWeather = () => {
    if (!selectedCity) return

    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${selectedCity}&lang=uk`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch(() => setWeather(null))
  }

  useEffect(() => {
    fetchWeather()
  }, [selectedCity])

  const toggleUnit = () => {
    setUnit(unit === "C" ? "F" : "C")
  }

  const temp =
    unit === "C"
      ? weather?.current?.temp_c
      : weather?.current?.temp_f

  return (
    <div className="weather-main">
      <div className="weather-card">
        <h1>{selectedCity}</h1>

        <div className="temperature">
          {temp ?? "--"}°{unit}
        </div>

        <div className="weather-info">
          <div>Вологість: {weather?.current?.humidity ?? "--"}%</div>
          <div>Вітер: {weather?.current?.wind_kph ?? "--"} км/год</div>
        </div>

        <div className="weather-buttons">
          <button onClick={fetchWeather}>
            🔄 Оновити
          </button>

          <button onClick={toggleUnit}>
            🌡 Перемкнути °C/°F
          </button>
        </div>
      </div>
    </div>
  )
}
