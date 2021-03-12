import React from 'react'
import { Nav } from './styled'
export default function Header() {
    return (
        <Nav>
            <a href="/" class="home-link"> 
                <div class="navbar-logo">
                    Logo 
                </div>
            </a> 
            <button type="button" class="navbar-toggle" aria-label="Open navigation"> 
                    <span class="icon-bar"></span> 
                    <span class="icon-bar"></span> 
                    <span class="icon-bar"></span>
            </button>
        </Nav>
     )

}
