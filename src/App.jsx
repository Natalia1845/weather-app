import Sidebar from './components/Sidebar'
import WeatherMain from './components/WeatherMain'
import './index.css'

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <WeatherMain />
    </div>
  )
}
