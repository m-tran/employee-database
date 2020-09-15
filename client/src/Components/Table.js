import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from "axios";


function App() {
    const [entries, setEntries] = useState({
        id: "",
        first_name: "",
        last_name: "",
        phone: "",
        address: "",
        title: "",
    });

    useEffect(() => {
        axios({
            method: "GET",
            url: `https://employee-db-22.herokuapp.com/employees`,
            headers: {},
        })
        .then((res) => {
            let jsonString = JSON.stringify(res.data);
            let jsonObject = JSON.parse(jsonString);
            console.log(res);

            const employeesMapped = jsonObject.map((employee) => {
                return {
                    first_name: employee.first,
                    last_name: employee.last,
                    phone: employee.phone,
                    address: employee.address,
                    title: employee.title,
                    id: employee.id,
                };
            });

            let employeeData = { data: employeesMapped };
            setEntries(employeeData);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <MaterialTable
                title="Employee Database"
                columns={getAllEmployees.columns}
            />
        </div>
    );
}

export default App;