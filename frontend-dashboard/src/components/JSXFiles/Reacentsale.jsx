import React, { useEffect, useState } from 'react'
import '../CSSFiles/recentsale.css'
import CardFilter from './Cardfilter'
import ReacentsaleTable from './ReacentsaleTable'
 
export default function Reacentsale() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter)
  }

  const fetchData = () => {
    fetch("http://localhost:5000/sales")
    .then(res => res.json())
    .then(data =>{
      setItems(data)
    })
    .catch(e => console.log(e.message));
  }

  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className='card recent-sales overflow-auto'>
      <CardFilter filterChange = {handleFilterChange}/>

     <div className="card-body">
      <h5 className="card-title">
        Recent Sales <span>| {filter}</span>
      </h5>
      <ReacentsaleTable items = {items}/>
     </div>
    </div>
  )
}
