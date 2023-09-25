import React, { useState,useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import '../styles/style.scss'
import { helpHttp } from "../helpers/helpHttp";


    const CrudApi = () => {
    const [db, setDb] = useState([]);

    const [dataToEdit, setDataToEdit] = useState(null);

    let api = helpHttp();
    let url = 'http://localhost:5000/pokemon';

    useEffect(() => {

        api.get(url).then((res) => {
            if(!res.err){
                setDb(res)
            }else {
                setDb(null)
            }
        })
    },[])
    
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
        <div className="divCrudApp">
            <h1>CRUD Pókemon</h1>
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

export default CrudApi;