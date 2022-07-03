import { useState } from "react"

let initformData ={
  name:"",
  email:"",
  country:"USA"
}

export default function Form (){

  let [formdata,setFormData]=useState(initformData)

  const handleChange=(e)=>{

const {value,name}=e.target

// Update name with value
setFormData(
  {formdata,
  [name]:value}
)

  }

  const handleSubmit=(e)=>{
 e.prevent.Default()
  }

  return (
    <form onSubmit={handleSubmit}>
 
 <div>
      <input value={formdata.name} name="name" onChange={handleChange} type="text" placeholder="enter name" />
      <br/>
      <input value={formdata.email} name="email" onChange={handleChange} type="email" placeholder="enter email"/>
     <br/>
      <input type="submit"/>
      <br/>
      <select 
      onChange={handleChange} 
      name="country"
      placeholder="country"
      value={formdata.country}
      dafaultValue={formdata.country}
      >
        <option key="India" value="">India</option>
        <option key="Usa" value="">Usa</option>
      </select>
     <ul>
       <li>Name:{formdata.name}</li>
       <li>Email:{formdata.email}</li>
       <li>Country:{formdata.country}</li>
     </ul>
    </div>

    </form>
    
  )
}