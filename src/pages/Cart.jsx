import React from 'react'
import Navbar from '../componenets/Navbar'
import Announcement from '../componenets/Announcement'
import Footer from '../componenets/Footer'
import styledComponents from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../resposive'


const Container=styledComponents.div`

`;
const Wrapper=styledComponents.div`
padding:20px;
${mobile({padding:"10px"})}

`;
const Title=styledComponents.h1`
font-weight:300;
text-align:center;
`;
const Top=styledComponents.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;

`;
const TopButton=styledComponents.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props=>props.type === "filled" && "none"};
background-color:${props=>
  props.type === "filled" ? "black" : "transparent"};
color:${props=>props.type === "filled" && "white"};
`;
const TopTexts=styledComponents.div`
${mobile({display:"none"})}
`;
const Toptext=styledComponents.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;

`;

const Bottom=styledComponents.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})}

`;

const Info=styledComponents.div`
flex:3;
`;
const Hr=styledComponents.hr`
background-color:#eee;
border:none;
height:2px;

`;
const Product=styledComponents.div`
display:flex;
justify-content:space-around;
${mobile({flexDirection:"column"})}
`;
const ProductDetail=styledComponents.div`
flex:2;
display:flex;

`;
const Image=styledComponents.img`
width:200px;

`;
const Details=styledComponents.div`
display:flex;
flex-direction:column;
justify-content:space-between;

`;
const ProductName=styledComponents.span``;
const ProductId=styledComponents.span``;
const ProductColor=styledComponents.div`  
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};

`;
const ProductSize=styledComponents.span``;
const PriceDetail=styledComponents.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`;
const ProductAmountContainer=styledComponents.div`
display:flex;
align-items:center;
margin:5px;

`;
const ProductAmount=styledComponents.div`
font-size:24px;
margin:5px;
${mobile({margin:"5px 15px"})}
`;
const ProductPrice=styledComponents.div`
font-size:30px;
font-weight:200;
${mobile({marginBottom:"20px"})}
`;

const Summary=styledComponents.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;

`;
const SummaryTitle=styledComponents.h1`
font-weight:200;
`;
const SummaryItem=styledComponents.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type === "total" && "500"};
font-size:${props=>props.type === "total" && "24px"};
`;
const SummaryItemText=styledComponents.span``;
const SummaryItemPrice=styledComponents.span``; 
const Button=styledComponents.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;
border:none;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <Toptext>YOUR BAG(3)</Toptext>
            <Toptext >WISHLISTING(0)</Toptext>
          </TopTexts>
          <TopButton type="filled">CHCKOUT NOW</TopButton>
          
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
              <Image src="https://s.alicdn.com/@sc04/kf/H5035234cc37b43d9a2abd6f257236a99o.jpg_300x300.jpg"/>
                <Details>
                  <ProductName><b>Product:</b>SHEMA T-SHIRT</ProductName>
                <ProductId><b>ID:</b>1254</ProductId>
                <ProductColor color="black"/>
                <ProductSize><b>SIZE:</b>L</ProductSize>
                </Details>
             
              </ProductDetail>
              < PriceDetail>
              
              <ProductAmountContainer>
                <Add/>
                <ProductAmount>5</ProductAmount>
                <Remove/>
              </ProductAmountContainer>
              <ProductPrice>$20</ProductPrice>
              
              </ PriceDetail>



            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgujoE2hlrmNFm0qM_F-1SiJn-VRZHEVdbw&usqp=CAU"/>
                
                <Details>
                  <ProductName><b>Product:</b>SHEBET SHOE</ProductName>
                <ProductId><b>ID:</b>1254</ProductId>
                <ProductColor color="black"/>
                <ProductSize><b>SIZE:</b>41</ProductSize>
                </Details>
             
              </ProductDetail>
              < PriceDetail>
              
              <ProductAmountContainer>
                <Add/>
                <ProductAmount>2</ProductAmount>
                <Remove/>
              </ProductAmountContainer>
              <ProductPrice>$25</ProductPrice>
              
              </ PriceDetail>



            </Product>
          </Info>
          <Summary>
            <SummaryTitle>
             ORDER SUMMARY
            </SummaryTitle>

            <SummaryItem>

            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$ 85</SummaryItemPrice>

            </SummaryItem>

            <SummaryItem>

            <SummaryItemText>Estimated shipping</SummaryItemText>
            <SummaryItemPrice>$ 5.70</SummaryItemPrice>

            </SummaryItem>
           
           <SummaryItem>

            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>$ -5.70</SummaryItemPrice>

            </SummaryItem>

            <SummaryItem type="total">

            <SummaryItemText >Total</SummaryItemText>
            <SummaryItemPrice>$ 85</SummaryItemPrice>

            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
