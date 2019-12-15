import React from 'react'
import PropTypes from 'prop-types'

 const Navbar = (props) => {
    // Constructor(){
    //     console.log(123)
    // }

    return (
        <nav className="navbar bg-primary">          
            <h2>{props.title}</h2>
        </nav>
    )
  
}

Navbar.defaultProps = {
    title: 'Github finder'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar
