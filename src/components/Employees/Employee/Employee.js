import React from 'react';

function Employee({employee, showDetails}) {
    return (
        <>
            {
                employee.id === parseInt(showDetails.id) && showDetails.show ?
                    <div>
                        <div>Age: {employee.age}</div>
                        <div>Salary: {employee.salary}</div>
                        <div>Position: {employee.position}</div>
                    </div>
                    : null
            }
        </>
    );
}

export default Employee;