import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

function Post() {   
    const [post,setPost] = useState([])
    


    useEffect(() => {
    async function fetchPosts(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      
     setPost(response.data)
   
    }
    fetchPosts();
    },[])

   

  return (
    <div>
     <h1>post page</h1>  
     
    
    {post.map((post) => (
        <div key={post.id}>
            <p>{post.title}</p>

        </div>
    )
    
    ) }  


    </div>
  )
}

export default Post
