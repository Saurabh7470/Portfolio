import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ApiMethodsGet from './modules/Api.Module.js';
function App() {
  const [employee, setEmployee] = useState([]);
useEffect(()=> {
      // fetch("https://localhost:7260/api/Employee/GetAll?page=1&pageSize=10")
      // .then((res)=> {
      //   return res.json();
      // })
      // .then((data)=> {
      //   console.log(data);
      //   setEmployee(data.data.result);
      // });
      ApiMethodsGet("https://localhost:7260/api/Employee/GetAll?page=1&pageSize=10")
      .then((res)=> {setEmployee(res.Data);});
      // if(result!=null)
      //   setEmployee(employee)
      // else
      //  console.log("Api Not Hited to endpoint");
}, []);
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
         {
          employee.map((item)=>{
             return(
              <>
              <p>{item.name} = {item.email}</p>
              </>
             )
          })}
        </header>
      </div>
    </>
  );
}

export default App;
