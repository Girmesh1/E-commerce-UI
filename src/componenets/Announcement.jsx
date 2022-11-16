import styledComponents from "styled-components"
import React from "react";
const Container = styledComponents.div`
height: 30px;
background-color: #024dff;
color: white;
dispaly:flex;
font-size:14;
font-weight:500;
text-align:center;
justify-content:center;
`;

const announcment = () => {
  return (
    <Container>
      Super Deal Free Shippig on Order over $100 !
    </Container>
  )
}

export default announcment
