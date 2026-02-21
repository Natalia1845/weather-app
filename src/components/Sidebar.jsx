import { useState } from "react"
import "./Sidebar.css"

export default function Sidebar({ setSelectedCity }) {
  const [cities, setCities] = useState(["Чернівці", "Київ", "Львів"])
  const [newCity, setNewCity] = useState("")

  const addCity = () => {
    if (newCity.trim() && !cities.includes(newCity)) {
      setCities([...cities, newCity])
      setSelectedCity(newCity)
      setNewCity("")
    }
  }

  const deleteCity = (cityToDelete) => {
    setCities(cities.filter((city) => city !== cityToDelete))
  }

  return (
    <div className="sidebar">
      <h2>Міста</h2>

      <ul className="city-list">
        {cities.map((city) => (
          <li key={city} className="city-item">
            <span onClick={() => setSelectedCity(city)}>
              {city}
            </span>

            <button
              className="delete-btn"
              onClick={() => deleteCity(city)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="add-city">
        <input
          type="text"
          placeholder="Додати місто"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
        />
        <button onClick={addCity}>
          Додати
        </button>
      </div>
    </div>
  )
}
