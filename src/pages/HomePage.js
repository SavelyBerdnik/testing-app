import React from "react";
import Button from "../components/Button";
import './HomePage.css';

const HomePage = ({onError}) => {
    return (
        <div className="HomePage">
            <h2 className="homeTitle">Выберите файл в формате CSV</h2>
            <Button className='homeButton' text='Выберите файл' onError={onError}/>
        </div>
    )
}

export default HomePage;