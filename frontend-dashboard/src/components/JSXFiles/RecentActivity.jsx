import React, { useEffect, useState } from 'react'
import Cardfilter from './Cardfilter'
import RecentActivityItem from './RecentActivityItem'
import '../CSSFiles/recentactivity.css'

function RecentActivity() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter)
  }

  const fetchData = () => {
    fetch("http://localhost:5000/activities")
      .then(res => res.json())
      .then(data => {
        setItems(data)
      })
      .catch(e => console.log(e.message));
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='card'>
      <Cardfilter filterChange={handleFilterChange} />

      <div className="card-body">
        <h5 className="card-title">
          Recent Activity <span>| {filter}</span>
        </h5>
        <div className="activity">
          {items &&
            items.length > 0 &&
            items.map(item => (
              <RecentActivityItem key={item.id} item={item} />

            ))}
        </div>
      </div>
    </div>
  )
}

export default RecentActivity