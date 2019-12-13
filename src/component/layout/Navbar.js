import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {
    static defaultProps = {
        title: 'Github finder'
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render() {
        return (
            <navbar className="navbar bg-primary">
                <h2>{this.props.title}</h2>
            </navbar>
        )
    }
}

export default Navbar
