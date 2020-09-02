import React from 'react';
import axios from "axios";
import qs from "qs";

const APINewEmployee = (newEmployee) => {
    let data = qs.stringify({
        first_name: newEmployee.first,
        last_name: newEmployee.last, 
        phone: newEmployee.phone,
        address: newEmployee.address,
        title: newEmployee.title,
    });

    let config = {
        method: "POST",
        url: "https://employee-db-22.herokuapp.com/employees",
        headers: {},
        data: data,
    };

    axios(config)
    .then((res) => {
        console.log(JSON.stringify(res.data));
    })
    .catch((err) => console.log(err));  
};

const addRow = (setEmployeeList) => {
    const handleAddRow = (newData) => {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                setEmployeeList((prevState) => {
                    const data = [...prevState.data];
                    APINewEmployee(newData);
                    data.push(newData);
                    return { ...prevState, data };
                });
            }, 600);
        });
    };
    return handleAddRow;
};

export default addRow;
