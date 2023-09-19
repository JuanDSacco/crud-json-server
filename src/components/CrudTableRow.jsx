import React from 'react'

const CrudTableRow = ({el,setDataToEdit,deleteData}) => {

    let{nombre,tipo,id} = el

    return (
        <>
            <tr className='trCrudTableRou'>
                <td>{nombre}</td>
                <td>{tipo}</td>
                <td>
                    <button onClick={() => {setDataToEdit(el)}}><i class="fa-solid fa-pen-to-square"></i></button>
                    <button onClick={() => deleteData(id)} ><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        </>
    )
}

export default CrudTableRow
