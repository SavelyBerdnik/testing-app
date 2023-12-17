import React from "react";
import Button from "../components/Button";
import TableElements from "../components/TableElements";

const FilePage = ({file, onFile, onError}) => {
    return (
        <div>
            <Button text='Загрузить новый файл' onFile={onFile} onError={onError}/>
            <TableElements content={file}/>
        </div>
    )
}

export default FilePage;