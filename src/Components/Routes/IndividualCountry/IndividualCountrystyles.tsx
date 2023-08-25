import styled from 'styled-components';

export const Individual = styled.div`
    color: hsl(200, 15%, 8%);
        background-color: hsl(0, 0%, 98%);
        /* margin-top: 0; */
        padding-top: 40px;
        margin-top: 2px;

    p{
        display: flex;
        align-items: center;
        /* padding-left: 5%; */
        justify-content: center;
        box-shadow: 2px 2px 1em rgba(0,0,0,0.2);
        width: 104px;
        height: 32px;
        margin-left: 5%;
        /* margin-top: 40px; */
        cursor: pointer;
        margin-top: 0;
        color: hsl(200, 15%, 8%);
        background-color: hsl(0, 0%, 98%);
    }

    .single_grid {
        display: grid;
        row-gap: 0px;
margin-top: 64px;
padding-left: 5%;
padding-right: 5%;
color: hsl(200, 15%, 8%);
        background-color: hsl(0, 0%, 98%);
    }

    .single_grid h4 {
        font-weight:600;
        color: hsl(200, 15%, 8%);
        background-color: hsl(0, 0%, 98%);
    }

    .image {
        border-radius: 7px;
        margin-bottom: 40px;
    }

    img {
        width: 100%;
        height: 229px;
        border-radius: 7px;
    }

    h1{
        font-size: 25px;
        margin-bottom: 40px;
        color: hsl(200, 15%, 8%);
        background-color: hsl(0, 0%, 98%);
    }

    span{
        font-weight: 300;
    }

    .right{
        display: grid;

    }

    .first {
        line-height: 12px;
        color: hsl(200, 15%, 8%);
        background-color: hsl(0, 0%, 98%);
    }

    .second {
        line-height:12px;
        color: hsl(200, 15%, 8%);
        background-color: hsl(0, 0%, 98%);
        
    }

    .third {
        line-height: 12px;
        color: hsl(200, 15%, 8%);
        background-color: hsl(0, 0%, 98%);
       
    }

 


    @media(min-width:481px){
padding-left: 10%;
padding-right: 10%;

p{
    margin-left: 0;
}

        .single_grid {
            /* display: grid;
        row-gap: 0px; */
/* border: 1px solid red; */
/* margin-top: 64px;
padding-left: 5%;
padding-right: 5%;
       */
padding-left: 0%;
padding-right: 0%;
grid-template-columns: repeat(2, 1fr);
align-content: center;
column-gap: 10%;
    }

    img {
        width: 100%;
        height: 401px;
        border-radius: 7px;
    }

    .right{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(3, 1fr);
        align-content: center;
        column-gap: 10%;

    }
    
    .first {
        grid-row: 1/3;
        align-self: center;
    }

    .second {
        justify-self: end;
        grid-row:1/3;
        align-self: center;
    }

    .third {
        grid-column: span 2;
    }

   
    }
    
` 