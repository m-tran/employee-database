import React from 'react';
import axios from "axios";
import qs from "qs";

const APIUpdateEmployee = (updateEmployee) => {
    let data = qs.stringify({
        id: updateEmployee.id,
        first_name: updateEmployee.first,
        last_name: updateEmployee.last, 
        phone: updateEmployee.phone,
        address: updateEmployee.address,
        title: updateEmployee.title,
    });

    let config = {
        method: "PUT",
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

const updateRow = (setEmployeeList) => {
    const handleUdateRow = (newData, oldData) => {
        new Promise(resolve => {
            setTimeout(() => {
                resolve();
                setEmployeeList((prevState) => {
                    const data = [...prevState.data];
                    APIUpdateEmployee(newData);
                    data.push(newData);
                    return { ...prevState, data };
                });
            }, 600);
        });
    }
    return handleUdateRow;
}

export default updateRow;
