import styled from 'styled-components';

export const Individual = styled.div`
padding-left: 5%;
padding-right: 5%;



 p {
  display: flex;
  margin-top: 40px;
  padding-left:45px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  border-radius: 8px;
  width: 90px;
  box-shadow: 2px 2px 1em rgba(0,0,0,0.2);

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
            
            width: 96px;
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
        color: inherit;
            

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