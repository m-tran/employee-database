import { useEffect } from React;
import axios from "axios";

const getAllEmployees = (setEmployeeList) => {
    useEffect(() => {
        const API = async(setEmployeeList) => {
            let config = {
                method: "GET",
                url: "https://employee-db-22.herokuapp.com/employees",
                headers: {},
            };

            await axios(config)
            .then((res) => {
                let jsonString = JSON.stringify(res.data);
                let jsonObject = JSON.parse(jsonSTring);

                const employeesMapped = jsonObject.map((employee) => {
                    return {
                        name: employee.name,
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
        API(setEmployeeList);
    }, [setEmployeeList]);
};

export default getAllEmployees;