import React, {useState} from 'react';

import {employees} from './data/employees';
import './employees.css';
import Employee from "../Employee";

function Employees() {
    const [showDetails, displayDetails] = useState({id: "", show: false});

    const showDetailsClickHandle = (event) => {
        const id = event.target.id;
        displayDetails(() => ({id: id, show: true}));
    }

    return (
        <table className="employees-table">
            <tbody>
            <tr>
                <th>Name</th>
                <th>Details</th>
            </tr>
            {
                employees.map((employee) => (
                    <tr key={employee.id}>
                        <td id={employee.id} onClick={showDetailsClickHandle}>{employee.name} {employee.surname}</td>
                        <td>
                            <Employee employee={employee} showDetails={showDetails}/>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
}

export default Employees;