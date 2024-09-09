import React, {useState, useEffect} from 'react'
import '../CSSFiles/news.css'
import Cardfilter from './Cardfilter';
import NewsPostItem from './NewsPostItem';
function News() {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter)
  };

  const fetchData = () => {
    fetch("http://localhost:5000/news")
    .then(res => res.json())
    .then(data =>{
      setNews(data)
    })
    .catch(e => console.log(e.message));
  }

  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className='card'>
      <Cardfilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          News &amp; Updates <span>| {filter}</span>
        </h5>
        <div className="news">
          {news &&
            news.length > 0 &&
            news.map(item => 
              <NewsPostItem key={item.id} item={item} />

            )}
        </div>
      </div>
    </div>
  )
}

export default News