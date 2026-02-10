import { useState } from 'react'
import Sidebar from './components/Sidebar'
import WeatherMain from './components/WeatherMain'
import './index.css'

export default function App() {
  // Стан для обраного міста
  const [selectedCity, setSelectedCity] = useState('Чернівці')

  return (
    <div className="app">
      <Sidebar selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <WeatherMain selectedCity={selectedCity} />
    </div>
  )
}
