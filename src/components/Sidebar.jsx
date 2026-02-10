import { useState } from "react"
import "./Sidebar.css"

export default function Sidebar({ selectedCity, setSelectedCity }) {
  const [cities, setCities] = useState(["Чернівці", "Київ", "Львів"])
  const [newCity, setNewCity] = useState("")

  const addCity = () => {
    const cityTrimmed = newCity.trim()
    if (cityTrimmed && !cities.includes(cityTrimmed)) {
      setCities([...cities, cityTrimmed])
      setSelectedCity(cityTrimmed) // одразу вибираємо нове місто
      setNewCity("") // очищаємо поле вводу
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addCity()
    }
  }

  return (
    <aside className="sidebar">
      <h3>Міста</h3>
      <ul className="city-list">
        {cities.map((city) => (
          <li
            key={city}
            onClick={() => setSelectedCity(city)}
            className={city === selectedCity ? "selected" : ""}
          >
            {city}
          </li>
        ))}
      </ul>
      <div className="add-city">
        <input
          type="text"
          placeholder="Додати місто"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={addCity}>Додати</button>
      </div>
    </aside>
  )
}
