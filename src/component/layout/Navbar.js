import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Navbar extends Component {
    // Constructor(){
    //     console.log(123)
    // }

    static defaultProps = {
        title: 'Github finder'
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className="navbar bg-primary">          
                <h2>{this.props.title}</h2>
            </nav>
        )
    }
}

export default Navbar
