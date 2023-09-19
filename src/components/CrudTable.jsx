import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
    return (
        <div className="divCrudTable">
        <h3>Tabla de Datos</h3>
        <table>
            <thead>
            <tr className="trCrudTable">
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody className="tbodyCrudTable">
            {data.length === 0 ? (
                <tr>
                <td>Sin datos</td>
                </tr>
            ) : (
                data.map((el) => (
                <CrudTableRow
                    key={el.id}
                    el={el}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                />
                ))
            )}
            </tbody>
        </table>
        </div>
    );
};

export default CrudTable;
