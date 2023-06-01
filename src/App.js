import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

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
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });
}


  return (
    <div className="App">
      <form onSubmit={handleSubmite}>
    <label>UploadImage:</label>
        <input type='file' name='file'></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
