import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios';
import store, {CREATE_HOUSE} from '../../store'


class Wizard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipCode: 0
        }
    }

    handleInputChange(input, name) {
        this.setState({
            [name]: input
        })
    }

    saveNewHouse = () => {
        Axios.post('/api/houses', this.state).then( res => {
            store.dispatch({
                type: CREATE_HOUSE,
                payload: res.data
            })
            this.setState({
                name: '',
                address: '',
                city: '',
                state: '',
                zipCode: 0
            })
        }
        
        )
    }
    
    
    
    render() {
        return (
            <div>
                Wizard
                <Link to='/' ><button>Cancel</button></Link>
                <input value={this.state.name} type='text' placeholder='Name' name='name' onChange={(event) => this.handleInputChange( event.target.value, event.target.name )} />
                <input value={this.state.address} type='text' placeholder='Address' name='address' onChange={(event) => this.handleInputChange( event.target.value, event.target.name )} />
                <input value={this.state.city} type='text' placeholder='City' name='city' onChange={(event) => this.handleInputChange( event.target.value, event.target.name )} />
                <input value={this.state.state} type='text' placeholder='State' name='state' onChange={(event) => this.handleInputChange( event.target.value, event.target.name )} />
                <input value={this.state.zipCode} type='number' placeholder='Zip Code' name='zipCode' onChange={(event) => this.handleInputChange( event.target.value, event.target.name )} />

                <Link to='/'><button href='/' onClick={this.saveNewHouse} >Complete</button></Link>
            

            </div>

        )
    }
}

export default Wizard