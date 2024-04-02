import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

function Post() {   
    useEffect(() => {
    async function fetchPosts(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      
     console.log(response)
   
    }
    fetchPosts();
    },[])

  return (
    <div>
     <h1>post page</h1>    

    </div>
  )
}

export default Post
