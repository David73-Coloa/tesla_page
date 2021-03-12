import React from 'react'
import PropTypes from 'prop-types'
import { Title,Paragrafo } from './styled'
import Header from '../../components/Header/?'
export default function Home( { numTitule }) {
    return (
        <> 
            <Header/> 
            <Title>Model {numTitule}</Title> 
            <Paragrafo>Order Online for delivery </Paragrafo> 
            <section class="buttons"> 
                <button class="button-order" type="button">Custom order</button> 
                <button class="button-inventory" type="button">EXISTING INVENTORY</button> 
            </section>
        </> 

    )

}

Home.propTypes = {
    numTitule:PropTypes.number.isRequired,

}
