import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import styled from "styled-components"
import {NavLink} from 'react-router-dom'

function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/Chinese'}>
            <GiChopsticks/>
            <h4>Chinese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    
        @media only screen and (max-width: 769px) {
            margin: 1rem 0rem;
        }
`

const SLink = styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    border-radius:50%;
    margin-right:2rem;
    text-decoration:none;
    background:linear-gradient(35deg, #494949, #313131);
    width:6rem;
    height:6rem;
    cursor:pointer;
    transform:scale(0.8);

    &.active{
        background:linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }

        h4{
            color:white;
        }
    }

        @media only screen and (max-width: 769px) {
            margin-right:0rem;
        }
        
        @media only screen and (max-width: 426px) {
            font-size:0.5rem;
            width:4rem;
            height:4rem;
            line-height:1rem;
        }

    h4{
        color:#fff;
        font-size:0.8rem;
            
            @media only screen and (max-width: 426px) {
                font-size:0.5rem;
            }
    }

    svg{
        color:#fff;
        font-size: 1.5rem;
            
            @media only screen and (max-width: 426px) {
                font-size:1.2rem;
            }
    }
`

export default Category