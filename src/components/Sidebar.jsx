import { useState } from "react"
import "./Sidebar.css"

export default function Sidebar({ selectedCity, setSelectedCity }) {
  // початкові міста
  const [cities, setCities] = useState(["Chernivtsi", "Kyiv", "Lviv", "Odesa", "Kharkiv"])
  const [newCity, setNewCity] = useState("")

  const addCity = () => {
    if (newCity && !cities.includes(newCity)) {
      setCities([...cities, newCity])
      setNewCity("")
    }
  }

  const removeCity = (cityToRemove) => {
    setCities(cities.filter((c) => c !== cityToRemove))
    if (selectedCity === cityToRemove) setSelectedCity(cities[0] || "")
  }

  return (
    <div className="sidebar">
      <h2>Міста</h2>

      <div className="city-list">
        {cities.map((city) => (
          <div key={city} className="city-item">
            <button
              className={selectedCity === city ? "active" : ""}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </button>
            <button className="delete-btn" onClick={() => removeCity(city)}>✖</button>
          </div>
        ))}
      </div>

      <div className="city-add">
        <input
          type="text"
          placeholder="Додати місто"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
        />
        <button onClick={addCity}>➕</button>
      </div>
    </div>
  )
}
