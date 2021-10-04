import styled from "styled-components";

export const BoxModal = styled.div`

  width: auto;




`


export const ModalCart = styled.div`

  @keyframes modal {
    from {
      transform: translate3d(0px, -60px, 0px);
    }

    to {
      transform: translate3d(0px, 0px, 0px);
    }
  }
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 12rem;
  height: 12rem;
  overflow-y: scroll;
  border: 1px solid lightblue;
  background-color: lightblue;
  animation: modal 0.5s;
  
  
  @media screen and (min-width: 320px) {

    width: 20000rem;
    height: 20rem;
    margin-left: 1rem;

  }




  @media screen and (min-width: 768px) {

    border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 30rem;
  height: 20em;
  border: 1px solid lightblue;
  background-color: lightblue;
  animation: modal 0.5s;
  overflow-y: scroll;
  }



`;

export const ModalItems = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-bottom: 1px solid black;
  background-color: white;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  width: 12rem;
  height: auto;
`;

export const TitleItems = styled.h2`
  margin: 1rem;
  font-size: 1rem;
  font-family: sans-serif;
  font-weight: bold;
`;

export const AmountItems = styled.p`
  font-size: 0.8rem;
  color: darkgreen;
  font-weight: bold;
  margin: 1rem;
  background-color: #dbe2da;
  padding: 1rem;
  border-radius: 2rem;
`;
export const PriceItems = styled.p`
  font-size: 0.8rem;
  color: darkgray;
  font-weight: bold;
  margin: 1rem;
`;
export const ImgItems = styled.img`
  background-color: transparent;
  width: 8rem;
  height: 5rem;
`;

export const EmptyCartAlert = styled.p`
  margin: 1rem;
  font-size: 1rem;
  font-weight: bold;
  font-family: sans-serif;
`;

export const BoxLottie = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
