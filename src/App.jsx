import { useState } from "react"
import Sidebar from "./components/Sidebar"
import WeatherMain from "./components/WeatherMain"
import "./App.css"

function App() {
  const [selectedCity, setSelectedCity] = useState("Чернівці")

  return (
    <div className="app">
      <Sidebar setSelectedCity={setSelectedCity} />
      <WeatherMain selectedCity={selectedCity} />
    </div>
  )
}

export default App
