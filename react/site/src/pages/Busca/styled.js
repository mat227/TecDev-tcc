import styled from 'styled-components'

const Container = styled.div`
      min-height: 100vh;
            background-image: url('/assets/images/bacckground.svg');
            background-color: #125375;
            width: 100%;
            font-family: "Rowdies";

        


    .search {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        margin-top: 2rem;
        color: white;
    }

    .search div {
        font-size: 2rem;
        font-family: 'Rowdies';
        font-weight: 400;
    }

   .map{
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
justify-content:center;

margin-bottom:6em;
   }
`

export { Container }