import React, { Component } from 'react'
import './Navbar.css'
import {MenuItems} from './MenuItems'

class Navbar extends Component {
    state = { clicked : false}


    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    render() {
        return (
            <nav className = "NavbarItems">
                    <h1 className = "navbar-logo"> LeaveMng <i class="fas fa-project-diagram"></i>  </h1>

                    <ul className = {this.state.clicked ? "nav-menu active" : "nav-menu"}>

                        {MenuItems.map ((item, index) => {
                            return (
                                <li key = {index}>
                                    <a className = {item.cName} href = {item.url} >{item.title}</a>
                                </li>
                            )
                        })}


                            
                    </ul>
            </nav>
        )
    }
}

export default Navbar
