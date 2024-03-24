import { useState,useEffect } from 'react'
import axios from 'axios'


// function App() {
//   const [data,setData] = useState([])
//   useEffect(()=>{
//     async function fetchData(){
//       console.log(import.meta.env.VITE_API_URL)
//       try {
//         const response = await fetch(`${import.meta.env.VITE_API_URL}`);
//           if (!response.ok){
//             throw new Error("Network response was not ok");

//           }
//           const result = await response.json();
//           console.log(result);
//           setData(result)


          
          
//       } catch (error){
//         console.error('Error fetching data:',error);

//       }
// }

   
// fetchData();
//   },[])
  
//   return (
//     <div >
//       {/* <student/> */}
//         <h1>my frist connection</h1>
//         {data.map(item=>(
//           <div key={item.id}>
//             <h2>{item.title}</h2>
//             <p>{item.body}</p>
//           </div>
//         ))
//       }
      
   
//    </div>
//   );
// }

// const AddData = () =>{
// const [title,settitle] = useState('');
// const [body,setbody] = useState('');
// console.log("roba")

// const handleSubmit = async (e) =>{
//   e.preventDefault();
//   try{
//   const res = await fetch("http://127.0.0.1:8000/api/posts/",{
//   method:'POST',
//   headers:{
//     'Content - Type':'application /json',
//   },
//   body: JSON.stringify({title,body}),  
//   title,body}),

// });
 

// };

// return (
//   <form onSubmit={handleSubmit}>
//     <input
//     type='text'
//     value={title}
//     onChange={e=> settitle(e.target.value)}
//     placeholder='title name'
//     />
//     <br/><br/>

//     <textarea
//      value={body}
//      onChange={e =>setbody(e.target.value)}
//      placeholder='add body'
//     />

//     <br/><br/>
//     <button type='submit'>AddData</button>

//   </form>
// )


// }


const AddData = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData([...data, result]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title name"
      />
      <br />
      <br />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="add body"
      />
      <br />
      <br />
      <button type="submit">AddData</button>
    </form>
  );
};

export default AddData;

