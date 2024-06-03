import './employees-list.css';
import EmployessListItem from '../employees-list-item/employees-list-item';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployessListItem/>
            <EmployessListItem/>
            <EmployessListItem/>
        </ul>
    )
}

export default EmployeesList;