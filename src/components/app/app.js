import React from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import SearchBlock from '../search-block/search-block';
import EmployeesAdd from '../employees-add/employees-add'
import './app.css';

function App() {

    const data = [
        {name:"John C." , salary: 800, increase: false, id: 1},
        {name:"Alex M." , salary: 600, increase: true, id: 2},
        {name:"Carl W." , salary: 3500, increase: false, id: 3},
        {name:"Mark F." , salary: 1500, increase: false, id: 4},
    ];


    return (
        <div className="app">
            <AppInfo/>

            <div className="search-block">
                <SearchBlock/>
                <AppFilter/>
            </div>
            <EmployeesList data = {data}/>
            <EmployeesAdd/>
        </div>
    )
}

export default App;