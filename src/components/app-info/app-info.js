import React from 'react';
import './app-info.css'

const AppInfo = ({employees, rised}) => {

    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее количество сотрудников: {employees} </h2>
            <h2>Премию получат: {rised} </h2>
        </div>
    )
}

export default AppInfo;