import styled from 'styled-components';
import { useContext } from 'react';
import { myContext } from '../../Contexts/MyContexts';
export const Countriesstyle = styled.div`
   --primary-light-mode-color :hsl(200, 15%, 8%);
    --primary-light-mode-background-color:hsl(0, 0%, 98%); 
    --primary-dark-mode-color:white;
    --primary-dark-mode-background-color:#202C36;

    padding-left: 15%;
    padding-right: 15%;
        padding-bottom: 58%;
        padding-top: 48px;
    display: grid;
    row-gap: 40px;
    color: ${props => {
        const color = useContext(myContext);
        return color?.theme ? 'var(--primary-dark-mode-color)' : 'var(--primary-light-mode-color)';
    }};

    background-color: ${props => {
        const color = useContext(myContext);
        return color?.theme ? 'var(--primary-dark-mode-background-color)' : 'var(-primary-light-mode-background-color)'
    }};

transition: color 5s ease, background-color 0.5s ease;
 
    
    a {
        text-decoration: none;
        color: hsl(200, 15%, 8%);
    }

    .grid {
        box-shadow: 2px 2px 1em rgba(0,0,0,0.2);
        border-radius: 8px;
        color: ${props => {
        const color = useContext(myContext);
        return color?.theme ? 'var(--primary-dark-mode-color)' : 'hsl(0, 0%, 52%)'
    }};

    background-color: ${props => {
        const bColor = useContext(myContext);
        return bColor?.theme ? '#2B3844' : 'var(-primary-light-mode-background-color)'
    }};
  
   
    }

    img {
        width: 100%;
        border-radius: 8px 8px 0 0;
        height: 200px;
    }

    .height {
               padding-top: 10px;
        padding-bottom: 15px;

        color: ${props => {
        const color = useContext(myContext);
        return color?.theme ? 'var(--primary-dark-mode-color)' : 'var(--primary-light-mode-color)'
    }};

    background-color: ${props => {
        const bColor = useContext(myContext);
        return bColor?.theme ? '#2B3844' : 'var(-primary-light-mode-background-color)'
    }};
    }

    h1 {
        padding-left: 7%;
        font-size: 18px;
        
    }

    p {
        padding-left: 7%;
        font-weight: 600;
        
      

        span {
            font-weight: 300;
        }
    }


    @media(min-width:481px){
        grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
    row-gap: 50px;

    padding-left: 10%;
    padding-right: 10%;


    h1 {
        padding-left: 7%;
        font-size: 18px;
    }

    p {
        padding-left: 7%;
        font-weight: 600;

        span {
            font-weight: 300;
        }
    }

    }


    @media(min-width: 601px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media(min-width: 901px){
        grid-template-columns: repeat(4, 1fr);
    }
`