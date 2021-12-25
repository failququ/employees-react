import React from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import SearchBlock from '../search-block/search-block';
import EmployeesAdd from '../employees-add/employees-add'
import './app.css';

function App() {

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-block">
                <SearchBlock/>
                <AppFilter/>
            </div>
            <EmployeesList/>
            <EmployeesAdd/>
        </div>
    )
}

export default App;