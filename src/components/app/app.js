import React from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import SearchBlock from '../search-block/search-block';
import EmployeesAdd from '../employees-add/employees-add'
import './app.css';

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [
                {name:"John C." , salary: 800, increase: false, rise: true, id: 1},
                {name:"Alex M." , salary: 600, increase: true, rise: false, id: 2},
                {name:"Carl W." , salary: 3500, increase: false, rise: false, id: 3},
                {name:"Mark F." , salary: 1500, increase: false, rise: false, id: 4},
            ],
            term: '',
            filter: 'all'
        }

        this.maxId = this.state.data.length;
    }

    deleteItem = (id) => {
        this.setState(({data}) =>{
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: ++this.maxId
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {

        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({
            term
        })
    }

    filterEmp = (items, filter) => {
        switch(filter) {
            case 'rised':
                return items.filter(item => item.rise);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items;
        }
    }

    onFilterSelection = (filter) => {
        this.setState({filter});
    }

    render() {

        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const rised = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterEmp(this.searchEmployee(data, term), filter);

        return (
            <div className="app">
                <AppInfo 
                employees = {employees}
                rised={rised}/>
    
                <div className="search-block">
                    <SearchBlock onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter = {filter} onFilterSelection={this.onFilterSelection}/>
                </div>
                <EmployeesList
                onToggleProp = {this.onToggleProp}
                data = {visibleData}
                onDelete={this.deleteItem}/>
                <EmployeesAdd onAdd ={this.addItem}/>
            </div>
        )
    }
}

export default App;