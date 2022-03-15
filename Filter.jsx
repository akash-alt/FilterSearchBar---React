import React, { useEffect, useState } from 'react';
import axios from "axios"

function Filter() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
  
    useEffect(() => {
      const loadPosts = async () => {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setLoading(false);
      };
  
      loadPosts();
    }, []);

  return (
    <div>
        <h1>Search data</h1>
        <input 
            type="text"
            placeholder='Search...'
            className='search'
            onChange={(e)=> setSearchTitle(e.target.value)}
            />
        {
            loading?(<h1>Loading data...</h1>):
            (posts.filter((value)=>{
                if(searchTitle === ''){
                    return value
                }else if(value.title.toLowerCase().includes(searchTitle.toLowerCase())){
                    return value
                }
            }).map((item)=> <h5 key={item.id}>{item.title}</h5>))
        }
    </div>
  )
}

export default Filter