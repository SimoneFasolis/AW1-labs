import Nav from 'react-bootstrap/Nav';
import { Link, NavLink} from 'react-router-dom';

import {filters} from './data';

function Filter(props) {
    return (
        <NavLink 
            to={ {
                pathname: `${props.url}`,
                state: { url: props.url }
            } }
            
            className="rounded-0 border-top text-dark hover-bg-light nav-link"
            >
            {props.text}
        </NavLink>
    );
}

function FilterList(props) {
    const filterList = filters.map( filter => <Filter key={filter.id} {...filter} />)
    return (
        <Nav variant="pills" className="flex-column" defaultActiveKey="1" id="filter-list">
            {filterList}
        </Nav>
    );
}

/* function Filter(props) {
    return <ListGroup.Item className={props.active && "bg-info border-info"} active={props.active}>{props.text}</ListGroup.Item>;
}

function FilterList() {
    const filterList = filters.map( filter => <Filter key={filter.id} {...filter}/>)
    return (
        <ListGroup className="rounded-0">
            {filterList}
        </ListGroup>
    );
} */

export default FilterList;