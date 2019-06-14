import React, {Component} from 'react'

class House extends Component {
    constructor(props) {
        super(props)
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

                <button>Delete</button>

            </div>

        )
    }
}

export default House