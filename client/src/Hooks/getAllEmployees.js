import { useEffect } from "react";
import axios from "axios";

const GetAllEmployees = (setEmployeeList) => {
    useEffect(() => {
        const api = async(setEmployeeList) => {
            let config = {
                method: "GET",
                url: "https://employee-db-22.herokuapp.com/employees",
                headers: {},
            };

            await axios(config)
            .then((res) => {
                let jsonString = JSON.stringify(res.data);
                let jsonObject = JSON.parse(jsonString);

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
                
                setEmployeeList(employeeData);
            })
            .catch((error) => console.log(error));
        };
        api(setEmployeeList);
    }, [setEmployeeList]);
};

export default GetAllEmployees;