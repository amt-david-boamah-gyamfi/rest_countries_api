import styled from 'styled-components';
import { useContext } from 'react';
import { myContext } from '../Contexts/MyContexts';

export const Header = styled.div`
     --primary-light-mode-color :hsl(200, 15%, 8%);
    --primary-light-mode-background-color:hsl(0, 0%, 98%); 
    --primary-dark-mode-color:white;
    --primary-dark-mode-background-color:#2B3844;
    box-shadow: 2px 2px 1em rgba(0,0,0,0.2);

    transition: color 5s ease, background-color 0.5s ease;
    
    
    color: ${props => {
        const color = useContext(myContext);
        return color?.theme ? 'var(--primary-dark-mode-color)' : 'var(--primary-light-mode-color)'
    }};

    background-color: ${props => {
        const bColor = useContext(myContext);
        return bColor?.theme ? 'var(--primary-dark-mode-background-color)' : 'var(-primary-light-mode-background-color)'
    }};

padding-left: 5%; 
padding-right: 5%;   
display: flex;
 justify-content: space-between;
 align-items: center;




   
  

   h1 {
    font-size: 20px;
    font-weight: 800;
    
   }

   p{
font-size: 15px;
font-weight: 600;
cursor: pointer;

   }

    .react-icon {
        margin-right: 15px;
    }

    


    @media (min-width:481px){
        
            padding-left: 10%;
   padding-right: 10%;
        
       


   h1 {
    font-size: 25px;
       }
}
`


