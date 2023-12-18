import React from "react";
import TableElements from "../components/TableElements";
import './FilePage.css';

const FilePage = ({file, onFile}) => {
    const uploadNewFile = () => {
        onFile([])
        localStorage.clear()
    }
    return (
        <div className="FilePage">
            <button type="button" onClick={() => uploadNewFile()}>Загрузить новый файл</button>
            <TableElements file={file} />
        </div>
    )
}

export default FilePage;