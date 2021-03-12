import styled from 'styled-components'
export const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    
    .icon-bar {
        display: block;
        width: 25px;
        height:6px;
        margin:2px;
        transition: background-color 0.2s ease-in-out,
                transform 0.2s ease-in-out,
                opacity 0.2s ease-in-out;
        background-color: rgb(0,0,0);
    }

    .navbar-toggle {
        border: none;
        width: 40px;
        justify-content:center;
        background:transparent;
        height: 20px;
        display: flex;
        margin:16px;
        flex-direction: column;
    }

    .navbar-logo {
        letter-spacing:5px;
        margin:10px;
        font-size:22px;
        color:black;
    }

`
