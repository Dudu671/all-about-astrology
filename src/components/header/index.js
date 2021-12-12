import React from "react"
import styles from './styles.scss'

import logo from '../../assets/images/logo.png'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <img src={logo} alt="" />
                    <li>Home</li>
                    <li>Horoscope</li>
                    <li>Academic</li>
                    <li>About</li>
                    <li>Sign In</li>
                </ul>
            </nav>
        </header>
    )
}