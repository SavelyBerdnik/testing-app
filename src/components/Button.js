import React from "react";
import './Button.css';

const Button = ({text, onError}) => {
    const CheckFile = (selectFile) =>  {
        if (selectFile){
            if (selectFile.type === 'text/csv'){
                let reader = new FileReader()
                reader.readAsText(selectFile, 'CP1251')
                reader.onload = (event) => {
                    let csvfile = event.target.result.split('\n');
                    let file = csvfile.map((el) => {
                        let element = el.split('"').slice(0, 2)
                        return [...element[0].split(',').slice(0, 4), element[1]]
                    }).slice(1, csvfile.length - 1)
                    localStorage.setItem('fileData', JSON.stringify(file))
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