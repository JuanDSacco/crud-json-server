import React, { useState,useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import '../styles/style.scss'
import { helpHttp } from "../helpers/helpHttp";
import {IconPokeball} from '@tabler/icons-react'
import Loader from "./Loader";
import Message from "./Message";


    const CrudApi = () => {
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)


    let api = helpHttp();
    let url = 'http://localhost:5000/pokemon';

    useEffect(() => {

        setLoading(true);

        api.get(url).then((res) => {
            if(!res.err){
                setDb(res)
                setError(null)
            }else {
                setDb(null)
                setError(res)
            }

            setLoading(false)
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
            <div className="divIconPokeball"><IconPokeball size={48}/></div>
        <CrudForm
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
        />

        {loading &&  <Loader/>}
        {error && <Message msg={`Error ${error.status} : ${error.statusText}`} 
        bgColor='#dc3545'/>}

        {db && <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
        />}
        </div>
    );
};

export default CrudApi;