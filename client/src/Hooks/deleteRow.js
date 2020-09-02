import React from 'react';
import axios from "axios";
import qs from "qs";

const APIDeleteEmployee = (deleteEmployee) => {
    let data = qs.stringify({
        id: deleteEmployee.id,
        first_name: deleteEmployee.first,
        last_name: deleteEmployee.last, 
        phone: deleteEmployee.phone,
        address: deleteEmployee.address,
        title: deleteEmployee.title,
    });

    let config = {
        method: "DELETE",
        url: "https://employee-db-22.herokuapp.com/employees/:id",
        headers: {},
        data: data,
    };

    axios(config)
    .then((res) => {
        console.log(JSON.stringify(res.data));
    })
    .catch((err) => console.log(err));  
};

const deleteRow = (setEmployeeList) => {
    const handleDeleteRow = (newData) => {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                setEmployeeList((prevState) => {
                    const data = [...prevState.data];
                    APIDeleteEmployee(newData);
                    data.push(newData);
                    return { ...prevState, data };
                });
            }, 600);
        });
    }
    return handleDeleteRow;
};

export default deleteRow;
