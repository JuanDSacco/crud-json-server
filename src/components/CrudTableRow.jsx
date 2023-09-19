import React from 'react'

const CrudTableRow = ({el,setDataToEdit,deleteData}) => {

    let{nombre,tipo,id} = el

    return (
        <>
            <tr>
                <td>{nombre}</td>
                <td>{tipo}</td>
                <td>
                    <button onClick={() => {setDataToEdit(el)}}>Editar</button>
                    <button onClick={() => deleteData(id)} >Eliminar</button>
                </td>
            </tr>
        </>
    )
}

export default CrudTableRow
