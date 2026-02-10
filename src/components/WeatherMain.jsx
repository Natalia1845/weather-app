import { useState, useEffect } from "react"
import "./WeatherMain.css"

const cityMap = {
  Чернівці: "Chernivtsi",
  Київ: "Kyiv",
  Львів: "Lviv",
}

export default function WeatherMain({ selectedCity }) {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [bgClass, setBgClass] = useState("sunny")
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY

  useEffect(() => {
    if (!selectedCity) return

    // Беремо транслітерацію лише для відомих міст, інші — як введено
    const cityQuery = cityMap[selectedCity] || selectedCity.trim()

    console.log("Запит до WeatherAPI:", cityQuery) // лог для перевірки

    setLoading(true)
    setWeatherData(null)

    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
        cityQuery
      )}&lang=uk`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Weather API response:", data)

        if (data && data.current) {
          setWeatherData({
            temp: data.current.temp_c + "°C",
            description: data.current.condition.text,
            humidity: data.current.humidity + "%",
            wind: data.current.wind_kph + " км/год",
          })

          const condition = data.current.condition.text.toLowerCase()
          if (condition.includes("сонячно") || condition.includes("ясно")) setBgClass("sunny")
          else if (condition.includes("дощ") || condition.includes("злив")) setBgClass("rain")
          else if (condition.includes("хмар") || condition.includes("пасмурно")) setBgClass("cloudy")
          else if (condition.includes("сніг")) setBgClass("snow")
          else setBgClass("sunny")
        } else if (data.error) {
          setWeatherData({
            temp: "N/A",
            description: "Погода недоступна для цього міста",
            humidity: "-",
            wind: "-",
          })
          setBgClass("sunny")
        }
      })
      .catch((err) => {
        console.error("Weather API error:", err)
        setWeatherData({
          temp: "N/A",
          description: "Помилка завантаження",
          humidity: "-",
          wind: "-",
        })
        setBgClass("sunny")
      })
      .finally(() => setLoading(false))
  }, [selectedCity])

  if (loading) return <main className={`weather-main ${bgClass}`}>Завантаження...</main>
  if (!weatherData) return <main className={`weather-main ${bgClass}`}>Виберіть місто</main>

  return (
    <main className={`weather-main ${bgClass}`}>
      <h1>{selectedCity}</h1>
      <div className="temp">{weatherData.temp}</div>
      <div className="description">{weatherData.description}</div>
      <div className="details">
        <div>Вологість: {weatherData.humidity}</div>
        <div>Вітер: {weatherData.wind}</div>
      </div>
    </main>
  )
}
