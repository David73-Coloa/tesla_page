import styled from 'styled-components'

export const Element = styled.div`
    scroll-snap-align: start;
    height:100vh;

    &:nth-child(1) {
        background:#4876FF;
    }

    &:nth-child(2) {
        background:#66CDAA;
    }

    &:nth-child(3) {
        background:#FF6A6A;
    }

    &:nth-child(4) {
        background:#AB82FF;
    }

    &:nth-child(5) {
        background:#EEDD82;
    }

    &:nth-child(6) {
        background:#FF82AB;
    }

    &:nth-child(7) {
        background:#FFC1C1;
    }

`

export const Container = styled.div`
    position: sticky;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    scroll-snap-align: start;
    height:100vh;

    .buttons {
        flex-direction:column;
        position:relative;
        top:700px;
        right:220px;
        display:flex;
        justify-content:center;
        align-items:flex-end;
    }

    .button-order {
        background:rgb(26,23,32);
        margin:0px -50px 20px 0px;
        width:165px;
        color:white;

    }

    .button-inventory {
        margin:0px -60px 0px 0px;
        width:185px;
        background:rgb(255,255,255);
    }

    .buttons button {
        border-radius:30px;
        height:40px;
        font-size:10px;
        text-transform:uppercase;
    }

    @media (min-width:518px) {
        .buttons {
            right:450px;
        }
    }

    @media (min-width:518px) and (orientation:landscape) {
        .buttons {
            flex-direction:row;
            left:0px; 
        }

        .button-inventory {
            margin:0 0px 20px 70px;

         }
        

    }


`
