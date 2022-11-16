 import { Send, SendOutlined } from '@material-ui/icons';
import React from 'react'
import styledComponents from 'styled-components'
 import { mobile } from '../resposive';

const Container =styledComponents.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const Title =styledComponents.h1`

font-size:70px;
`;

const Description=styledComponents.div`
font=size:24px;
font-weight:300;
margin-bottom:20px;
${mobile({textalign:"center"})}

`;

const InputContainer =styledComponents.div`
width:50%; 
height:35px;
background-color:white;
 display:flex;
justify-content:space-between;

border: 1px solid lightgray;
${mobile({width:"80%"})}


`;

const Input =styledComponents.input`
border:none;
flex:8;
padding-left:30px;


`;
const Button =styledComponents.button`
border:none;
background-color:#024dff;
color:white;
flex:1;
cursor:pointer;
`;


 const Newsletter = () => {
   return (
     <Container>
       <Title>Newsletter</Title>
       <Description>Get timely updates from your favorite products.</Description>
       <InputContainer>
       <Input placeholder='your email '/>
       <Button>
           <SendOutlined></SendOutlined>
           </Button> 
       </InputContainer>
     </Container>
   )
 }
 
 export default Newsletter
 