import React from "react";
import { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
    {
        id: 1,
        nombre: "Pikachu",
        tipo: "Electrico"
    },
    {
        id: 2,
        nombre: "Charmander",
        tipo: "Fuego"
    },
    {
        id: 3,
        nombre: "Bulbasour",
        tipo: "Planta"
    },
    {
        id: 4,
        nombre: "Squirtle",
        tipo: "Agua"
    }
    ];

    const CrudApp = () => {
    const [db, setDb] = useState(initialDb);

    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now()
        setDb([...db, data])
    };

    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el)
        setDb(newData);
    };

    const deleteData = (id) => {
        let isDelete = window.confirm(
            `¿Estas seguro que quieres eliminar el registro con el id '${id}'?`
        )

        if(isDelete){
            let newData = db.filter(el => el.id !== id)
            setDb(newData);
        }else{
            return
        }
    };

    return (
        <div>
        <h2>CRUD App</h2>
        <CrudForm
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
        />
        <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
        />
        </div>
    );
};

export default CrudApp;
