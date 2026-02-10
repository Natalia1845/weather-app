export default function Sidebar({ selectedCity, setSelectedCity }) {
  const cities = ['Чернівці', 'Київ', 'Львів']

  return (
    <aside className="sidebar">
      <h2>Міста</h2>

      <ul className="city-list">
        {cities.map((city) => (
          <li
            key={city}
            className={`city ${city === selectedCity ? 'active' : ''}`}
            onClick={() => setSelectedCity(city)}
          >
            {city}
          </li>
        ))}
      </ul>

      <button className="add-city">+ Додати місто</button>
    </aside>
  )
}
