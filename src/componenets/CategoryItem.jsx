import { Button } from '@material-ui/core';
import { Info } from '@material-ui/icons';
import React from 'react'
import styledComponents from 'styled-components'
import { mobile } from '../resposive'; 
import {Link } from 'react-router-dom'

const Container = styledComponents.div`
position:relative;
flex:1;
margin:3px;
 height:70vh;
`;
const Image = styledComponents.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({height:"30vh"})}

`;
const Infoo= styledComponents.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%; 
display: flex;
flex-direction:column;
align-items:center;
justify-content: center;
 

`;
const Title = styledComponents.h1`
color:white;


margin-bottom:20px;

`;
const Buttonc = styledComponents.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600;

`;

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to='/ProductList'>
      <Image src={item.img}/>
      <Infoo>
        <Title>{item.title}</Title>
        <Buttonc>SHOP NOW</Buttonc>
        
      </Infoo>
      </Link>
    </Container>
  )
}

export default CategoryItem
