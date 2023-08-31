import styled from 'styled-components';
import { useContext } from 'react';
import { myContext } from '../../Contexts/MyContexts';

export const Individual = styled.div`
padding-top: 50px;
padding-left: 5%;
padding-right: 5%;
height: 100vh;

padding-bottom: 200px;

--primary-light-mode-color :hsl(200, 15%, 8%);
    --primary-light-mode-background-color:hsl(0, 0%, 98%); 
    --primary-dark-mode-color:white;
    --primary-dark-mode-background-color:#202C36;

 
    

    color: ${props => {
        const color = useContext(myContext);
        return color?.theme ? 'var(--primary-dark-mode-color)' : 'var(--primary-light-mode-color)'
    }};

    background-color: ${props => {
        const bColor = useContext(myContext);
        return bColor?.theme ? 'var(--primary-dark-mode-background-color)' : 'var(-primary-light-mode-background-color)';
    }};
    
transition: color 5s ease, background-color 0.5s ease;


 .arrow {
  display: flex;
cursor: pointer;
  padding-left:45px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  border-radius: 8px;
  width: 90px;
  box-shadow: 2px 2px 1em rgba(0,0,0,0.2);

  color: ${props => {
        const color = useContext(myContext);
        return color?.theme ? 'var(--primary-dark-mode-color)' : 'hsl(0, 0%, 52%)'
    }};

    background-color: ${props => {
        const bColor = useContext(myContext);
        return bColor?.theme ? '#2B3844' : 'var(-primary-light-mode-background-color)'
    }};
   
    

 }

 .single_grid {
    padding-top:70px;
    display: grid;
    row-gap: 30px;

    

    .image {
        width: 100%;
        
        height: 100%;
        border-radius: 5px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }
    }

    .first {
        line-height: 1.2;
        

        h1{
        font-size: 23px;
    }

    h4 {
        font-weight: 600;

        span {
            font-weight: 300;
        }
    }
    }

    .second {
line-height: 1.2;

        h4 {
        font-weight: 600;

        span {
            font-weight: 300;
        }
    }
    }

    .third {
        
        display: flex;
       
        flex-wrap: wrap;
        align-items: center;

        a {
            font-weight: 600;
            width: 34%;
            padding: 3px;
            height: 40px;
            line-height: 3;
           text-align: center;
          display: flex;
          justify-content: center;
         box-shadow: 2px 2px 1em rgba(0,0,0,0.2);
          align-items: center;
        margin-left: 10px;
        border-radius: 5px;
        text-decoration: none;
        color: ${props => {
        const color = useContext(myContext);
        return color?.theme ? 'var(--primary-dark-mode-color)' : 'hsl(0, 0%, 52%)'
    }};

    background-color: ${props => {
        const bColor = useContext(myContext);
        return bColor?.theme ? '#2B3844' : 'var(-primary-light-mode-background-color)'
    }};
   
            

        }
    }

 }

 @media (min-width:481px){
    padding-left: 10%;
    padding-right: 10%; 
}

@media (min-width: 900px){
.single_grid{
    
    grid-template-columns: 45% 20% 30%;
    grid-template-rows: 70% 30%;
    column-gap: 2.5%;
    
    align-content: center;

    .image{
        grid-row: 1/3;
    }
    
    .second {
        align-self: center;
    }

    .third {
        grid-column: span 2;
    }
}


}
  
` 