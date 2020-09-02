import React, { useState } from 'react';
import MaterialTable from 'material-table';
import addRow from '../Hooks/addRow';
import updateRow from '../Hooks/updateRow';
import deleteRow from '../Hooks/deleteRow';
import getAllEmployees from '../Hooks/getAllEmployees';


function App() {
    const [entries, setEntries] = useState({
        data: [
            {
                id: "",
                first_name: "",
                last_name: "",
                phone: "",
                address: "",
                title: "",
            }
        ]
    });

    const [state] = React.useState({
        columns: [
            { title: "First Name", field: "first_name", type: "string" },
            { title: "Last Name", field: "last_name", type: "string" },
            { title: "Phone", field: "phone", type: "number"},
            { title: "Address", field: "address", type: "string" },
            { title: "Title", field: "title", type: "string" }
        ] 
    });

    return (
        <div>
            <MaterialTable
                title="Employee Database"
                columns={getAllEmployees.columns}
                
                editable={{addRow, updateRow, deleteRow}}
            />
        </div>
    );
}

export default App;