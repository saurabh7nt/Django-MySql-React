import axios from 'axios';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export default function Add_Employee() {

    const { register, handleSubmit } = useForm();
    let navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        axios.post((process.env.REACT_APP_API_URL), data).then((result)=>{
        // axios.post("http://127.0.0.1:8000/employee/", data).then((result)=>{
            console.log(result)
            navigate('/employee/show/')
        }).catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
        <div className="row">
            <div className="col-xl-4 offset-4">
                <div className="card">
                    <div className="card-body bg-primary-subtle">
                      <form action="/employee/add/" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                        <label for="EmployeeName" className="form-label" >Name : </label>
                        <input name="EmployeeName" className="form-control" {...register("EmployeeName")} id="EmployeeName"/>
                        {/* <label for="EmployeeId" className="form-label" >Employee Id : </label>
                        <input name="EmployeeId" className="form-control" {...register("EmployeeId")} id="EmployeeId"/> */}
                        <label for="Department" className="form-label" >Department : </label>
                        <input name="Department" className="form-control" {...register("Department")} id="Department"/>
                        <label for="Address" className="form-label" >Address : </label>
                        <input name="Address" className="form-control" {...register("Address")} id="Address"/>
                        <br/>
                        <button className="form-control btn btn-primary">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
