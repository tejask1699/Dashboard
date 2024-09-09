import React, { useEffect, useState } from 'react'
import '../CSSFiles/topselling.css'
import TopSellingItem from './TopSellingItem';
import CardFilter from './Cardfilter'


export default function TopSelling() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    }

    const fetchData = () => {
        fetch('http://localhost:5000/selling')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="card top-selling overflow-auto">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body pb-0 ">
                <h5 className="card-title">
                    Top Selling <span>| {filter}</span>
                </h5>

                <table className='table table-borderless'>
                    <thead className="table-light">
                        <tr>
                            <th scope='col'>Preview</th>
                            <th scope='col'>Product</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Sold</th>
                            <th scope='col'>Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items &&
                            items.length > 0 &&
                            items.map(item => <TopSellingItem key={item.id} item= {item}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
