import {React, useEffect, useState} from 'react'
import styled from "styled-components"
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'


function Veggie() {
    const [veggie, setVeggie] = useState([])

    useEffect(() => {
        getVeggie();
    }, [])

    const getVeggie = async () => {

        const check = localStorage.getItem('veggie')

        if(check){
            setVeggie(JSON.parse(check))
        }else{
                const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
                const data = await api.json();
                
                localStorage.setItem('veggie', JSON.stringify(data.recipes))
                setVeggie(data.recipes)
            }
    }

  return (
    <div>
        <Wrapper>
            <h3>Our Vegetarian Picks</h3>
            <Splide options={{
                perPage:3,
                arrows: false,
                pagination:false,
                drag: 'free'
            }}>
                {veggie.map((recipe) => {
                    return(
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={`/recipe/${recipe.id}`}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title}/>
                                    <Gradient/>
                                </Link>
                            </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Wrapper>
    </div>
  )
}


const Wrapper = styled.div`
    margin: 4rem 0rem;
    
        @media only screen and (max-width: 769px) {
            margin:1.5rem 0rem;
        }
`

const Card = styled.div`
    min-height: 10rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    margin: 0px 10px;

        @media only screen and (max-width: 426px) {
            min-height: 8rem;
        }
        
        @media only screen and (max-width: 376px) {
            min-height: 5rem;
            border-radius: 1rem;
            margin: 0px 5px;
        }

    img{
        border-radius: 2rem;
        width: 100%;
        height: 100%;
        position absolute;
        left:0;
        object-fit: cover;
        
    }

    p{
        position absolute;
        z-index:10;
        left: 50%;
        bottom: 0%;
        color: white;
        transform: translate(-50%, 0%);
        width:100%;
        text-align: center;
        font-weight: 600;
        font-size: 0.8rem;
        height: 40%;
        display: flex;
        justify-content:center;
        align-items:center;
        
            @media only screen and (max-width: 426px) {
                font-size: 0.4rem;
            }

            
            @media only screen and (max-width: 376px) {
                font-size: 0.3rem;
            }
    }
`

const Gradient = styled.div`
    z-index:3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`


export default Veggie