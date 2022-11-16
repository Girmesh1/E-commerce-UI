import { Badge, Link } from '@material-ui/core';
import { AddShoppingCartOutlined, Search } from '@material-ui/icons';
import React from 'react'
import styledComponents from 'styled-components'
import {mobile } from "../resposive" 

const Container = styledComponents.div`
height:60px;
font-size:14px;

`; 

const Wrapper = styledComponents.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
${mobile({padding:"10px 0px"})}
`;
const Left = styledComponents.div`
flex:1;
display:flex;
align-item:center;
`;
const Language = styledComponents.span`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})}
`

const SearchContainer = styledComponents.div`
border: none;
display:flex;
align-item:center;
margin-left:25px;
padding:5px;
${mobile({width:"50px"})}
`;
const Input = styledComponents.input`
border:none;
${mobile({width:"50px"})}
`;
const Center= styledComponents.div`
flex:1;
`;
const Logo = styledComponents.div`
font-weight:bold;
text-align:center;
${mobile({fontsize:"24px"})}`
;

const Right= styledComponents.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({flex:"2",justifycontent:"center"})}


`;
const Menuitem = styledComponents.div`
font-size:14;
cursor: pointer;
margin-left:25px;
${mobile({fontsize:"12px",marginleft:"10px"})}
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          
          <Language>En</Language>
        <SearchContainer>
        <Input placeholder='search'/>
       
        
        <Search style={{color:"gray", fontSize:16}}/>
        
          

        </SearchContainer>
        
        </Left>
        <Center><Logo>Addis Online Shop</Logo></Center>
        <Right>
          <Menuitem>
           REGISTER
        </Menuitem>
        <Menuitem>
        SIGN IN
        </Menuitem>
        
        <Menuitem>
        <Badge badgeContent={4} color="primary"/>
        <AddShoppingCartOutlined/>
        </Menuitem>
        
        
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
