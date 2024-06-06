import {Component} from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

// class WhoAmI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             years: 27,
//             position: '',
//         }
//     }

//     nextYear = () => {
//         this.setState(state => ({
//             years: state.years + 1,
//         }))
//     }

//     commitInputChanges = (e) => {
//         this.setState({
//             position: e.target.value,
//         })
//     }

//     render() {
//         const {name,surname,link} = this.props;
//         const {years,position} = this.state;
//         return (
//             <div>
//                 <button onClick={this.nextYear}>+++</button>
//                 <h1>My name is {name}, surname - {surname}, age - {years}, position - {position}</h1>
//                 <a href={link}>My profile</a>
//                 <form>
//                     <span>Введите должность</span>
//                     <input type="text" onChange={this.commitInputChanges} />
//                 </form>
//             </div>
//         )
//     }
// }

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'Pavel Trockiy',
                    salary: 800, 
                    id: 1,
                },
                {
                    name: 'Romanov Ivan',
                    salary: 3000,
                    id: 2,
                },
                {
                    name: 'Leonid Konevsky',
                    salary: 5000,
                    id: 3,
                }
            ]
        }
        this.maxId = 4;
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id),
            }
        })
    }
    addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            id: this.maxId++,
        };
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            }
        })
    }
    render() {
        const {data} = this.state;
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm
                    onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;