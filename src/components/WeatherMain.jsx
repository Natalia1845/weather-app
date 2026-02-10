export default function WeatherMain({ selectedCity }) {
  const weatherData = {
    Чернівці: { temp: '+18°C', description: 'Хмарно з проясненнями', humidity: '65%', wind: '5 м/с' },
    Київ: { temp: '+10°C', description: 'Дощ', humidity: '70%', wind: '3 м/с' },
    Львів: { temp: '+12°C', description: 'Сонячно', humidity: '60%', wind: '4 м/с' },
  }

  const data = weatherData[selectedCity]

  return (
    <main className="weather-main">
      <h1>{selectedCity}</h1>
      <div className="temp">{data.temp}</div>
      <div className="description">{data.description}</div>
      <div className="details">
        <div>Вологість: {data.humidity}</div>
        <div>Вітер: {data.wind}</div>
      </div>
    </main>
  )
}
