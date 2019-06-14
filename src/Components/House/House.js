import React, {Component} from 'react'
import Axios from 'axios';
import store, {DELETE_HOUSE} from '../../store'

class House extends Component {
    constructor(props) {
        super(props)
    }

    deleteHouse (id) {
        Axios.delete(`/api/houses/${id}`).then( res => {
            store.dispatch({
                type: DELETE_HOUSE,
                payload: res.data
            })
        }
        ).catch(() => console.log('error code 400'))
    }
    render() {
        let {property} = this.props
        return (
            <div>
                <h1>{property.name}</h1>
                <h4>{property.address}</h4>
                <h4>{property.city}</h4>
                <h4>{property.state}</h4>
                <h4>{property.zipCode}</h4>

                <button onClick={() => this.deleteHouse(property.id)}>Delete</button>

            </div>

        )
    }
}

export default House