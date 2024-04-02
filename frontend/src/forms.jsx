import React, { useState } from 'react'

function Forms() {
    const [data,setData] = useState({
        name:"",
        email:"",
        password:"",
        ConfirmPassword:"",
        country:"",
        gender:"",
        aggrement:false

    });
    const handleChange = (e) =>{

        if (e.target.type === 'checkbox'){
            setData((oldData) => ({...oldData,[e.target.name]:e.target.checked}));
             }
        else{
        setData((oldData) => ({ ...oldData,[e.target.name]:e.target.value}));

        }
              
 }

 const handleSubmit = (e) =>{
    e.preventDefault();
    
    console.log(data)
 }


  return (
    <div>
        <h1>Registration Form</h1>
   <form onSubmit={handleSubmit}>
   <label>Name</label>
      <input 
        type='text' 
        name='name'
         value={data.name} 
        onChange={handleChange}
      />
      <br/><br/>
      <label>Email</label>
      <input 
      type='email' 
      name='email'
      value={data.email} 
      onChange={handleChange}
      
      />
      <br/><br/>
      <label>password</label>
      <input 
      type='password' 
      name='password'
      value={data.password} 
      onChange={handleChange}
      />
      <br/><br/>
      <label>ConfirmPassword</label>
      <input 
      type='password' 
      name='confirmpassword'
    //   value={data.ConfirmPassword} 
      value={data.ConfirmPassword} 
      onChange={handleChange}
      />
      <br/><br/>
    <label>Country</label>
     <select name='country' value={data.country} onChange={handleChange}>
        <option value="USE">USA</option>
        <option value="canada">Canada</option>
        <option value="uk">UK</option>
     </select>
     <br/><br/>
     <div>
        <label>Gender</label>
        <br/>
        <label>Male</label>
        <input 
        type='radio'
        name='gender'
        value='male'
        onChange={handleChange}
        />
          <label>Female</label>
        <input 
        type='radio'
        name='gender'
        value='female'
        onChange={handleChange}
        />
          <label>Other</label>
        <input 
        type='radio'
        name='gender'
        value='other'
        onChange={handleChange}
        />
     </div>
     <div>
        <label>Aggrement</label>
        <input
        type='checkbox'
        name='aggrement'
        checked={data.aggrement}
        onChange={handleChange}
        />
     </div>
     <br></br>
     <input type='submit' value="Save"/>

   </form>
     
    </div>
  )
}

export default Forms  
