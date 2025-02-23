import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const AddStudent = () => {

    let navigate = useNavigate();
    const[student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    });
    const {firstName, lastName, email, department} = student;

    const handleInputChange = (event) => {
        setStudent({...student, [event.target.name]: event.target.value});
    };

    const saveStudent = async(event) => {
        event.preventDefault();// prevent page reload and sending request GET (it is POST in this case)
        await axios.post("http://localhost:8080/students", student);
        navigate("/all");
    }


    return (
        <div className="col-sm-8 py-2 px-5">
            <form onSubmit={(event) => saveStudent(event)}>
                <div className={"input-group mb-5"}>
                    <label className={"input-group-text"} htmlFor={"firstName"}>Firstname</label>
                    <input className={"form-control col-sm-6"} type={"text"} name={"firstName"} id={"firstName"}
                           required value={firstName} onChange={(event => handleInputChange(event))}/>
                </div>
                <div className={"input-group mb-5"}>
                    <label className={"input-group-text"} htmlFor={"lastName"}>Lastname</label>
                    <input className={"form-control col-sm-6"} type={"text"} name={"lastName"} id={"lastName"}
                           required value={lastName} onChange={(event => handleInputChange(event))}/>
                </div>
                <div className={"input-group mb-5"}>
                    <label className={"input-group-text"} htmlFor={"email"}>Email</label>
                    <input className={"form-control col-sm-6"} type={"email"} name={"email"} id={"email"}
                           required value={email} onChange={(event => handleInputChange(event))}/>
                </div>
                <div className={"input-group mb-5"}>
                    <label className={"input-group-text"} htmlFor={"department"}>Department</label>
                    <input className={"form-control col-sm-6"} type={"text"} name={"department"} id={"department"}
                           required value={department} onChange={(event => handleInputChange(event))}/>
                </div>

                <div className="row mb-5">
                    <div className="col-sm-2">
                        <button type="submit" className="btn btn-outline-success btn-lg">Save</button>
                    </div>
                    <div className="col-sm-2">
                        <Link to={"/all"} type="submit" className="btn btn-outline-warning btn-lg">Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddStudent;