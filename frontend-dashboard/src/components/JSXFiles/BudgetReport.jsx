import React, { useState } from 'react'
import BudgetChart from './BudgetChart';
import Cardfilter from './Cardfilter';

function BudgetReport() {
    const [filter, setFilter] = useState("Today");
    const handleFilterChange = filter => {
        setFilter(filter);
    };
  return (
    <div className='card'>
      <Cardfilter filterChange = {handleFilterChange}/>

     <div className="card-body">
      <h5 className="card-title">
        Budget Report <span>| {filter}</span>
      </h5>
      <BudgetChart/>
     </div>
    </div>
  )
}

export default BudgetReport