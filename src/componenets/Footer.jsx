import { Email, Facebook, Instagram, MailOutline, Phone, Room, Telegram, WhatsApp } from '@material-ui/icons';
import React from 'react'
import styledComponents from 'styled-components'
import { mobile } from '../resposive';


const Container=styledComponents.div`
display:flex;
${mobile({flexDirection:"column"})}
`;
const Left=styledComponents.div`
flex:1;
display:flex;
flex-direction:column;
padding: 20px;
`;
const Logo=styledComponents.h1`

`;
const Desc=styledComponents.p`
margin: 20px 0px;

`;
const SocialContainer=styledComponents.div`
display:flex;

`;
const SocialIcons=styledComponents.div`
width:40px;
height:40px;
border-radius:50%;  
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:15px; 
`;
const Center=styledComponents.div`
flex:1;
padding:20px;
${mobile({display:"none"})}
`;
const Title =styledComponents.h3`
margin-bottom:30px;

`;
const List =styledComponents.ul`
margin:0px;
padding:0px;
list-style:none;
Display:flex;
flex-wrap:wrap;
`;
const ListItems =styledComponents.li`
width:50%;
margin-bottom:10px;
`;
const Right=styledComponents.div`
flex:1;
padding:20px;
${mobile({backgroundColor:"lightgrey"})}

`;
 const ContactItem=styledComponents.div`
 
 margin-bottom:20px;
 display:flex;
 align-items:center;
 `;
 const Payment=styledComponents.div`
 
 width:50%;
 `;
 
 
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Addis Online Shop</Logo>
            <Desc>there are many variations of passages of lorem Ipsum avaliable,but the majority have suffered alteration in some form, by injected humour, or random words which don't look even slightly belivable</Desc>
       <SocialContainer>
          <SocialIcons color="3b5999" >
              <Facebook/>
              
              </SocialIcons > 
              <SocialIcons color="00B2FF">
              <Telegram/>
              
              </SocialIcons>
              <SocialIcons color="E60023">
              <Instagram/>
              
              </SocialIcons >
              <SocialIcons color="25D366"> 
              <WhatsApp/>
              
              </SocialIcons>
             
       </SocialContainer>
        </Left>
        <Center>
          <Title>
Useful Links
          </Title>
          <List>
          <ListItems>Home</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Man Fashion</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>My Accounts</ListItems>
          <ListItems>Order Tracking</ListItems>
          <ListItems>Terms</ListItems>
          </List>
          
        </Center>
        <Right>
          <Title>Contact</Title>
           <ContactItem><Room style={ {marginRight:"10px"} }/>622 dixie path , south tobinchester 98336</ContactItem>
        <ContactItem><Phone style={ {marginRight:"10px"} }/>+251928541543</ContactItem>
       <ContactItem><MailOutline style={ {marginRight:"10px"} }/>Gebeya@gmail.com</ContactItem>
       <Payment src=""/>
       
        </Right>
      
    </Container>
  )
}

export default Footer
