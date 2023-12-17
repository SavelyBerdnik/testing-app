import React from "react";
import './Button.css';

const Button = ({text, onFile, onError}) => {
    const CheckFile = (selectFile) =>  {
        if (selectFile){
            if (selectFile.type === 'text/csv'){
                let reader = new FileReader()
                reader.readAsText(selectFile, 'CP1251')
                reader.onload = (event) => {
                    let csvfile = event.target.result.split('\n');
                    let file = csvfile.map((el) => el.split('"').slice(0, 2)).slice(1)
                    file = file.map((el) => [...el[0].split(',').slice(0, 4), el[1]])
                    onFile(file)
                    onError('')
                }
            } else {
                onError('Неправильный формат файла, разрешены только файлы .CSV')
            }
        }
    }
    return (
        <label className="Button" htmlFor="file">
            {text}
            <input type="file" name="file" id="file" accept=".csv" onChange={(e) => CheckFile(e.target.files[0])}/>
        </label>
    )
}

export default Button;