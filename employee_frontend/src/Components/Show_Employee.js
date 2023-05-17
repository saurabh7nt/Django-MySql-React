import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function Show_Employee() {

    let navigate = useNavigate();

    var [api, setapi] = useState([]);
    useEffect(()=>{
      axios.get(process.env.REACT_APP_API_URL).then((result)=>{
    // axios.get("http://127.0.0.1:8000/employee/").then((result)=>{
      console.log(result.data)
      setapi(result.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  // function handleClick(rollno){
  //   // axios.delete(apiurl + `getById/${rollno}`).then((result)=>{
  //   axios.delete(`${process.env.PYTHON_API}/getById/${rollno}`).then((result)=>{
  //       console.log("deleted"+ result)
  //       navigate('/student/show/')
  //   }).catch((error)=>{
  //       console.log(error);
  //   })
  // }

  
  return (
    <div>
         <h2 className="text-center my-3" >Employee Management Application</h2>
         <h3 className="text-center my-3" >List of Employees : </h3>
         <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body bg-primary-subtle">
              <table className="table">
                <thead>
                  <tr>
                    {/* <th>#SNO.</th> */}
                    <th>EMPLOYEE ID </th>
                    <th>EMPLOYEE NAME</th>
                    <th>DEPARTMENT</th>
                    <th>ADDRESS</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        api && api.length > 0 && api.map(obj=>
                            <tr>
                                <td>{obj.EmployeeId}</td>
                                <td>{obj.EmployeeName}</td>
                                <td>{obj.Department}</td>
                                <td>{obj.Address}</td>
                                {/* <td> 
                                    <button type="button" onClick={() => handleClick(obj.rollno)} className="btn btn-warning" >Delete</button>
                                </td> */}
                            </tr>
                        )    
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
