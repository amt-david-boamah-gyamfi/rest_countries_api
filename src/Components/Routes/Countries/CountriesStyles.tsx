import styled from 'styled-components';

export const Countriesstyle = styled.div`
    padding-left: 15%;
    padding-right: 15%;
        /* margin-top: 48px; */
        padding-top: 48px;
    display: grid;
    row-gap: 40px;
    color: hsl(200, 15%, 8%);
   background-color: hsl(0, 0%, 98%);
 
    
    a {
        text-decoration: none;
        color: hsl(200, 15%, 8%);
    }

    .grid {
        box-shadow: 2px 2px 1em rgba(0,0,0,0.2);
        border-radius: 8px;
        color: hsl(200, 15%, 8%);
   background-color: hsl(0, 0%, 98%);
  
  
   
    }

    img {
        width: 100%;
        border-radius: 8px 8px 0 0;
        height: 200px;
    }

    .height {
               padding-top: 10px;
        padding-bottom: 15px;
    }

    h1 {
        padding-left: 7%;
        font-size: 18px;
        color: hsl(200, 15%, 8%);
        background-color: hsl(0, 0%, 98%);
    }

    p {
        padding-left: 7%;
        font-weight: 600;
        color: hsl(200, 15%, 8%);
        background-color: hsl(0, 0%, 98%);
      

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