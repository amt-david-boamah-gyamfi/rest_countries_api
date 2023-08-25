import styled from 'styled-components';


export const Header = styled.div`
    --primary-light-color : hsl(200, 15%, 8%);
    --primary-light-background-color:hsl(0, 0%, 98%); 
    color: var(--primary-light-color);
background-color: var(--primary-light-background-color);
/* background-color: blue; */
padding-left: 5%; 
padding-right: 5%;   
display: flex;
 justify-content: space-between;
 align-items: center;
 /* width: 100%; */



   
  

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


