import React from "react";
import Button from "../components/Button";
import TableElements from "../components/TableElements";
import './FilePage.css';

const FilePage = ({file, onError}) => {
    return (
        <div className="FilePage">
            <Button text='Загрузить новый файл'  onError={onError}/>
            <TableElements file={file} />
        </div>
    )
}

export default FilePage;