import {React, useState} from 'react'
import styled from "styled-components"
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Search() {

    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate(`/searched/${input}`)
    }

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch/>
            <input onChange={(e)=>setInput(e.target.value)} type="text" value={input}/>
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin:0rem 20rem;
        @media only screen and (max-width: 1025px) {
            margin: 0rem 5rem;
        }
        @media only screen and (max-width: 769px) {
            margin: 0rem 1rem;
        }
        @media only screen and (max-width: 426px) {
            margin: 0rem;
        }

    div{
        width:100%;
        position:relative;
    }
    input{
        border:none;
        background:linear-gradient(35deg, #494949, #313131);
        font-size:1rem;
        color:white;
        padding:1rem 3rem;  
        border-radius:1rem;
        outline:none;
        width:100%;
        
        @media only screen and (max-width: 426px) {
            padding:0.5rem 2rem 0.5rem 2.5rem;
            font-size:0.8rem;
            border-radius:0.8rem;
        }
    }
    svg{
        position:absolute;
        top:50%;
        left:0%;
        transform:translate(100%, -50%);
        color:white;
    }
`

export default Search