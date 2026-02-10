export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Міста</h2>

      <ul className="city-list">
        <li className="city active">Чернівці</li>
        <li className="city">Київ</li>
        <li className="city">Львів</li>
      </ul>

      <button className="add-city">+ Додати місто</button>
    </aside>
  )
}
