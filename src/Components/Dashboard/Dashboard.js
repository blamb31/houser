import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

import House from '../House/House'
import store, {GET_HOUSES} from '../../store';


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            properties: []
        }
    }

    componentDidMount(){
        Axios.get('/api/houses').then( houseList => {
            console.log(houseList.data)
            store.dispatch({
                type: GET_HOUSES,
                payload: houseList.data
            })
        })
        .catch(err => {
            console.log(err)
        })
        store.subscribe( () => {
            const reduxState = store.getState()
            this.setState({
                ...this.state,
                properties: reduxState.properties
            })
        })
    }

    render() {
        let property = this.state.properties.map( (indProperty, index )=> {
            return (
                <div>
                    <House property={indProperty} key={index} />
                </div>
            )
        })
        return (
            <div>
                Dashboard
                <Link to='/wizard' ><button>Add New Property</button></Link>
                {property}
            </div>

        )
    }
}

export default Dashboard