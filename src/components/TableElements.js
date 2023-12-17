import React from "react";
import './TableElements.css';

const TableElements = ({content}) => {
    console.log(content);
    return (
        <table className="TableElements">
            <thead>
                <tr>
                    <td>Имя</td>
                    <td>Номер телефона</td>
                    <td>email</td>
                    <td>Дата рождения</td>
                    <td>Адрес</td>
                </tr>
            </thead>
            <tbody>
                {content.map((rowElements) => <tr>{rowElements.map((el) => <td>{el}</td>)}</tr>)}
            </tbody>
        </table>
    )
}

export default TableElements;