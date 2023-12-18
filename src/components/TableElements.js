import React from "react";
import './TableElements.css';

const TableElements = ({file}) => {
    console.log(file)
        
    return (
        <table className="TableElements">
            <thead className="tableHead">
                <tr>
                    <td>Имя</td>
                    <td>Номер телефона</td>
                    <td>email</td>
                    <td>Дата рождения</td>
                    <td>Адрес</td>
                </tr>
            </thead>
            <tbody className="tableBody">
                {file.map((rowElements, index) => 
                    <tr key={index}>
                        {rowElements.map((el, i) => <td key={i}>{el}</td>)}
                    </tr>)}
            </tbody>
        </table>
    )
}

export default TableElements;