import React, { useState } from 'react'
import Cardfilter from './Cardfilter'
import ReportCharts from './ReportCharts';

export default function Reports() {

    const [filter, setFilter] = useState("Today");
    const handleFilterChange = filter => {
        setFilter(filter);
    };
  return (
    <div className="card">
        <Cardfilter filterChange={handleFilterChange}/>
        <div className="card-body">
            <h5 className="card-title">
                Reports<span>/{filter}</span>
            </h5>
            <ReportCharts/>
        </div>
    </div>
  )
}
