import styled from 'styled-components'
import { useContext } from 'react';
import { myContext } from '../../Contexts/MyContexts';

export const MySearch = styled.div`

display: flex;
    flex-direction: column;
  
    padding-top: 24px;
    padding-left: 5%;
    padding-right: 5%;
 


   --primary-light-mode-color :hsl(200, 15%, 8%);
    --primary-light-mode-background-color:hsl(0, 0%, 98%); 
    --primary-dark-mode-color:white;
    --primary-dark-mode-background-color:#202C36;
    
    
    color: ${props => {
        const color = useContext(myContext);
        return color?.theme ? 'var(--primary-dark-mode-color)' : 'hsl(0, 0%, 52%)';
    }};

    background-color: ${props => {
        const color = useContext(myContext);
        return color?.theme ? 'var(--primary-dark-mode-background-color)' : 'var(-primary-light-mode-background-color)'
    }};

transition: color 5s ease, background-color 0.5s ease;

    input {
        height: 48px;
        border-style: none;
        box-shadow: 2px 2px 1em rgba(0,0,0,0.2);
        margin-bottom: 40px;
        border-radius: 5px;
        padding-left: 15%;
    

        color: ${props => {
        const color = useContext(myContext);
        return color?.theme ? 'var(--primary-dark-mode-color)' : 'hsl(0, 0%, 52%)'
    }};

    background-color: ${props => {
        const bColor = useContext(myContext);
        return bColor?.theme ? '#2B3844' : 'var(-primary-light-mode-background-color)'
    }};
   
    }

    .search-icon {
        position: absolute;
        top:104px;
        left: 40px;
        transform: translateY(-50%);
    }

    select {
            height: 48px;
            border-style: none;
            box-shadow: 2px 2px 1em rgba(0,0,0,0.2);
            border-radius: 5px;
            width: 50%;
            padding-left: 5%;
           

            color: ${props => {
        const color = useContext(myContext);
        return color?.theme ? 'var(--primary-dark-mode-color)' : 'hsl(0, 0%, 52%)'
    }};

background-color: ${props => {
        const bColor = useContext(myContext);
        return bColor?.theme ? '#2B3844' : 'var(-primary-light-mode-background-color)'
    }};
          
        }
      


        @media (min-width: 481px){
           
                display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
  

           
    

   input {
       
        margin-bottom: 0px;
        width: 35%;
        padding-left: 6%;
        
    }

    .search-icon {
        top:116px;
        left: 12%;     
    }

    select {
            width: 150px;
            padding-left: 2%;
            cursor: pointer;
        }

        }
`