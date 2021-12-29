import React from 'react';
import './search-block.css'

class SearchBlock extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            term: '',
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term);
    }

    render() {
        return(
            <input
            value={this.state.term} 
            type="text"
            className="form-control search-input"
            placeholder="Поиск сотрудника"
            onChange={this.onUpdateSearch}/>
        )
    }

}

export default SearchBlock;