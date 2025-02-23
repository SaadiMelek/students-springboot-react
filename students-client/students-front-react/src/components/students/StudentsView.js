import React, {useEffect, useState} from "react";
import axios from "axios";
import {FaEdit, FaEye, FaTrashAlt} from "react-icons/fa";
import {Link} from "react-router-dom";
import Search from "../common/Search";

const StudentsView = () => {
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async() => {
        const result = await axios.get(
            "http://localhost:8080/students", {
                validateStatus: () => {
                    return true;
                }
            }
        );
        if (result.status === 302) {
            setStudents(result.data);
        }
    }

    const handleDelete = async(id) => {
        await axios.delete(`http://localhost:8080/students/${id}`);
        loadStudents();
    }

    return (
        <section>
            <Search search={search} setSearch={setSearch}></Search>
            <table className="table table-bordered table-hover shadow">
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th colSpan="3">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        students
                            .filter((st) => st.firstName.toLowerCase().includes(search))
                            .map((student, index) => (
                            <tr key={student.id}>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.email}</td>
                                <td>{student.department}</td>
                                <td className="mx-2">
                                    <Link className="btn btn-info" to={`/view/${student.id}`}>
                                        <FaEye></FaEye>
                                    </Link>
                                </td>
                                <td className="mx-2">
                                    <Link className="btn btn-warning" to={`/edit/${student.id}`}>
                                        <FaEdit></FaEdit>
                                    </Link>
                                </td>
                                <td className="mx-2">
                                    <button className="btn btn-danger" onClick={() => handleDelete(student.id)}>
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>

                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </section>
    );
};

export default StudentsView;