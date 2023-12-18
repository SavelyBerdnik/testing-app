import React from "react";
import Button from "../components/Button";
import './HomePage.css';

const HomePage = ({onError, onFile}) => {
    return (
        <div className="HomePage">
            <h2 className="homeTitle">Выберите файл в формате CSV</h2>
            <Button text='Выберите файл' onError={onError} onFile={onFile} />
        </div>
    )
}

export default HomePage;