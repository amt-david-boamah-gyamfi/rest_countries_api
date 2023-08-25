import styled from 'styled-components'

export const MySearch = styled.div`

    display: flex;
    flex-direction: column;
    margin-top: 1px;
    padding-top: 24px;
    padding-left: 5%;
    padding-right: 5%;
    color: hsl(200, 15%, 8%);
   background-color: hsl(0, 0%, 98%);



    
   /* color: red;
   background-color: green; */

    input {
        height: 48px;
        border-style: none;
        box-shadow: 2px 2px 1em rgba(0,0,0,0.2);
        margin-bottom: 40px;
        border-radius: 5px;
        padding-left: 15%;
        /* position: relative; */
         color: inherit; 
    background-color: inherit; 
   
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
            color: inherit;
   background-color: inherit;
          
        }
      


        @media (min-width: 481px){
           
                display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
    color: hsl(200, 15%, 8%);
   background-color: hsl(0, 0%, 98%);

           
    

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