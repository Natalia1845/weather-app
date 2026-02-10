//import "./index.css" 
import { useState } from "react"
import Sidebar from "./components/Sidebar"
import WeatherMain from "./components/WeatherMain"
import "./index.css"

export default function App() {
  // Початкове місто
  const [selectedCity, setSelectedCity] = useState("Чернівці")

  return (
    <div className="app" style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <WeatherMain selectedCity={selectedCity} />
    </div>
  )
}
