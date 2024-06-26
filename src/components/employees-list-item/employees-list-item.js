import {Component} from 'react';
import './employees-list-item.css';

class EmployessListItem extends Component{
    constructor (props) {
        super(props);
        this.state = {
            increase: false,
            promote: false,
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase,
        }))
    }

    onPromote = () => {
        this.setState(({promote}) => ({
            promote: !promote,
        }))
    }

    render() {
        const {name,salary, onDelete} = this.props;
        const {increase, promote} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }
        if (promote) {
            classNames += ' like';
        }
        return (
            <li className={classNames} >
                <span className="list-group-item-label" onClick={this.onPromote}>{name}</span>
                <input 
                    type="text" 
                    className="list-group-item-input" 
                    defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        type='button'
                        className="btn-cookie btn-sm"
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button 
                        type='button'
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
    }

export default EmployessListItem;