import React from 'react'
import axios from 'axios'
import { useState } from 'react';
function Home() {
const [data, setdata] = useState('');
const [state,setstate]=useState(false)
    const handleSubmite=(e)=>{
        e.preventDefault();
        const formdata=new FormData()
        formdata.append('file',e.target.file.files[0])//appending file data as file
        const plainFormData = Object.fromEntries(formdata.entries());
        console.log(plainFormData);
      
        axios.post('http://localhost:5001/ExctractTextFromimage', formdata)
        .then(response => {
          // Handle the response data
          console.log(response.data);
          if(response.data.length>0)
          {
            setstate(true)
            setdata(response.data)
          }
        })
        .catch(error => {
          // Handle the error
          console.error(error);
        });
    }
  return (
    <div
    style={{
      boxShadow: '10px 10px 10px',
      height: '50vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div>
      <h4>Image To Text Converter</h4>
      <form className="form-controls" onSubmit={handleSubmite}>
        <div className="mb-3">
          <label htmlFor="file" className="form-label"  style={{color:'gray'}}>
            Upload Image:
          </label>
          <input type="file" className="form-control" id="file" name="file"  />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <br></br>
       { state&&<textarea cols='40' rows='10' value={data}></textarea>
       }

      </form>
    </div>
    <div>
    </div>
  </div>
  
  )
}

export default Home
