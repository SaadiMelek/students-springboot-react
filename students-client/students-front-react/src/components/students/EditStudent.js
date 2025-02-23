import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const EditStudent = () => {

    let navigate = useNavigate();

    const {id} = useParams();

    const[student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    });
    const {firstName, lastName, email, department} = student;

    useEffect(() => {
        loadStudent();
    }, []);

    const loadStudent = async() => {
        const result = await axios.get(`http://localhost:8080/students/${id}`);
        setStudent(result.data);
    }

    const handleInputChange = (event) => {
        setStudent({...student, [event.target.name]: event.target.value});
    };

    const updateStudent = async(event) => {
        event.preventDefault();// prevent page reload and sending request GET (it is POST in this case)
        await axios.put(`http://localhost:8080/students/${id}`, student);
        navigate("/all");
    }


    return (
        <div className="col-sm-8 py-2 px-5">
            <h2 className={"mt-5"}>Edit Student</h2>
            <form onSubmit={(event) => updateStudent(event)}>
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

export default EditStudent;